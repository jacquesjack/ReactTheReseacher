import { Link } from 'react-router-dom';
import logo from './logoboldthe.png';
import './Navbar.css'
const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
            <div className="conatiner">
                <div className="row justify-content-evenly">
                    <div className="col-1"></div>
                    <div className="col-3">
                        <Link to="/"><img src={logo} alt="Logo" id="logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div className="collapse navbar-collapse col-8" id="navmenu">
                        <ul className="navbar-nav ms-auto column-gap-4">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Mission">Mission</Link>    
                            </li>
                            <li className="nav-item">
                                <Link to="/Joinus">Joinus</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/report">Report</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/research">Research</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </nav>
     );
}
 
export default Navbar;