import{u as c,j as t,r as i}from"./react.psr0uTs7.js";import{r as o}from"./index.LFf77hJu.js";let a=0;function l(){const e=document.querySelector(".logo");a+=2,e&&(e.style.transform=`rotate(${a%360}deg)`)}function x(){const[e,r]=o.useState(0),s=c(m);return s.onMessage(({data:n})=>r(n)),o.useEffect(()=>{const n=setInterval(l,100);return()=>clearInterval(n)},[]),t.jsxs("div",{className:"not-content my-8 mx-auto w-fit text-center",children:[t.jsx("div",{children:t.jsx("img",{src:i.src,className:"logo react w-80 mb-8",alt:"React logo"})}),t.jsxs("div",{className:"grid gap-4",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Count:"})," ",e]}),t.jsxs("div",{className:"flex gap-4 justify-center",children:[t.jsx("button",{className:"btn primary",onClick:()=>{s.terminate(),s.postMessage(2)},children:"Count by 2"}),t.jsx("button",{className:"btn primary",onClick:()=>{s.terminate(),s.postMessage(5)},children:"Count by 5"}),t.jsx("button",{className:"btn",onClick:()=>s.terminate(),children:"Stop Timer"})]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Worker Status:"})," ",s.status]})]})]})}const m=e=>{let r=e;setInterval(()=>{postMessage(r),r+=e},1e3)};export{x as UseWorker};
