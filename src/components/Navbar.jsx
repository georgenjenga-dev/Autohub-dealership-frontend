import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("access");

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        🚗 AutoHub
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

        {!token ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="logout-btn"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;