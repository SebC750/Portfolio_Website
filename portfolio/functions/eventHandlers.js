const LOGO_DIMENSIONS = {
    width: 100,
    height: 100
}
document.addEventListener("DOMContentLoaded", async function(){
    const response = await fetch('/techStack.json')
    const techStackData = await response.json()
    const techList = document.getElementById("techList")
    techStackData["technologies"].map((val) =>{
        techList.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
           <img src="${val.src}" alt="${val.alt}" height="${LOGO_DIMENSIONS.height}" width="${LOGO_DIMENSIONS.width}"/>
        </div>
        `
    })
    
})
