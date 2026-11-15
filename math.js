/* Pure numerical helpers. Normal CDF: Abramowitz–Stegun erf approximation,
   absolute error < 1.5e-7. All displayed probabilities use the full precision. */
(function(root){
  function phi(z){
    if(z===Infinity)return 1;if(z===-Infinity)return 0;
    const s=z<0?-1:1,x=Math.abs(z)/Math.SQRT2,t=1/(1+.3275911*x);
    const erf=1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-.284496736)*t+.254829592)*t*Math.exp(-x*x);
    return .5*(1+s*erf);
  }
  function density(x,mu=0,sigma=1){return Math.exp(-.5*((x-mu)/sigma)**2)/(sigma*Math.sqrt(2*Math.PI));}
  function inversePhi(p){if(p<=0)return-Infinity;if(p>=1)return Infinity;let lo=-9,hi=9;for(let i=0;i<70;i++){const m=(lo+hi)/2;if(phi(m)<p)lo=m;else hi=m;}return(lo+hi)/2;}
  function binomialCDF(n,p,k){if(k<0)return 0;if(k>=n)return 1;if(p===0)return 1;if(p===1)return 0;let sum=0;for(let j=0;j<=Math.floor(k);j++){let log=0;for(let a=1;a<=j;a++)log+=Math.log((n-a+1)/a);sum+=Math.exp(log+j*Math.log(p)+(n-j)*Math.log1p(-p));}return Math.min(1,sum);}
  function minTrials(p,q){return Math.ceil(Math.log1p(-q)/Math.log1p(-p));}
  function scoreInterval(n,h,c){const den=1+c*c/n,center=(h+c*c/(2*n))/den,half=c*Math.sqrt(h*(1-h)/n+c*c/(4*n*n))/den;return[center-half,center+half];}
  function waldInterval(n,h,c){const e=c*Math.sqrt(h*(1-h)/n);return[h-e,h+e];}
  const api={phi,density,inversePhi,binomialCDF,minTrials,scoreInterval,waldInterval};root.Mathe=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
