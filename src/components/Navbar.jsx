import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( <>
   <div className="navbar">
    <div className="navbar-container">
        <div className="logo"></div>
        <div className="navlinks">
            <ul>
                <li>O Nama</li>
                <li>Način Korišćenja</li>
                <li>Dečije lige</li>
                <li>Turniri</li>
            </ul>
        </div>
        <button>Pretraga</button>
    </div>
   </div>
    </> );
}
 
export default Navbar;