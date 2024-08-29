import '../app/styles/_pages-basic.scss'
import Navbar from "../shared/navbar/Navbar.tsx";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons/faBookOpen";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";
import SectionWithIcon, {SectionItem} from "../entities/section/sectionWithIcon/SectionWithIcon.tsx";
import TitlePage from "../shared/titlePage/TitlePage.tsx";
const Resume = () => {
    const itemsEducation:SectionItem[] = [
        {title: "Taras Shevchenko National University of Kyiv", dates: "2022 - Present", info: "121 specialization - Software Engineer"},
    ];
    const itemsExperience:SectionItem[] = [
        {title: "C++", dates: "1-3 months", info:"I worked on a training project for several months as part of a two-person team. My responsibilities included developing the gamified portion of the application and creating tasks for our mini-team to streamline the development process using C++ and Qt."},
    ];
    const itemsStack:SectionItem[] = [
        {title: "HTML"},
        {title: "CSS (SCSS, SASS, Bootstrap) "},
        {title: "JavaScript / TypeScript"},
        {title: "React"},
        {title: "Redux"},
        {title: "git"},
    ];

    return (
        <div className="main-container">
            <Navbar/>
            <TitlePage title={"Resume"}/>
            <SectionWithIcon icon={faBookOpen} sectionTitle={"Education"} items={itemsEducation}/>
            <SectionWithIcon icon={faBookOpen} sectionTitle={"Experience"} items={itemsExperience}/>
            <SectionWithIcon icon={faCode} sectionTitle={"Stack"} items={itemsStack}/>
        </div>
    );
};

export default Resume;