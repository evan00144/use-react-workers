import{a as u,j as e,r as m}from"./react.psr0uTs7.js";import{r as n}from"./index.LFf77hJu.js";function s(t){return t<=1?t:s(t-1)+s(t-2)}let a=0;function x(){const t=document.querySelector(".logo");a+=2,t&&(t.style.transform=`rotate(${a%360}deg)`)}function j(){const[t,o]=n.useState(0),[c,i,{status:l}]=u(s,0);return n.useEffect(()=>{const r=setInterval(x,100);return()=>clearInterval(r)},[]),e.jsxs("div",{className:"not-content my-8 mx-auto w-fit text-center",children:[e.jsx("div",{children:e.jsx("img",{src:m.src,className:"logo react w-80 mb-8",alt:"React logo"})}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Fib Number:"})," ",c]}),e.jsxs("div",{className:"flex gap-4 justify-center",children:[e.jsx("input",{type:"number",value:t,onChange:({target:r})=>o(Number(r.value))}),e.jsx("button",{className:"btn primary",onClick:()=>i(t),children:"Calc new state"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Worker Status:"})," ",l]})]})]})}export{j as UseWorkerState};