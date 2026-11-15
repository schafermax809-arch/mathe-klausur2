'use strict';
/* Pointer effects are event driven: no idle animation loop, no WebGL. */
window.MatheMotion = (() => {
  let dispose = () => {};
  const models = [
    ['1 − (1 − p)ⁿ ≥ q', 'Vom Gegenereignis zur Mindestanzahl.'],
    ['μ − cσ ≤ X ≤ μ + cσ', 'Vom bekannten Modell zur Trefferzahl.'],
    ['P(X ≤ b) = Φ((b − μ) / σ)', 'Die Fläche unter der Kurve zählt.'],
    ['normCdf(−∞, b, μ, σ)', 'Grenzen eingeben. Fläche berechnen.'],
    ['z = (x − μ) / σ', 'Eine Verteilung. Eine gemeinsame Skala.'],
    ['X ≤ k → Y ≤ k + 0,5', 'Von diskreten Balken zur stetigen Kurve.'],
    ['p̂ − d ≤ p ≤ p̂ + d', 'Aus der Stichprobe auf p schließen.']
  ];
  function sketch(index) {
    const x = z => 140 + z * 34, y = z => 158 - 112 * Math.exp(-z*z/2);
    const curve = (lo, hi) => Array.from({length:81}, (_,i) => { const z=lo+(hi-lo)*i/80;return `${i?'L':'M'}${x(z).toFixed(2)},${y(z).toFixed(2)}`; }).join(' ');
    const lo=index===1?-1.96:-3.6, hi=index===1?1.96:1;
    // Exact binomial masses, normalized only vertically for the thumbnail.
    const n=index===5?64:12,center=n/2,sd=Math.sqrt(n/4);
    const mass=k=>{let p=2**(-n);for(let j=1;j<=k;j++)p*=((n-j+1)/j);return p;};
    const bars=Array.from({length:n+1},(_,k)=>k).filter(k=>Math.abs((k-center)/sd)<=3.6).map(k=>{const h=mass(k)/mass(center)*112,w=34/sd*.78;return `<rect class="sketch-bar" x="${x((k-center)/sd)-w/2}" y="${158-h}" width="${w}" height="${h}" rx="1"/>`;}).join('');
    let drawing = index===0 ? bars : `<path class="sketch-area" d="M${x(lo)},158 ${curve(lo,hi).replace('M','L')} L${x(hi)},158Z"/>${index===5?bars:''}<path class="sketch-curve" pathLength="1" d="${curve(-3.6,3.6)}"/><line class="sketch-bound" x1="${x(hi)}" x2="${x(hi)}" y1="${y(hi)}" y2="158"/>`;
    if(index===6) drawing=[0,1,2,3,4].map((i)=>`<g transform="translate(${i%2?12:-9},${i*25})"><path class="sketch-curve" d="M78 28H202M78 20v16M202 20v16"/><circle cx="140" cy="28" r="5" fill="currentColor"/></g>`).join('')+'<path class="sketch-bound" d="M140 12v138"/>';
    return `<svg viewBox="0 0 280 190" aria-hidden="true"><path class="sketch-axis" d="M18 158H263"/>${drawing}<text x="140" y="180" text-anchor="middle">${index===6?'p':index===4?'0 = μ':'μ'}</text></svg>`;
  }
  function mount() {
    dispose();
    const controller = new AbortController(), {signal}=controller;
    const fine=matchMedia('(hover: hover) and (pointer: fine)'), reduced=matchMedia('(prefers-reduced-motion: reduce)');
    const canMove=()=>fine.matches&&!reduced.matches;
    const lists=[...document.querySelectorAll('.topic-list')];
    const observers=[];
    for(const list of lists){
      list.classList.add('has-preview');
      const preview=document.createElement('a');preview.className='topic-preview';preview.setAttribute('aria-hidden','true');preview.tabIndex=-1;list.append(preview);
      let current=-1;
      function show(row,move=true){
        const index=[...list.querySelectorAll('.topic-row')].indexOf(row);if(index<0)return;
        if(index!==current){current=index;preview.innerHTML=`<div class="preview-art">${sketch(index)}</div><div class="preview-formula ${index===3?'cas-preview':''}">${models[index][0]}</div><p>${models[index][1]}</p><span class="preview-open">Thema öffnen <span>↗</span></span>`;preview.dataset.topic=String(index);}
        preview.href=row.getAttribute('href');list.classList.add('is-exploring');
        const maximum=Math.max(0,list.offsetHeight-preview.offsetHeight-16);
        preview.style.setProperty('--preview-y',`${Math.max(0,Math.min(maximum,row.offsetTop+(row.offsetHeight-preview.offsetHeight)/2))}px`);
        if(!move)preview.style.setProperty('--preview-tilt','0deg');
      }
      const rows=[...list.querySelectorAll('.topic-row')];
      rows.forEach(row=>{
        row.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'&&canMove())show(row);},{signal});
        row.addEventListener('pointermove',e=>{
          if(e.pointerType!=='mouse'||!canMove())return;const r=row.getBoundingClientRect();
          row.style.setProperty('--hover-x',`${(e.clientX-r.left)/r.width*100}%`);
          row.style.setProperty('--hover-y',`${(e.clientY-r.top)/r.height*100}%`);
          preview.style.setProperty('--preview-tilt',`${(e.clientX-r.left)/r.width*5-2.5}deg`);
        },{signal});
        row.addEventListener('focus',()=>show(row,false),{signal});
      });
      list.addEventListener('pointerleave',()=>{preview.style.setProperty('--preview-tilt','0deg');},{signal});
      show(rows[Math.min(2,rows.length-1)],false);
    }
    document.querySelectorAll('.button,.start-link').forEach(button=>{
      if(button.querySelector('.motion-label'))return;
      const label=document.createElement('span');label.className='motion-label';while(button.firstChild)label.append(button.firstChild);button.append(label);button.classList.add('motion-button');
    });
    let active=null, frame=0, px=0,py=0;
    function reset(){if(active){active.style.setProperty('--magnet-x','0px');active.style.setProperty('--magnet-y','0px');active=null;}cancelAnimationFrame(frame);frame=0;}
    function move(e){
      const button=e.target.closest('.motion-button');if(!button||e.pointerType!=='mouse'||!canMove()){reset();return;}
      if(active!==button){reset();active=button;}const r=button.getBoundingClientRect();px=(e.clientX-r.left)/r.width;py=(e.clientY-r.top)/r.height;
      if(!frame)frame=requestAnimationFrame(()=>{if(active){active.style.setProperty('--magnet-x',`${(px-.5)*8}px`);active.style.setProperty('--magnet-y',`${(py-.5)*6}px`);active.style.setProperty('--fill-x',`${px*100}%`);active.style.setProperty('--fill-y',`${py*100}%`);}frame=0;});
    }
    document.addEventListener('pointermove',move,{signal,passive:true});
    document.addEventListener('pointerout',e=>{if(active&&!active.contains(e.relatedTarget))reset();},{signal});
    window.addEventListener('blur',reset,{signal});
    reduced.addEventListener('change',reset,{signal});
    if(!reduced.matches){
      const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('has-entered');observer.unobserve(entry.target);}},{threshold:.08});
      document.querySelectorAll('.worksheet-opening,.graph-panel,.home-bottom,.page-intro').forEach((el,i)=>{el.classList.add('motion-reveal');el.style.setProperty('--reveal-delay',`${Math.min(i,2)*65}ms`);observer.observe(el);});observers.push(observer);
    }
    dispose=()=>{controller.abort();reset();observers.forEach(o=>o.disconnect());lists.forEach(list=>{list.querySelector('.topic-preview')?.remove();list.classList.remove('has-preview','is-exploring');});};
    return dispose;
  }
  return {mount};
})();
