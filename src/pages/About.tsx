import '../app/styles/_pages-basic.scss'
import Navbar from "../shared/navbar/Navbar.tsx";
import TitlePage from "../shared/titlePage/TitlePage.tsx";
import TitleAndTextContent, {Info} from "../widgets/titleAndTextContent/TitleAndTextContent.tsx";
const About = () => {

    const info : Info[] = [
        {text:"Hi, I'm Ilya, a front-end developer. My contact information is already provided in the left section."},
        {title: "Why Front-End Development?", text: "I became interested in building websites after experimenting with various areas of programming, including\n" +
                "                developing a project in C++ focused on object-oriented programming (OOP). I realized that front-end\n" +
                "                development is particularly fascinating because it allows me to see the results of my work\n" +
                "                immediately."},
        {title: "Other Activities", text: "In addition to my studies, I have been actively involved in student life. During my first year at\n" +
                "                university, I joined the co-working space \"CHITALKA,\" where I served as an administrator for a year. I\n" +
                "                then moved on to the student parliament of the faculty, where I held the position of deputy head for six\n" +
                "                months."},
        {title: "", text: "In this role, I organized various events, took responsibility for communication with the faculty\n" +
                "                administration, and played an active role in the admissions campaign by speaking to high school\n" +
                "                graduates and organizing two open days. Additionally, I organized a Dota tournament with sponsorship\n" +
                "                (including support from SoftServe) and assisted in the production and launch of videos for the faculty's\n" +
                "                YouTube channel."},
    ]

    return (
        <div className="main-container">
            <Navbar/>
            <TitlePage title={"About me"}/>
            <TitleAndTextContent content={info}/>
        </div>
    );
};

export default About;