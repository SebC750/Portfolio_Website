const Footer = () => {
  return (
    <>
      <div className="bg-dark p-5 text-yellow" id="contacts">
        <div className="container container-sm-fluid">
          <div className="row row-cols-1 row-cols-sm-3">
            <div className="col-12 d-flex text-sm-start text-center flex-column align-items-center">
              <h4 className="fw-bold "> Sebastian Chalarca </h4>
              <ul className="list-group-flush">
                <li className="list-group-item"> <i className="bi bi-geo-alt-fill"></i> New York City, NY</li>
                <li className="list-group-item"> <i className="bi bi-envelope-fill"></i> sebastian.chalarca.dev@gmail.com</li>
                <li className="list-group-item"> <i className="bi bi-telephone-fill"></i> 929-216-4699</li>
              </ul>
            </div>
            <div className="col-12 d-none d-sm-block">
              <h4 className="fw-bold"> Quick links </h4>
              <ul className="list-group-flush" >
                <li className="list-group-item"> <a className="nav-link" href="#intro-section"> Home </a> </li>
                <li className="list-group-item"> <a className="nav-link" href="#about-section"> About me </a> </li>
                <li className="list-group-item"> <a className="nav-link" href="#skills-section"> Tech stack </a> </li>
                <li className="list-group-item"> <a className="nav-link" href="#portfolio"> Portfolio </a>  </li>
              </ul>
            </div>
            <div className="col-12 d-none d-sm-block">
              <h4 className="fw-bold"> Also on </h4>
              <ul className="nav gap-2">
                <li > <a className="pb-1" href="https://www.linkedin.com/in/sebastian-chalarca-603939201/" aria-label="Go to my github profile to see my works"> <img src="LI-In-Bug.png" loading="lazy" aria-label="LinkedIn profile icon link" alt="linkedin logo" height="35" width="40" />  </a> </li>
                <li > <a className="pb-1" href="https://github.com/SebC750" aria-label="Go to my linkedin profile to learn more about me."> <img src="github-mark-white.svg" loading="lazy" aria-label="GitHub profile icon link" alt="github logo" height="35" width="35" /> </a> </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="attribution-text text-center opacity-50 text-yellow"> Icons provided by <a href="https://devicon.dev/">Devicon</a>. All product names, logos, and brands are property of their respective owners.
          Java and the Java logo are trademarks of Oracle Corporation.
          PHP is a trademark of the PHP Group.
          Vercel and the Vercel design are trademarks of Vercel, Inc.
          Google Cloud and the Google Cloud logo are trademarks of Google LLC.
          GitHub and the GitHub logo are trademarks of GitHub, Inc.
          LinkedIn and the LinkedIn logo are trademarks of LinkedIn Corporation. </p>
        <p className="footer-copyright-text opacity-50"> 2024, Sebastian Chalarca </p>
      </div>
    </>
  )
}

export default Footer