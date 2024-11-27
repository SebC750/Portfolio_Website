import techStack from "../datasets/TechStack.json"
const TechStackSection = () => {

    return (
        <div className="bg-yellow p-5" id="skills-section">
            <h3 className="text-dark border-bottom border-3 border-dark"> Tech stack </h3>
            <div className="p-3 text-dark">
                <p>
                    As a full stack developer, I possess extensive knowledge on both frontend and backend technologies.
                    I leverage web languages, backend languages, databases, services and build tools to create efficient systems independently and contribute to my team effectively by working in all aspects of development.
                </p>
                <div className="row row-cols-2 text-dark row-cols-md-2">
                    {Object.keys(techStack).map((category, index) => (
                        <div className="col-12 col-lg-6 text-dark" key={index}>
                            <h4 className="border-2 border-dark border-bottom"> {category} </h4>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 align-items-center py-2">
                                {techStack[category].map((val) => (
                                    <>
                                        <div className="d-flex flex-column align-items-center">
                                            <i className={`${val.technology_icon} language-icons`}> </i>
                                            <h5> {val.technology} </h5>
                                        </div>

                                    </>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStackSection