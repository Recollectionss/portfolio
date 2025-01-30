import '../app/styles/_pages-basic.scss'
import Navbar from "../shared/navbar/Navbar.tsx";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons/faBookOpen";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";
import SectionWithIcon, {SectionItem} from "../entities/section/sectionWithIcon/SectionWithIcon.tsx";
import TitlePage from "../shared/titlePage/TitlePage.tsx";
const Resume = () => {
    const itemsEducation:SectionItem[] = [
        {title: "Taras Shevchenko National University of Kyiv", dates: "2022 - Present", info: "121 specialization - Software Engineer"},
        {title: "Database Structures and Management with MySQL", dates: "May 2024"},
    ];
    const itemsExperience:SectionItem[] = [
        {title: "Confero (Discord Voting Bot, Node.js and TypeScript)", dates: "1 months", info:"Fully functional voting bot for Discord tailored for CS FSCS to digitalize voting processes. The bot leverages database migrations, middleware, and transactions to ensure reliability and efficiency. It follows a modular architecture, allowing for easy scalability and future feature expansion."},
        {title: "Blue Ship Sea Battle, Flutter)", dates: "2 weeks", info:" Battleship game app using Flutter, featuring an interactive interface and smooth gameplay. The app offers a seamless gaming experience and demonstrates effective use of Flutter's cross-platform capabilities."},
        {title: "Silently (To-do app with RPG system C++)", dates: "3 months", info:"I worked on a training project for several months as part of a two-person team. My responsibilities included developing the gamified portion of the application and creating tasks for our mini-team to streamline the development process using C++ and Qt."},
    ];
    const itemsStack:SectionItem[] = [
        {title: "JavaScript / TypeScript"},
        {title: "Express.js / Nest.js"},
        {title: "Docker"},
        {title: "SQL/NoSQL databases"},
        {title: "RabbitMq"},
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