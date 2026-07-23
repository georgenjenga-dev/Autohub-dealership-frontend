import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access");

    axios
      .get("http://127.0.0.1:8000/api/dashboard/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setStats(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (!stats) {
    return <h2>Loading Dashboard...</h2>;
  }

  return (
    <div className="container">

      <h1>🚗 Customer Dashboard</h1>

      <p>
        Welcome to AutoHub. Manage your reservations and communicate with our
        sales team from one place.
      </p>

      <div className="dashboard-grid">

        <div className="card">
          <h2>{stats.vehicles}</h2>
          <p>Total Vehicles</p>
        </div>

        <div className="card">
          <h2>{stats.available_vehicles}</h2>
          <p>Available Vehicles</p>
        </div>

        <div className="card">
          <h2>{stats.reservations}</h2>
          <p>Total Reservations</p>
        </div>

        <div className="card">
          <h2>{stats.customers}</h2>
          <p>Customers</p>
        </div>

        <div className="card">
          <h2>{stats.brands}</h2>
          <p>Vehicle Brands</p>
        </div>

      </div>

      <h2 style={{ marginTop: "50px" }}>
        Quick Actions
      </h2>

      <div className="dashboard-grid">

        <div className="card">
          <h3>🚘 Browse Cars</h3>

          <p>
            Explore all available vehicles.
          </p>

          <Link to="/cars">
            <button>Browse</button>
          </Link>
        </div>

        <div className="card">
          <h3>📅 My Reservations</h3>

          <p>
            View all your reservations.
          </p>

          <Link to="/my-reservations">
            <button>Open</button>
          </Link>
        </div>

        <div className="card">
          <h3>💬 My Inquiries</h3>

          <p>
            Track your inquiries.
          </p>

          <Link to="/my-inquiries">
            <button>Open</button>
          </Link>
        </div>

        <div className="card">
          <h3>📱 Contact Dealer</h3>

          <p>
            Chat instantly with our sales team.
          </p>

          <a
            href="https://wa.me/254712345678"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>WhatsApp</button>
          </a>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;