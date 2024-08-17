import './styles/_app.scss'
import Aside from "../widgets/aside/Aside.tsx";
import {HashRouter} from "react-router-dom";
import AppRouter from "../widgets/appRouter/AppRouter.tsx";
const App = () => {
    return (
        <div className={'App'}>
            <HashRouter>
                <Aside/>
                <AppRouter/>
            </HashRouter>
        </div>
    );
};

export default App;