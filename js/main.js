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
try{const s=localStorage.getItem("theme");root.dataset.theme=s||"light"}catch(e){root.dataset.theme="light"}
lab();tb.onclick=()=>setT(dark()?"light":"dark");
// hero pipeline
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll(".stage").forEach((s,i)=>reduce?s.classList.add("on"):setTimeout(()=>s.classList.add("on"),500+i*650));
// chat
const cb=$("chatb"),ch=$("chat"),log=$("log");
cb.onclick=()=>{const o=ch.classList.toggle("open");cb.setAttribute("aria-expanded",o);cb.textContent=o?"Close":"✨ Ask about Jatin’s experience!"};
$("qs").innerHTML=faq.map((f,i)=>`<button data-i="${i}">${E(f[0])}</button>`).join("");
$("qs").onclick=e=>{const b=e.target.closest("button");if(!b)return;const f=faq[b.dataset.i];
log.insertAdjacentHTML("beforeend",`<div class="q">${E(f[0])}</div><div class="a">${E(f[1])}</div>`);log.scrollTop=log.scrollHeight};

// loader, metrics, free-text chat
(function(){
const L=$("loader"),n=$("ldn");
if(L){if(reduce){L.remove()}else{let v=0;const t=setInterval(()=>{v=Math.min(100,v+Math.ceil(Math.random()*9));n.textContent=v+"%";
if(v>=100){clearInterval(t);setTimeout(()=>{L.classList.add("done");setTimeout(()=>L.remove(),500)},200)}},45)}}
$("metrics").innerHTML=[["50+","Test scenarios written"],[projects.filter(x=>x.g==="work").length,"Internship projects"],["2","Degrees: MCA and BSc CS"]].map(x=>`<div class="m"><b>${x[0]}</b><span>${E(x[1])}</span></div>`).join("");
const words=s=>s.toLowerCase().match(/[a-z0-9+#]{3,}/g)||[];
const stop=new Set(["what","who","how","does","did","has","have","his","him","the","and","about","tell","jatin","with","for","can","you"]);
function answer(q){const w=words(q).filter(x=>!stop.has(x));let best=null,bs=0;
const cand=[...faq.map(f=>({t:f[0]+" "+f[1],a:f[1]})),...projects.map(p=>({t:[p.name,p.desc,p.pts.join(" "),p.tech.join(" ")].join(" "),a:p.name+": "+p.desc+" "+p.pts.slice(0,2).join(". ")+"."}))];
cand.forEach(c=>{const tw=new Set(words(c.t));const s=w.filter(x=>tw.has(x)).length;if(s>bs){bs=s;best=c}});
return best&&bs>0?best.a:"I can only answer from this portfolio. Try asking about his projects, testing work, skills, education or how to contact him."}
const hist=[];
if(CHAT_API){const s=document.querySelector(".chead small");if(s)s.textContent="Online · Powered by Groq · answers from this portfolio"}
async function send(){const i=$("ask"),q=i.value.trim();if(!q)return;i.value="";
log.insertAdjacentHTML("beforeend",`<div class="q">${E(q)}</div><div class="a" id="pend">…</div>`);log.scrollTop=log.scrollHeight;
let a="";
if(CHAT_API){try{const ctl=new AbortController(),tm=setTimeout(()=>ctl.abort(),45000);
const r=await fetch(CHAT_API.replace(/\/$/,"")+"/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:q,history:hist.slice(-6)}),signal:ctl.signal});
clearTimeout(tm);if(r.ok)a=(await r.json()).reply}catch(e){}}
if(!a)a=answer(q);
hist.push({role:"user",content:q},{role:"assistant",content:a});
const p=$("pend");p.removeAttribute("id");p.textContent=a;log.scrollTop=log.scrollHeight}
$("send").onclick=send;$("ask").addEventListener("keydown",e=>{if(e.key==="Enter")send()});
})();
