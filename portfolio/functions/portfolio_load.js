document.addEventListener("DOMContentLoaded", async function(){
    const response = await fetch('/portfolio.json')
    const portfolioData = await response.json()
    const portfolioList = document.getElementById("portfolioList")
    portfolioData["portfolio"].map((val) => {
        portfolioList.innerHTML += `<div class="project-card col-lg-6">
                    <div
                        class="card bg-darker-purple text-white rounded-0 border-0 shadow-md">
                        <div class="row g-0 border-purple">
                            <div class="col-md-4">
                                <img src="${val.project_image}"
                                    class="card-img-fluid object-fit-cover w-100 h-100" width="auto" height="auto" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title"> ${val.project_name} </h4>
                                    <p class="card-description">
                                        ${val.project_description}
                                    </p>
                                    <nav>
                                        ${val.project_tech_stack.map((tech) => {
                                            return `<i class="${tech} fs-1"> </i>`
                                        }).join("")}
                                    </nav>
                                    <div class="nav justify-content-end">
                                        <a class="btn-purple text-white link-underline link-underline-opacity-0 p-2"
                                            href=${val.project_link}>
                                            <i class="bi bi-globe"></i>
                                            Visit website 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    })

})