import About from "../../pages/about/About.tsx";
import Error from "../../pages/Error.tsx";
import Resume from "../../pages/resume/Resume.tsx";
import Contact from "../../pages/contact/Contact.tsx";
import {Navigate} from "react-router";

export const pages = [
    {path: '/', element: <Navigate to={'/about'}/>},
    {path:'/about', element: <About/>},
    {path:'/resume', element: <Resume/>},
    {path:'/contact', element: <Contact/>},
    {path:'/*', element: <Error/>},
]