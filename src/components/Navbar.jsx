import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isStaff, setIsStaff] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("access");

  useEffect(() => {

  const token = localStorage.getItem("access");

  if (!token) return;

  axios
    .get(
      "http://127.0.0.1:8000/api/me/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      setIsStaff(response.data.is_staff);
    })
    .catch((error)=>{
      console.log(error.response?.data);
    });

}, []);

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🚗 AutoHub</Link>
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/cars">Cars</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {token ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            {isStaff && (
              <li>
                <Link to="/admin-dashboard">Admin</Link>
              </li>
            )}

            <li>
              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">
                <button className="register-btn">
                  Register
                </button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;