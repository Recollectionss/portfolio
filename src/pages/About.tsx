import '../app/styles/_pages-basic.scss'
import Navbar from "../shared/navbar/Navbar.tsx";
import TitlePage from "../shared/titlePage/TitlePage.tsx";
const About = () => {
    return (
        <div className="main-container">
            <Navbar/>
            <TitlePage title={"About me"}/>
            {/*TODO: writing some info about me, what im doing, my social activity ...*/}
            {/*<p>I`m Front-End developer from Kiev, Ukraine working in web development.</p>*/}
            {/*<p>*/}
            {/*    <br/>*/}
            {/*    Study in 3-rd year in Taras Shevchenko National University of Kyiv on specialization 121 Software Engineering*/}
            {/*</p>*/}
        </div>
    );
};

export default About;