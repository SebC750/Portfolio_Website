import techStack from "../datasets/TechStack.json"
const TechStackSection = () => {

    return (
        <div className="bg-dark p-5">
            <h3 className="text-yellow header-border-yellow" id="skills-section"> Tech stack </h3>
            <div className="p-3 text-yellow">
                <p>
                    As a full stack developer, I possess extensive knowledge on both frontend and backend technologies.
                    I leverage web languages, backend languages, databases, services and build tools to create efficient systems independently and contribute to my team effectively by working in all aspects of development.
                </p>
                <div className="row gap-4">
                    {techStack.map((val, index) => (
                        <>
                            <div key={index} className="col-2 d-flex flex-col align-items-center gap-2">
                                <i className={`${val.technology_icon} language-icons`}></i>
                                <h6> {val.technology} </h6>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStackSection