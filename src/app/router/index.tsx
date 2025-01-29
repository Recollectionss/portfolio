// import About from "../../pages/About.tsx";
import Resume from "../../pages/Resume.tsx";
import {Navigate} from "react-router";
import Portfolio from "../../pages/Portfolio.tsx";

export const pages = [
    {path: '/', element: <Resume/>},
    // {path:'/about', element: <About/>},
    {path:'/resume', element: <Resume/>},
    // {path:'/contact', element: <Contact/>},
    {path: '/portfolio',element: <Portfolio/>},
    {path:'/*', element: <Navigate to={'/resume'}/>},
]