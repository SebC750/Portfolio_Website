import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const changeNavbarStyle = () => {      
        if (window.innerWidth > 992 && window.scrollY > 100) {
            setIsScrolled(true);
        } 
        else if (window.innerWidth > 992) {
            setIsScrolled(false);
        }
        else {
            setIsScrolled(true);
        }
    };
    useEffect(() => {     
        changeNavbarStyle();     
        document.addEventListener('scroll', changeNavbarStyle);
        window.addEventListener('resize', changeNavbarStyle);     
        return () => {
            document.removeEventListener('scroll', changeNavbarStyle);
            window.removeEventListener('resize', changeNavbarStyle);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg shadow shadow-xl position-fixed z-3 w-100 ${isScrolled ? "bg-dark" : "bg-transparent"}`}>
            <div className="container-fluid">
                <h2 className="text-yellow nav-logo fw-bold fs-2">
                    <a className="nav-link" href="#intro-section">Sebastian Chalarca</a>
                </h2>
                <button className="bg-yellow navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Menu toggle button">
                    <i className="bi bi-three-dots"></i>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav gap-sm-2 gap-0 d-flex align-items-center ms-auto">
                        <li className="nav-item"><h3><a href="#intro-section">Home</a></h3></li>
                        <li className="nav-item"><h3><a href="#about-section">About</a></h3></li>
                        <li className="nav-item"><h3><a href="#skills-section">Skills</a></h3></li>
                        <li className="nav-item"><h3><a href="#portfolio-section">Portfolio</a></h3></li>
                        <li className="nav-item"><h3><a href="#contacts">Contacts</a></h3></li>
                    </ul>
                    <div className="d-flex align-items-center text-center text-sm-left justify-content-center gap-2">
                        <a className="pb-2 ps-0 ps-md-2" href="https://github.com/SebC750" aria-label="Go to my github profile to see my works">
                            <i className="bi bi-github text-yellow fs-2"></i>
                        </a>
                        <a className="pb-2" href="https://www.linkedin.com/in/sebastian-chalarca-603939201/" aria-label="Go to my linkedin profile to learn more about me.">
                            <i className="bi bi-linkedin text-yellow fs-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
