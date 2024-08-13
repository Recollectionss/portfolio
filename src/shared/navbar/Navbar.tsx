import './_navbar.scss'
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <navbar className="navbar">
            <div className='navbar__links'>
                <Link to={'/about'}>About</Link>
                <Link to={'/resume'}>Resume</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
        </navbar>
    );
};

export default Navbar;