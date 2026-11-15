'use strict';
/* Short, mathematical experiments and navigation for the working pages. */
window.MatheStudy=(()=>{
 let dispose=()=>{};
 const nf=(v,d=2)=>v.toLocaleString('de-DE',{minimumFractionDigits:d,maximumFractionDigits:d});
 const names=['Mindestanzahl ausprobieren','Sicherheit und Intervall','Die gesamte Fläche','CAS-Eingaben vergleichen','Standardisierung ausprobieren','Die Näherung untersuchen','Genauigkeit untersuchen'];
 function labMarkup(index){return `<aside class="chapter-lab" data-lab="${index}" aria-label="${names[index]}"><div class="lab-heading">${names[index]}</div><div class="lab-drawing"></div><div class="lab-result" role="status" aria-live="polite"></div><div class="lab-controls"></div><p class="lab-note"></p></aside>`;}
 function practiceSummary(count,total){return `<aside class="practice-summary" aria-label="Lernfortschritt"><svg viewBox="0 0 180 180" aria-hidden="true"><circle class="summary-track" cx="90" cy="90" r="76"/><circle class="summary-fill" cx="90" cy="90" r="76" pathLength="100" style="stroke-dashoffset:${total?100-count/total*100:100}"/></svg><div><strong data-solved-count>${count}<span> / ${total}</span></strong><span>Aufgaben richtig gelöst</span></div><p>Dein Stand in dieser Auswahl</p></aside>`;}
 function scoreBreakdown(a,b){return `<div class="score-breakdown"><div><span>Teil A · Hilfsmittelfrei</span><strong>${a}<small> / 30</small></strong><progress max="30" value="${a}" aria-label="Ergebnispunkte Teil A"></progress></div><div><span>Teil B · Mit Hilfsmitteln</span><strong>${b}<small> / 70</small></strong><progress max="70" value="${b}" aria-label="Ergebnispunkte Teil B"></progress></div></div>`;}
 function normalSketch(lo,hi,{bars=false,zlabel='z',axis='−3σ → +3σ'}={}){
  const x=z=>24+(z+3.5)/7*252,y=z=>140-Math.exp(-z*z/2)*103;
  const path=(a,b)=>Array.from({length:91},(_,i)=>{const z=a+(b-a)*i/90;return `${i?'L':'M'}${x(z).toFixed(2)},${y(z).toFixed(2)}`;}).join(' ');
  const a=Math.max(-3.5,lo),b=Math.min(3.5,hi);
  const area=b>a?`<path class="lab-area" d="M${x(a)},140 ${path(a,b).replace('M','L')} L${x(b)},140Z"/>`:'';
  const columns=bars?Array.from({length:25},(_,i)=>{const z=(i-12)/4,h=Math.exp(-z*z/2)*103;return `<rect class="lab-bar" x="${x(z)-3.5}" y="${140-h}" width="7" height="${h}"/>`;}).join(''):'';
  return `<svg viewBox="0 0 300 176" aria-hidden="true"><path class="lab-axis" d="M20 140H280"/>${area}${columns}<path class="lab-curve" d="${path(-3.5,3.5)}"/>${Number.isFinite(hi)&&hi<3.5?`<path class="lab-bound" d="M${x(hi)} ${y(hi)}V140"/><circle class="lab-dot" cx="${x(hi)}" cy="${y(hi)}" r="4"/>`:''}<text x="150" y="162" text-anchor="middle">${zlabel}</text><text x="276" y="18" text-anchor="end">${axis}</text></svg>`;
 }
 function mount(){
  dispose();const controller=new AbortController(),{signal}=controller;const observers=[];let scrollFrame=0;
  const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-lab]').forEach(lab=>{
   const index=Number(lab.dataset.lab),drawing=lab.querySelector('.lab-drawing'),result=lab.querySelector('.lab-result'),controls=lab.querySelector('.lab-controls'),note=lab.querySelector('.lab-note');
   let value=({0:19,1:1.96,2:0,3:0,4:1,5:64,6:400})[index];
   function setControls(){
    const range=(label,min,max,step)=>`<label>${label}<input type="range" min="${min}" max="${max}" step="${step}" value="${value}" aria-label="${label}"></label>`;
    if(index===0)controls.innerHTML=range('Anzahl n',1,30,1);
    if(index===1)controls.innerHTML=`<div class="lab-options" role="group" aria-label="Sicherheitswahrscheinlichkeit">${[[1.64,'90 %'],[1.96,'95 %'],[2.58,'99 %']].map(([v,label])=>`<button type="button" data-lab-value="${v}" aria-pressed="${v===value}">${label}</button>`).join('')}</div>`;
    if(index===3)controls.innerHTML='<div class="lab-options" role="group" aria-label="CAS-Funktion"><button type="button" data-lab-value="0" aria-pressed="true">Fläche suchen</button><button type="button" data-lab-value="1" aria-pressed="false">Grenze suchen</button></div>';
    if(index===4)controls.innerHTML=range('z-Wert',-3,3,.1);
    if(index===5)controls.innerHTML=range('Stichprobengröße n',16,256,16);
    if(index===6)controls.innerHTML=range('Stichprobengröße n',100,1600,100);
   }
   function draw(){
    if(index===0){
     const x=n=>22+n/30*254,y=p=>144-p*117,prob=1-.85**value;
     const points=Array.from({length:31},(_,n)=>`${n?'L':'M'}${x(n)},${y(1-.85**n)}`).join(' ');
     drawing.innerHTML=`<svg viewBox="0 0 300 176" aria-hidden="true"><path class="lab-axis" d="M22 23V144H280"/><path class="lab-bound" d="M22 ${y(.95)}H280"/><text x="276" y="${y(.95)-7}" text-anchor="end">95 %</text><path class="lab-curve" d="${points}"/><circle class="lab-dot" cx="${x(value)}" cy="${y(prob)}" r="5"/><text x="22" y="163">0</text><text x="276" y="163" text-anchor="end">30 Versuche</text></svg>`;
     result.innerHTML=`<span>n = ${value}</span><strong>${nf(prob*100)}<small> %</small></strong>`;
     note.textContent=`p = 0,15. ${value<19?'Noch unter dem Ziel von 95 %.':value===19?'19 ist die kleinste passende Anzahl.':'Ziel erreicht; schon 19 Versuche genügen.'}`;
    }
    if(index===1){drawing.innerHTML=normalSketch(-value,value,{zlabel:'μ = 200',axis:'n = 400 · p = 0,5'});result.innerHTML=`<span>Näherungsintervall</span><strong class="interval-value">[${Math.ceil(200-value*10)}; ${Math.floor(200+value*10)}]</strong>`;note.textContent=`c = ${nf(value)}. Grenzen für ganze Treffer nach innen gerundet; die tatsächliche binomiale Sicherheit kann abweichen.`;}
    if(index===2){drawing.innerHTML=normalSketch(-3.5,3.5,{zlabel:'μ',axis:'Gesamte Kurve'});result.innerHTML='<span>Gesamtfläche</span><strong>100<small> %</small></strong>';note.textContent='Links und rechts von μ liegen jeweils 50 %. Unten kannst du die Grenzen selbst verschieben.';}
    if(index===3){const z=value?Mathe.inversePhi(.1):1;drawing.innerHTML=normalSketch(-3.5,z,{zlabel:'μ = 200 g',axis:'σ = 5 g'});result.innerHTML=value?`<span>Die leichtesten 10 %</span><strong>${nf(200+z*5)}<small> g</small></strong>`:'<span>P(X ≤ 205)</span><strong>84,13<small> %</small></strong>';note.innerHTML=`<code>${value?'invNorm(0.1, 200, 5)':'normCdf(−∞, 205, 200, 5)'}</code>`;}
    if(index===4){drawing.innerHTML=normalSketch(-3.5,value,{zlabel:'0',axis:'Z ∼ N(0; 1)'});result.innerHTML=`<span>z = ${nf(value,1)}</span><strong>${nf(Mathe.phi(value)*100)}<small> %</small></strong>`;note.textContent=`Φ(${nf(value,1)}) = ${nf(Mathe.phi(value),4)}. Die markierte Fläche liegt links von z.`;}
    if(index===5){
     // Exact B(n; 0.5) masses compared with its normal density, on the same scale.
     const mu=value/2,sd=Math.sqrt(value*.25),x=z=>24+(z+3.5)/7*252;
     let prob=2**(-value);const masses=[];for(let k=0;k<=value;k++){if(k)prob*=((value-k+1)/k);const z=(k-mu)/sd;if(Math.abs(z)<=3.5)masses.push({k,z,p:prob});}
     const columns=masses.map(m=>`<rect class="lab-bar" x="${x(m.z)-252/(7*sd)*.42}" y="${140-m.p*sd*Math.sqrt(2*Math.PI)*103}" width="${252/(7*sd)*.84}" height="${m.p*sd*Math.sqrt(2*Math.PI)*103}"/>`).join('');
     drawing.innerHTML=normalSketch(-3.5,3.5,{zlabel:`μ = ${mu}`,axis:'p = 0,5'}).replace('<path class="lab-curve"',columns+'<path class="lab-curve"');
     result.innerHTML=`<span>n = ${value}</span><strong>σ = ${nf(sd,1)}</strong>`;note.textContent=sd>3?'σ > 3: Faustregel erfüllt. Balken sind binomial, die Linie ist die Normalnäherung.':'σ ≤ 3: Die Faustregel für die Normalnäherung ist noch nicht erfüllt.';
    }
    if(index===6){const half=1.96*Math.sqrt(.5*.5/value),lo=.5-half,hi=.5+half,x=p=>22+(p-.35)/.3*256;drawing.innerHTML=`<svg viewBox="0 0 300 176" aria-hidden="true"><path class="lab-axis" d="M22 119H278"/><path class="lab-bound" d="M150 28V134"/><path class="lab-interval" d="M${x(lo)} 82H${x(hi)}M${x(lo)} 70V94M${x(hi)} 70V94"/><circle class="lab-dot" cx="150" cy="82" r="5"/><text x="150" y="155" text-anchor="middle">p̂ = 0,5 · 95 %</text></svg>`;result.innerHTML=`<span>n = ${value} · Näherungsintervall</span><strong class="interval-value">[${nf(lo,3)}; ${nf(hi,3)}]</strong>`;note.textContent=`Halbe Breite d ≈ ${nf(half,3)}. Vierfaches n halbiert d bei gleicher relativer Häufigkeit.`;}
    controls.querySelectorAll('[data-lab-value]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.labValue)===value)));
   }
   setControls();draw();
   controls.addEventListener('input',event=>{if(event.target.matches('input')){value=Number(event.target.value);draw();}},{signal});
   controls.addEventListener('click',event=>{const button=event.target.closest('[data-lab-value]');if(button){value=Number(button.dataset.labValue);draw();}},{signal});
  });
  const copy=document.querySelector('.lesson-grid > .lesson-copy'),aside=document.querySelector('.lesson-aside');
  if(copy&&aside){
   const headings=[...copy.querySelectorAll(':scope > h2, :scope > .exercise-section > h2')];
   const nav=document.createElement('nav');nav.className='lesson-sections';nav.setAttribute('aria-label','Abschnitte dieser Lektion');
   nav.innerHTML='<h3>In dieser Lektion</h3>'+headings.map((h,i)=>`<button type="button" data-section="${i}"><span>${String(i+1).padStart(2,'0')}</span>${h.textContent}</button>`).join('')+'<div class="reading-track" aria-hidden="true"><span></span></div>';
   aside.append(nav);
   nav.addEventListener('click',event=>{const button=event.target.closest('[data-section]');if(!button)return;const h=headings[Number(button.dataset.section)];h.tabIndex=-1;h.scrollIntoView({behavior:reduced()?'instant':'smooth',block:'start'});h.focus({preventScroll:true});},{signal});
   const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){const index=headings.indexOf(entry.target);nav.querySelectorAll('[data-section]').forEach((b,i)=>{b.classList.toggle('active',i===index);if(i===index)b.setAttribute('aria-current','location');else b.removeAttribute('aria-current');});}},{rootMargin:'-5% 0px -65% 0px'});
   headings.forEach(h=>observer.observe(h));observers.push(observer);
   const update=()=>{scrollFrame=0;const box=copy.getBoundingClientRect();const percent=Math.min(100,Math.max(0,(-box.top+innerHeight*.25)/(copy.offsetHeight-innerHeight*.5)*100));nav.style.setProperty('--read-progress',`${percent}%`);};
   window.addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(update);},{signal,passive:true});update();
   observers.push({disconnect:()=>nav.remove()});
  }
  function refreshPractice(){
   const tasks=[...document.querySelectorAll('#practice-list .exercise')];if(!tasks.length)return;
   const count=tasks.filter(section=>solved[section.dataset.exercise]).length,summary=document.querySelector('.practice-summary');
   if(summary){summary.querySelector('[data-solved-count]').innerHTML=`${count}<span> / ${tasks.length}</span>`;summary.querySelector('.summary-fill').style.strokeDashoffset=String(100-count/tasks.length*100);}
   const status=document.querySelector('.select-row .small');if(status)status.textContent=`${tasks.length} Aufgaben · ${count} bereits richtig gelöst`;
  }
  document.querySelectorAll('.exercise').forEach(section=>{if(!section.classList.contains('exam-task'))section.classList.toggle('is-correct',!!solved[section.dataset.exercise]);});
  document.addEventListener('submit',event=>{if(event.target.matches('.answer-form')&&!event.target.closest('.exam-task')){event.target.closest('.exercise').classList.toggle('is-correct',event.target.classList.contains('answered-correctly'));refreshPractice();}},{signal});
  const toolbar=document.querySelector('.exam-toolbar');
  if(toolbar){
   const nav=document.createElement('nav');nav.className='exam-task-nav';nav.setAttribute('aria-label','Zu Klausuraufgabe springen');nav.innerHTML=Array.from({length:10},(_,i)=>`<button type="button" data-task="${i}" aria-label="Zu Aufgabe ${i+1}">${i+1}</button>`).join('');toolbar.insertBefore(nav,toolbar.lastElementChild);
   const status=document.createElement('span');status.className='exam-answer-status';status.setAttribute('role','status');toolbar.firstElementChild.append(status);
   const update=()=>{let answered=0;nav.querySelectorAll('button').forEach((button,i)=>{const has=!!document.querySelector(`[data-exam-index="${i}"] [name="answer"]`)?.value.trim();button.classList.toggle('has-answer',has);button.setAttribute('aria-label',`Zu Aufgabe ${i+1}${has?', Antwort eingetragen':''}`);if(has)answered++;});status.textContent=`${answered} / 10 Antworten eingetragen`;};
   toolbar.addEventListener('click',event=>{const button=event.target.closest('[data-task]');if(!button)return;const section=document.querySelector(`[data-exam-index="${button.dataset.task}"]`);section.scrollIntoView({behavior:reduced()?'instant':'smooth',block:'start'});const field=section.querySelector('textarea');field.focus({preventScroll:true});},{signal});
   document.addEventListener('input',event=>{if(event.target.closest('.exam-task'))update();},{signal});update();observers.push({disconnect:()=>{nav.remove();status.remove();}});
  }
  // Actual table lookup: selecting a cell gives its z value and cumulative probability.
  document.addEventListener('click',event=>{const cell=event.target.closest('.normal-table td');if(!cell)return;const table=cell.closest('table'),host=cell.closest('.table-host');table.querySelectorAll('.selected-cell').forEach(el=>el.classList.remove('selected-cell'));cell.classList.add('selected-cell');const row=[...table.tBodies[0].rows].indexOf(cell.parentElement),column=cell.cellIndex-1,z=row/10+column/100;let output=host.querySelector('.table-selection');if(!output){output=document.createElement('p');output.className='table-selection';output.setAttribute('role','status');host.append(output);}output.textContent=`z = ${nf(z)} → Φ(z) = ${cell.textContent}. Das ist die Fläche links von z.`;},{signal});
  document.addEventListener('focusin',event=>{const table=event.target.closest('.normal-table');if(table&&!table.querySelector('.selected-cell'))table.tBodies[0].rows[0].cells[1].click();},{signal});
  document.addEventListener('keydown',event=>{
   const table=event.target.closest('.normal-table');if(!table||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key)||event.ctrlKey||event.altKey||event.metaKey)return;
   event.preventDefault();const selected=table.querySelector('.selected-cell');let r=selected?[...table.tBodies[0].rows].indexOf(selected.parentElement):0,c=selected?selected.cellIndex-1:0;
   if(event.key==='ArrowLeft')c--;if(event.key==='ArrowRight')c++;if(event.key==='ArrowUp')r--;if(event.key==='ArrowDown')r++;if(event.key==='Home')c=0;if(event.key==='End')c=9;
   r=Math.max(0,Math.min(39,r));c=Math.max(0,Math.min(9,c));const cell=table.tBodies[0].rows[r].cells[c+1];cell.click();cell.scrollIntoView({block:'nearest',inline:'nearest',behavior:'instant'});
  },{signal});
  dispose=()=>{controller.abort();cancelAnimationFrame(scrollFrame);observers.forEach(observer=>observer.disconnect());};
 }
 return{labMarkup,practiceSummary,scoreBreakdown,mount};
})();
