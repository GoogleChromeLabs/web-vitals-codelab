import"./logAllInteractions-7c4f95cf.js";import"./fps-meter-db9f2547.js";import{b as e}from"./blockFor-149404f6.js";function o(t){requestAnimationFrame(()=>{setTimeout(t,100)})}o(()=>{const t=document.querySelector("score-keeper");t.button.addEventListener("click",()=>{t.incrementAndUpdateUI(),requestIdleCallback(()=>{e(1e3)})})});
