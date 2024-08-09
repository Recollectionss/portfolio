import React from 'react';
import './_resume.scss'
import Navbar from "../../shared/navbar/Navbar.tsx";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons/faBookOpen";
import SectionWithIcon, {SectionItem} from "../../entities/sectionWithIcon/SectionWithIcon.tsx";
const Resume = () => {
    const itemsEducation:SectionItem[] = [
        {title: "Tarasa Shevchenko National University of Kyiv", dates: "2022 - Present", info: "121 specialization - Software Engineer"},
    ];
    const itemsExperience:SectionItem[] = [
        {title: "Didn't have..."}
    ];

    return (
        <div className="main-container">
            <Navbar/>
            <h1 className="main-container__title">Resume</h1>
            <div className="main-container__divider"></div>

            <SectionWithIcon icon={faBookOpen} sectionTitle="Education" items={itemsEducation}/>
            <SectionWithIcon icon={faBookOpen} sectionTitle="Experience" items={itemsExperience}/>
            {/*TODO: need add section about My skills*/}
            <section className="main-container__mySkills">

            </section>
        </div>
    );
};

export default Resume;