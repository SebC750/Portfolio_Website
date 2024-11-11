const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark-blue shadow-lg">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <h1 className="text-yellow"> Sebastian Chalarca </h1>
                <div className="d-flex gap-4 align-items-center">
                    
                    <ul className="nav d-flex gap-2">
                        <li className="nav-item"> <a href="#intro-section"> Home </a> </li>
                        <li className="nav-item"> <a href="#portfolio-section"> Portfolio</a></li>
                        <li className="nav-item"> <a href="#skills-section"> Skills</a></li>
                        <li className="nav-item"> <a href="#about-section"> About</a></li>
                        <li className="nav-item"> <a href="#contacts"> Contacts</a> </li>
                    </ul>
                    <ul className="nav d-flex gap-2">
                        <li> <i className="bi bi-github text-yellow fs-4"></i> </li>
                        <li> <i className="bi bi-linkedin text-yellow fs-4"></i> </li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Navbar