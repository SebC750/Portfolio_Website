const AboutSection = () => {
  return (
    <div className="bg-yellow p-1 p-sm-5">
      <h3 className="border-bottom border-3 border-black" id="about-section"> About me </h3>
      <div className="p-3">
        <p> My name is Sebastian Chalarca and I am a passionate software developer.
          I specialize in developing and maintaining high quality software including:
        </p>
        <ul className="list-group-flush">
          <li className="list-group-item"> <i className="bi bi-globe2"></i> Full stack web applications </li>
          <li className="list-group-item"> <i className="bi bi-layout-text-window-reverse"></i> Static websites </li>
          <li className="list-group-item"> <i className="bi bi-window-sidebar"></i> Desktop applications</li>
          <li className="list-group-item"> <i className="bi bi-pencil-square"></i> Jupyter notebooks</li>
        </ul>
        <p> Beyond coding, I also engage in a handful of hobbies: </p>
        <ul className="list-group-flush">
          <li className="list-group-item"> <i className="bi bi-pencil-fill"></i> Drawing </li>
          <li className="list-group-item"> <i class="bi bi-geo-alt-fill"></i> Traveling </li>
          <li className="list-group-item"> <i className="bi bi-music-note"></i> Alternative music (Mostly Gothic rock and Darkwave)</li>
        </ul>
        <strong> Important notes: </strong>
        <ol className="list-group-flush list-group-numbered">
          <li className="list-group-item"> My email (sebastian.chalarca.dev@gmail.com) is my preferred method of contact.</li>
          <li className="list-group-item"> I am a fast learner. If technologies in your tech stack are not in the section below, there is no problem. I am always learning new concepts and willing to pick up any tools to get the job done quickly! </li>
          <li className="list-group-item"> I am also open to relocation, if necessary, and salary negotiation. </li>
        </ol>
        <figure>
              <blockquote className="blockquote">
                <p>There is no master but experience, and we are all its students...learning until death.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                 <cite title="Source Title" className="text-black">Me, circa 2024</cite>
              </figcaption>
            </figure>
      </div>
    </div>
  )
}

export default AboutSection