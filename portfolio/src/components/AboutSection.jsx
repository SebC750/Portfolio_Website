const AboutSection = () => {
  return (
    <div className="bg-yellow p-5">
      <h3 className="border-bottom border-3 border-black" id="about-section"> About me </h3>
      <div className="p-3">
        <p> My name is Sebastian Chalarca and I am a passionate software developer.
          I specialize in developing and maintaining high quality software including:
        </p>
        <ul>
          <li> Full stack web applications </li>
          <li> Desktop applications</li>
          <li> Jupyter notebooks</li>
          <li> Automation scripts</li>
        </ul>
        <p> Beyond coding, I also engage in a handful of hobbies: </p>
        <ul>
          <li> <i className="bi bi-pencil-fill"></i> Drawing </li>
          <li> <i className="bi bi-globe"></i> Traveling </li>
          <li> <i className="bi bi-music-note"></i> Alternative music </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutSection