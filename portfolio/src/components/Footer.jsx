const Footer = () => {
  return (
    <>
      <div className="bg-dark p-5 text-yellow">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="fw-bold"> Sebastian Chalarca </h4>
              <ul>
                <li> <i className="bi bi-geo-alt-fill"></i> New York City, NY</li>
                <li> <i className="bi bi-envelope-fill"></i> [Email goes here] </li>
                <li> <i className="bi bi-telephone-fill"></i> [Number goes here]</li>
              </ul>
            </div>
            <div className="col">
              <h4 className="fw-bold"> Quick links </h4>
              <ul>
                <li> <a className="nav-link" href="#intro-section"> Home </a> </li>
                <li> <a className="nav-link" href="#about-section"> About me </a> </li>
                <li> <a className="nav-link" href="#skills-section"> Tech stack </a> </li>
                <li> <a className="nav-link" href="#portfolio"> Portfolio </a>  </li>
              </ul>
            </div>
            <div className="col">
              <h4 className="fw-bold"> Also on </h4>
              <ul className="nav gap-2">
                <li className="nav-item"> <a className="pb-1" href="https://github.com/SebC750"> <i className="bi bi-github text-yellow"></i> </a> </li>
                <li className="nav-item"> <a className="pb-1" href="www.linkedin.com/in/sebastian-chalarca-603939201"> <i className="bi bi-linkedin text-yellow"></i> </a> </li>
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