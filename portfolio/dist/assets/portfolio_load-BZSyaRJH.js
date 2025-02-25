(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",async function(){const r=await(await fetch("/portfolio.json")).json(),i=document.getElementById("portfolioList");r.portfolio.map(o=>{i.innerHTML+=`<div class="project-card col-lg-6">
                    <div
                        class="card bg-darker-purple text-white rounded-0 border-0 shadow-md">
                        <div class="row g-0 border-purple">
                            <div class="col-md-4">
                                <img src="${o.project_image}"
                                    class="card-img-fluid object-fit-cover w-100 h-100" width="auto" height="auto" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title"> ${o.project_name} </h4>
                                    <p class="card-description">
                                        ${o.project_description}
                                    </p>
                                    <nav>
                                        ${o.project_tech_stack.map(e=>`<i class="${e} fs-1"> </i>`).join("")}
                                    </nav>
                                    <div class="nav justify-content-end">
                                        <a class="btn-purple text-white link-underline link-underline-opacity-0 p-2"
                                            href=${o.project_link}>
                                            <i class="bi bi-globe"></i>
                                            Visit website 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `})});
