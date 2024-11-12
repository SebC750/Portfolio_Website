const IntroSection = () => {
  return (
    <div className="bg-dark-blue text-yellow ">
      <div className="card text-bg-dark border-0">
        <img src="background_hero_picture.jpg" className="card-img opacity-50" alt="my profile picture" />
        <div className="card-img-overlay">
          <div className="card-body text-center text-yellow mt-5 pt-5">
            <h5> Hello. My name is: </h5>
            <h4> Sebastian Chalarca </h4>
            <h5> This is my official software development portfolio.
              You can learn more about me and see my work on this webpage.
            </h5>
            <ul className="d-flex justify-content-center gap-2">
              <li> <a className="nav-link" href="#about-section"> <button className="btn btn-yellow rounded-0"> Learn more about me </button> </a></li>
              <li> <a className="nav-link" href="#portfolio-section"> <button className="btn btn-yellow rounded-0"> Go to portfolio </button></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection