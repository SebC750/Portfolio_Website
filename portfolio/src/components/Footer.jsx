const Footer = () => {
  return (
    <>
      <div className="bg-dark p-5 text-yellow" id="contacts">
        <div className="container container-sm-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <h4 className="fw-bold"> Sebastian Chalarca </h4>
              <ul className="ps-0">
                <li> <i className="bi bi-geo-alt-fill"></i> New York City, NY</li>
                <li> <i className="bi bi-envelope-fill"></i> sebastian.chalarca.dev@gmail.com</li>
                <li> <i className="bi bi-telephone-fill"></i> 929-216-4699</li>
              </ul>
            </div>
            <div className="col-12 col-md-4 d-none d-sm-block">
              <h4 className="fw-bold"> Quick links </h4>
              <ul >
                <li> <a className="nav-link" href="#intro-section"> Home </a> </li>
                <li> <a className="nav-link" href="#about-section"> About me </a> </li>
                <li> <a className="nav-link" href="#skills-section"> Tech stack </a> </li>
                <li> <a className="nav-link" href="#portfolio"> Portfolio </a>  </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 d-none d-sm-block">
              <h4 className="fw-bold"> Also on </h4>
              <ul className="nav gap-2">
                <li className="nav-item"> <a className="pb-1" href="https://github.com/SebC750" aria-label="Go to my github profile to see my works"> <i className="bi bi-github text-yellow"></i> </a> </li>
                <li className="nav-item"> <a className="pb-1" href="www.linkedin.com/in/sebastian-chalarca-603939201" aria-label="Go to my linkedin profile to learn more about me."> <i className="bi bi-linkedin text-yellow"></i> </a> </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="footer-copyright-text"> 2024, Sebastian Chalarca All rights reserved. </p>
      </div>
    </>
  )
}

export default Footer