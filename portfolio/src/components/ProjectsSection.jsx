import portfolio from "../datasets/Portfolio.json"
const ProjectsSection = () => {
  return (
    <div className="bg-dark p-3 p-sm-5 ">
      <h3 className="header-border-yellow text-yellow" id="portfolio-section"> Portfolio </h3>
      <div className="container-fluid">
        <p className="text-yellow"> This is my list of projects that I have worked on or currently working on. This includes personal and work projects. </p>
        <div className="row ">
          {portfolio.map((val, index) => (
            <>
              <div key={index} className="col-12 col-lg-6 col-xl-4 d-flex align-items-stretch pb-4">
                <div className="card d-flex border-0 shadow shadow-xl w-100 bg-yellow text-dark ">
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
                      <div className="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
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
                          <a className="nav-link text-yellow p-2 fs-3" href={val.project_link}> <i className="bi bi-globe fs-3"></i> Link to project </a>
                        </>
                      ) :
                        (
                          <>
                            <a className="nav-link text-yellow p-2 fs-4" href={val.project_link}> <i className="bi bi-github fs-3"> </i>Vist github page </a>
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