import React from 'react';
import './styles/_app.scss'
import Aside from "../widgets/aside/Aside.tsx";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "../widgets/appRouter/AppRouter.tsx";
const App = () => {
    return (
        <div className={'App'}>
            <BrowserRouter>
                <Aside/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
};

export default App;