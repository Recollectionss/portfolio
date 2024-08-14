import '../app/styles/_pages-basic.scss'
import Navbar from "../shared/navbar/Navbar.tsx";
import TitlePage from "../shared/titlePage/TitlePage.tsx";

const Portfolio = () => {
    return (
        <div className={"main-container"}>
            {/*TODO: need hosting my other websites by grid*/}
            <Navbar/>
            <TitlePage title={"Portfolio"}/>
        </div>
    );
};

export default Portfolio;