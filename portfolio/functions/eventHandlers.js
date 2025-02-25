const LOGO_DIMENSIONS = {
    width: 100,
    height: 100
}
document.addEventListener("DOMContentLoaded", async function(){
    const response = await fetch('/techStack.json')
    const techStackData = await response.json()
    const techList = document.getElementById("techList")
    techStackData["technologies"].map((val) =>{
        techList.innerHTML += `<div class="col-6 col-md-4 col-lg-3">
           <img class="tech-logo" src="${val.src}" alt="${val.alt}" height="${LOGO_DIMENSIONS.height}" width="${LOGO_DIMENSIONS.width}"/>
        </div>
        `
    })   
})

window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".main-section");
    elements.forEach((val) =>{
        if (val.getBoundingClientRect().top < window.innerHeight * 0.9) {
            val.classList.add("visible");
          }
    })
  });