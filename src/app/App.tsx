import React from 'react';
import './styles/_app.scss'
import Aside from "../widgets/aside/Aside.tsx";
const App = () => {
    return (
        <main className={'App'}>
            <Aside/>
        </main>
    );
};

export default App;