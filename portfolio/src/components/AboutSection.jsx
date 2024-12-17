const AboutSection = () => {
  return (
    <div className="bg-yellow p-3 p-sm-5">
      <h3 className="border-bottom border-3 border-black" id="about-section"> About me </h3>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-xl-2">
          <div className="col p-3">
            <div>
              <h4 className="d-flex align-items-end gap-2"> <i class="bi bi-question-circle-fill fs-3"></i> Who am i? </h4>
              <p>
                My name is Sebastian Chalarca. I am a full stack web developer that works independently and collaboratively to create web applications
                for providing high-quality programs that deliver solutions for real-world use cases. I also specialize in the development of applications
                for advancing research on the implementation of Generative AI, NLP and LLMs to sectors such as education and biomedics.
              </p>
              <p> Previously, I pursued a future as a cartoonist at Art and Design High School of Manhattan. Initially during high school, I enjoyed drawing characters and fictional storytelling.
                Around senior year however, I realized that drawing for work was not fulfilling and decided to pursue another path. Programming became a natural choice for me since it allows me
                to express my creativity in a different medium and I enjoy seeing my programs come to life after putting all the parts of the software together. Now I am looking forward to not only creating
                full stack web applications and websites but also using these apps to address the needs of people in every way possible.
              </p>
              <strong> <p> My work includes the following types of applications: </p></strong>
              <ul className="list-group-flush">
                <li className="list-group-item"> <i className="bi bi-globe2"></i> Full stack web applications </li>
                <li className="list-group-item"> <i className="bi bi-layout-text-window-reverse"></i> Static websites </li>
                <li className="list-group-item"> <i className="bi bi-window-sidebar"></i> Desktop applications</li>
                <li className="list-group-item"> <i className="bi bi-pencil-square"></i> Jupyter notebooks</li>
              </ul>
              <h4 className="d-flex align-items-end gap-2"> <i className="bi bi-emoji-smile-fill"></i> Hobbies </h4>
              <p> Beyond coding, I also engage in a handful of hobbies: </p>
              <ul className="list-group-flush">
                <li className="list-group-item fs-5"> <i className="bi bi-pencil-fill"></i> Drawing </li>
                <ul className="d-none d-sm-block">
                  <li className="d-flex align-items-center gap-2">
                    My art is hosted on my personal art gallery: <a href="https://art-gallery-app-3fddc.web.app/" target="_blank"> https://art-gallery-app-3fddc.web.app/ </a>
                  </li>
                </ul>
                <li className="list-group-item fs-5"> <i class="bi bi-geo-alt-fill"></i> Traveling </li>
                <ul className="d-none d-sm-block">
                  <li className="d-flex align-items-center gap-2">
                    Countries visited: <span className="fs-6"> 🇫🇷 🇨🇴 🇪🇸 🇮🇹 </span>
                  </li>
                </ul>
                <li className="list-group-item fs-5"> <i className="bi bi-music-note"></i> Music (80s and 90s rock)</li>
              </ul>
              <h4 className="d-flex align-items-end gap-2"> <i className="bi bi-lightning-fill"></i> Quick facts </h4>
              <ol className="list-group-flush list-group-numbered">
                <li className="list-group-item"> I can work in person, hybrid or remotely. </li>
                <li className="list-group-item"> I am a fast learner. If technologies in your tech stack are not in the section below, there is no problem. I am always learning new concepts and willing to pick up any tools to get the job done quickly! </li>
                <li className="list-group-item"> I am also open to relocation, if necessary, and salary negotiation. </li>
              </ol>
              <a role="button" href="Sebastian Chalarca Resume.pdf" aria-label="Download link to my resume pdf" className="btn border border-dark border-2 btn-outline-dark btn-lg w-100" download> <i className="bi bi-file-text-fill fs-3"></i> Download my resume </a>
            </div>
          </div>
          <div className="col order-first p-3">
            <img src="profile_picture.png" className="img-fluid border rounded border-dark border-3 h-100 w-100 object-fit-cover" alt="My profile picture, taken at MSCHE Conference" loading="lazy" />
          </div>

        </div>
      </div>


    </div>
  )
}

export default AboutSection