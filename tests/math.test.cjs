const assert=require('node:assert/strict');
const M=require('../math.js');
const {LESSONS,EXERCISES,EXAM_IDS}=require('../content.js');
const near=(a,b,tol=1e-6)=>assert.ok(Math.abs(a-b)<=tol,`${a} != ${b}`);
// Independent reference values, computed with Python statistics.NormalDist,
// integer bounds and the binomial PMF; not obtained from the browser helpers.
const reference={
 min99:29,fuse:299,prog90:[4918,5082],prog95:[181,219],prog99:[4871,5129],
 areaLeft:84.1344746069,areaMiddle:47.7249868052,casQuantile:193.5922421723,
 casTail:8.0756659234,standardNeg:8.6914971764,standardRange:12.9580602197,
 approxProb:12.9538330351,approxCheck:'Nein',confidenceLow:9.62053384095,
 confidenceApprox:6.51418068524,accuracy:16641,mixed1:'Konfidenzintervall',mixed2:'Prognoseintervall'
};
assert.equal(LESSONS.length,7);assert.equal(EXERCISES.length,18);assert.equal(EXAM_IDS.length,10);
for(const e of EXERCISES){assert.ok(reference[e.id]!==undefined,e.id);const want=reference[e.id];if(Array.isArray(want)||typeof want==='string')assert.deepEqual(e.answer,want);else near(e.answer,want,Math.max(e.tol||0,1e-8));assert.ok(e.hint&&e.solution&&e.prompt,e.id+' content incomplete');}
near(M.phi(0),.5,1e-8);near(M.phi(1),.8413447460685);near(M.phi(-1.36),.086914971764);near(M.phi(.55)-M.phi(.2),.129580602197);
near(M.inversePhi(.1),-1.2815515655,1e-6);near(M.phi(M.inversePhi(.99)),.99,1e-8);
for(const [p,q,n]of[[.15,.95,19],[.15,.99,29],[.01,.95,299]]){assert.equal(M.minTrials(p,q),n);assert.ok(1-(1-p)**n>=q);assert.ok(1-(1-p)**(n-1)<q);}
near(M.binomialCDF(500,.05,19),.127234523909,1e-9);
near(M.phi((19.5-25)/Math.sqrt(23.75)),.129538330351,1e-6);
const [lo,hi]=M.scoreInterval(200,.15,2.58);near(lo,.0962053384094594,1e-12);near(hi,.2263416526346118,1e-12);
for(const p of[lo,hi])near(200*(p-.15)**2-2.58**2*p*(1-p),0,1e-10);
near(M.waldInterval(200,.15,2.58)[0],.08485819314756,1e-12);
// Integrate the density independently with Simpson's rule: total area ≈ 1.
let sum=0;const h=16/10000;for(let i=0;i<=10000;i++)sum+=(i===0||i===10000?1:i%2?4:2)*M.density(-8+i*h);near(sum*h/3,1,1e-10);
assert.equal(EXAM_IDS.slice(0,3).every(id=>EXERCISES.find(e=>e.id===id).mode==='Hilfsmittelfrei'),true);
assert.equal(EXAM_IDS.slice(0,3).length*10,30);assert.equal(EXAM_IDS.slice(3).length*10,70);
console.log('18 Aufgabenlösungen, 7 Themen, Normalverteilung, Binomialwahrscheinlichkeiten, Konfidenzgrenzen und 30/70-Gewichtung geprüft.');
