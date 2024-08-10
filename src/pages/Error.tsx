import React from 'react';
import Navbar from "../shared/navbar/Navbar.tsx";
import '../app/styles/_pages-basic.scss'
import Icon from "../shared/icon/Icon.tsx";
import {faBug} from "@fortawesome/free-solid-svg-icons/faBug";
const Error = () => {
    return (
        <div className={"main-container"}>
        {/* TODO: write info about not found page for this path   */}
            <Navbar/>
            <div className={"main-container__div-error"}>
                <Icon icon={faBug} size={'2xl'}/>
                <h1>Sorry page into this path now exist...</h1>
            </div>
        </div>
    );
};

export default Error;