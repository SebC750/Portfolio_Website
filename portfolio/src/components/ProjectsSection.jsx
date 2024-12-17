import portfolio from "../datasets/Portfolio.json"
const ProjectsSection = () => {
  return (
    <div className="bg-dark p-3 p-sm-5 ">
      <h3 className="header-border-white text-white" id="portfolio-section"> Portfolio </h3>
      <div className="container-fluid">
        <p className="text-white"> This section features a few of my best works in software development, including both personal and professional projects. 
          Please note that this is not an exhaustive list of my projects. Additional work can be found on my
          <a className="text-white" target="_blank" title="See more projects on my github" href="https://github.com/SebC750?tab=repositories"> Github </a></p>
        <div className="row row-cols-1 row-cols-lg-2">
          {portfolio.map((val, index) => (
            <>
              <div key={index} className="col-12 d-flex align-items-stretch pb-4 p-3">
                <div className="card d-flex border-0 shadow shadow-xl w-100 bg-white text-dark ">
                  <img src={val.project_thumbnail} alt={`Project thumbnail for ${val.project_name}`} loading="lazy" className="card-img-top object-fit-cover w-100" height="300" width="300" />
                  <div className="card-body d-flex flex-column justify-content-between ">
                    <h5 className="card-title border-bottom border-2 border-dark pb-2"> {val.project_name} </h5>
                    <h6 className="card-title"> Description</h6>
                    <ul > 
                      {val.project_description.map((desc) =>(
                      <>
                      <li> {desc} </li>
                      </>
                    ))} </ul>
                    <h6 className="card-text"> Tech stack: </h6>
                    <p className="card-text d-flex">
                      <div className="row w-100 row-cols-3 row-cols-sm-4 row-cols-md-5 row-cols-lg-6">
                      {Array.from(val.tech_stack).map((val) => (
                        <>
                          <i className={`devicon-${val}-${val === "electron" ? "original" : "plain"} language-icons`}></i>
                        </>
                      ))}
                      </div>
                      
                    </p>
                    <button className="btn btn-dark d-block w-100 btn-lg">
                      {!val.project_link.includes("github") ? (
                        <>
                          <a className="nav-link text-white p-2 fs-3" target="_blank" title="Visit the live website." href={val.project_link}> <i className="bi bi-globe fs-3"></i> Website link </a>
                        </>
                      ) :
                        (
                          <>
                            <a className="nav-link text-white p-2 fs-4" target="_blank" title="See the source code on my github." href={val.project_link}> <i className="bi bi-github fs-3"> </i>Vist github page </a>
                          </>
                        )}
                    </button>
                  </div>
                </div >
              </div>
            </>
          ))}
          
        </div>
        <a className="text-center fs-2 text-white d-flex justify-content-center gap-2" target="_blank" title="See more projects on my github" href="https://github.com/SebC750?tab=repositories"> More projects on Github <i className="bi bi-box-arrow-up-right"></i></a>
      </div >
      
    </div >
  )
}

export default ProjectsSection