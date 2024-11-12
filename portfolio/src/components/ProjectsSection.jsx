import portfolio from "../datasets/Portfolio.json"
const ProjectsSection = () => {
  return (
    <div className="bg-yellow p-5">
      <h3 className="border-bottom border-black border-3" id="portfolio-section"> Portfolio </h3>
      <div className="p-3">
        <div className="row  gap-4">
          {portfolio.map((val, index) => (
            <>
              <div key={index} className="col-3 d-flex align-items-stretch">
                <div className="card bg-dark text-yellow">
                  <div className="card-body">
                    <h5 className="card-title header-border-yellow pb-2"> {val.project_name} </h5>
                    <p className="card-text"> {val.description} </p>
                    <p className="card-text"> Tech stack: </p>
                    {/* 
                    
                    */}
                    <p className="card-text d-flex gap-2"> 
                      {Array.from(val.tech_stack).map((val) => (
                      <>
                          <i className={`devicon-${val}-plain fs-1`}></i>
                      </>
                    ))}</p>
                    <button className="btn btn-yellow rounded-0 d-block w-100"> <a className="nav-link" href={val.project_link}> Link to project </a> </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection