import"./logAllInteractions-7c4f95cf.js";import"./fps-meter-db9f2547.js";import{b as c}from"./blockFor-149404f6.js";import{s as i}from"./schedulerDotYield-410fe3db.js";function a(t){requestAnimationFrame(()=>{setTimeout(t,100)})}a(()=>{const t=document.querySelector("score-keeper"),r=t.button;async function o(n){const s=n/10;for(let e=0;e<s;e++)await i(),c(10)}r.addEventListener("click",async()=>{t.incrementAndUpdateUI(),await o(1e3)})});
