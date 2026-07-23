import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar">

            <Link className="logo" to="/">
                 AutoHub
            </Link>

            <ul>

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/cars">Cars</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                <li>
                    <Link to="/login">Login</Link>
                </li>

                <li>
                    <Link to="/register">Register</Link>
                </li>

            </ul>

        </nav>

    )

}

export default Navbar;