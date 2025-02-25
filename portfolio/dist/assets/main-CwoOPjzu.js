import"./portfolio_load-BZSyaRJH.js";const n={width:100,height:100};document.addEventListener("DOMContentLoaded",async function(){const t=await(await fetch("/techStack.json")).json(),i=document.getElementById("techList");t.technologies.map(e=>{i.innerHTML+=`<div class="col-6 col-md-4 col-lg-3">
           <img class="tech-logo" src="${e.src}" alt="${e.alt}" height="${n.height}" width="${n.width}"/>
        </div>
        `})});window.addEventListener("scroll",function(){document.querySelectorAll(".main-section").forEach(t=>{t.getBoundingClientRect().top<window.innerHeight*.9&&t.classList.add("visible")})});
