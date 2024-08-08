import React from 'react';
import {Route, Routes} from "react-router";
import {pages} from "../../app/router";

const AppRouter = () => {
    return (
        <Routes>
            {pages.map(page => <Route key={page.path} path={page.path} element={page.element} />)}
        </Routes>
    );
};

export default AppRouter;