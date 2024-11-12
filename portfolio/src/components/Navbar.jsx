import { useState, useEffect } from "react"
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const changeNavbarStyle = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false)
        }
    }
    useEffect(() => {

        document.addEventListener('scroll', changeNavbarStyle)
        return (() => {
            document.removeEventListener('scroll', changeNavbarStyle)
        })
    }, [])
    return (
        <nav className={`navbar navbar-expand-lg ${isScrolled ? "bg-dark" : "bg-transparent"} shadow-lg position-fixed w-100 z-3`}>
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <h1 className="text-yellow fw-bold nav-logo"> <a className="nav-link" href="#intro-section"> Sebastian Chalarca </a>  </h1>
                <ul className="nav d-flex align-items-end gap-3">
                    <li className="nav-item"> <h4> <a href="#intro-section"> Home </a> </h4> </li>
                    <li className="nav-item"> <h4> <a href="#portfolio-section"> Portfolio</a> </h4></li>
                    <li className="nav-item"> <h4> <a href="#skills-section"> Skills</a> </h4></li>
                    <li className="nav-item"> <h4> <a href="#about-section"> About</a> </h4></li>
                    <li className="nav-item"> <h4> <a href="#contacts"> Contacts</a> </h4> </li>
                    <ul className="nav gap-3 navbar-border-yellow ps-3">
                        <li className="nav-item"> <a className="pb-2" href="https://github.com/SebC750"> <i className="bi bi-github text-yellow fs-2"></i> </a> </li>
                        <li className="nav-item"> <a className="pb-2" href="www.linkedin.com/in/sebastian-chalarca-603939201"> <i className="bi bi-linkedin text-yellow fs-2"></i> </a> </li>
                    </ul>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar