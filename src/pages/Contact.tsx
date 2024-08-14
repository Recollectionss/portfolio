import Navbar from "../shared/navbar/Navbar.tsx";
import '../app/styles/_pages-basic.scss'
import MyForm from "../widgets/form/MyForm.tsx";
import Map from "../features/map/Map/Map.tsx";
import TitlePage from "../shared/titlePage/TitlePage.tsx";

const Contact = () => {
    return (
        <div className="main-container">
            <Navbar/>
            <TitlePage title={"Contact"}/>
            <Map/>
            <MyForm/>
        </div>
    );
};

export default Contact;