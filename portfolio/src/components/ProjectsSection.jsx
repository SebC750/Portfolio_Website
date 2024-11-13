import portfolio from "../datasets/Portfolio.json"
const ProjectsSection = () => {
  return (
    <div className="bg-yellow p-3 p-sm-5 ">
      <h3 className="border-bottom border-black border-3" id="portfolio-section"> Portfolio </h3>
      <div className="container-fluid">
        <p> This is my list of projects that I have worked on or currently working on. This includes personal and work projects. </p>
        <div className="row">
          {portfolio.map((val, index) => (
            <>
              <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch pb-4">
                <div className="card border-0 shadow shadow-xl w-100 bg-dark text-yellow">
                  <img src={val.project_thumbnail} alt={`Project thumbnail for ${val.project_name}`} loading="lazy" className="card-img-top object-fit-cover w-100" height="300" width="300" />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title header-border-yellow pb-2"> {val.project_name} </h5>
                    <h6 className="card-title"> Description</h6>
                    <p className="card-text"> {val.project_description} </p>
                    <h6 className="card-text"> Tech stack: </h6>
                    <p className="card-text d-flex gap-2">
                      {Array.from(val.tech_stack).map((val) => (
                        <>
                          <i className={`devicon-${val}-plain fs-1`}></i>
                        </>
                      ))}
                    </p>
                    <button className="btn btn-yellow rounded-0 d-block w-100 btn-lg">
                      {!val.project_link.includes("github") ? (
                        <>
                          <a className="nav-link p-2 fs-3" href={val.project_link}> <i className="bi bi-globe fs-3"></i> Link to project </a>
                        </>
                      ) :
                        (
                          <>
                            <a className="nav-link p-2 fs-4" href={val.project_link}> <i className="bi bi-github fs-3"> </i>Vist github page </a>
                          </>
                        )}
                    </button>
                  </div>
                </div >
              </div>
            </>
          ))}
        </div>
      </div >
    </div >
  )
}

export default ProjectsSection