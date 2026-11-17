// ---- RENDER ----
const E=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const $=i=>document.getElementById(i),tg=a=>`<div class="tags">${a.map(t=>`<span>${E(t)}</span>`).join("")}</div>`;
$("hero-chips").innerHTML=heroChips.map(c=>`<li>${E(c)}</li>`).join("");
$("focus").innerHTML=focus.map(f=>`<article class="card"><span class="n">${E(f[0])}</span><h3>${E(f[1])}</h3><p>${E(f[2])}</p>${tg(f[3])}</article>`).join("");
const pc=p=>`<article class="card"><span class="status ${E(p.cls)}">${E(p.status)}</span><h3>${E(p.name)}</h3><p>${E(p.desc)}</p><ul>${p.pts.map(x=>`<li>${E(x)}</li>`).join("")}</ul>${tg(p.tech)}</article>`;
["work","personal"].forEach(g=>$("p-"+g).innerHTML=projects.filter(p=>p.g===g).map(pc).join(""));
$("skill-list").innerHTML=Object.entries(skills).map(([k,v])=>`<div><h3>${E(k)}</h3><ul class="chips">${v.map(s=>`<li>${E(s)}</li>`).join("")}</ul></div>`).join("");
$("yr").textContent=new Date().getFullYear();
// theme
const root=document.documentElement,tb=$("theme");
const dark=()=>root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme: dark)").matches;
const lab=()=>tb.textContent=dark()?"Light mode":"Dark mode";
function setT(t){root.dataset.theme=t;lab();try{localStorage.setItem("theme",t)}catch(e){}}
try{const s=localStorage.getItem("theme");if(s)root.dataset.theme=s}catch(e){}
lab();tb.onclick=()=>setT(dark()?"light":"dark");
// hero pipeline
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll(".stage").forEach((s,i)=>reduce?s.classList.add("on"):setTimeout(()=>s.classList.add("on"),500+i*650));
// chat
const cb=$("chatb"),ch=$("chat"),log=$("log");
cb.onclick=()=>{const o=ch.classList.toggle("open");cb.setAttribute("aria-expanded",o);cb.textContent=o?"Close":"Ask about Jatin"};
$("qs").innerHTML=faq.map((f,i)=>`<button data-i="${i}">${E(f[0])}</button>`).join("");
$("qs").onclick=e=>{const b=e.target.closest("button");if(!b)return;const f=faq[b.dataset.i];
log.insertAdjacentHTML("beforeend",`<div class="q">${E(f[0])}</div><div class="a">${E(f[1])}</div>`);log.scrollTop=log.scrollHeight};
