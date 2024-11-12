import {useState} from "react"
const TechStackSection = () => {
    const [dropdownSelection, setDropdownSelection] = useState()
    return (
        <div className="bg-dark p-5">
            <h3 className="text-yellow border-yellow" id="skills-section"> Tech stack </h3>
            <div className="p-3 text-yellow">
                <p> 
                    As a full stack developer, I possess extensive knowledge on both frontend and backend technologies.
                    I leverage web languages, backend languages, databases, services and build tools to create efficient systems independently and contribute to my team effectively by working in all aspects of development.
                    Read more below for more.
                </p>
            </div>
        </div>
    )
}

export default TechStackSection