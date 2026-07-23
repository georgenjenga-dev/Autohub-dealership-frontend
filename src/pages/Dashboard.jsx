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
    return (
      <div className="container">
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="container">

      <div className="dashboard-header">

        <h1>Welcome to AutoHub Dashboard 👋</h1>

        <p>
          Manage your reservations, browse vehicles and communicate with our
          dealership from one place.
        </p>

      </div>

      <div className="dashboard-grid">

        <div className="card">
          <h1>🚗</h1>
          <h2>{stats.vehicles}</h2>
          <p>Total Vehicles</p>
        </div>

        <div className="card">
          <h1>✅</h1>
          <h2>{stats.available_vehicles}</h2>
          <p>Available Vehicles</p>
        </div>

        <div className="card">
          <h1>📅</h1>
          <h2>{stats.reservations}</h2>
          <p>Reservations</p>
        </div>

        <div className="card">
          <h1>👤</h1>
          <h2>{stats.customers}</h2>
          <p>Customers</p>
        </div>

        <div className="card">
          <h1>🏷️</h1>
          <h2>{stats.brands}</h2>
          <p>Brands</p>
        </div>

      </div>

      <div className="quick-actions">

        <h2>Quick Actions</h2>

        <div className="dashboard-buttons">

          <Link to="/cars">
            <button>🚗 Browse Cars</button>
          </Link>

          <Link to="/my-reservations">
            <button>📅 My Reservations</button>
          </Link>

          <Link to="/my-inquiries">
            <button>💬 My Inquiries</button>
          </Link>

          <Link to="/contact">
            <button>☎ Contact Dealer</button>
          </Link>

        </div>

      </div>

      <div className="activity-box">

        <h2>Recent Activity</h2>

        <p>✔ Browse available vehicles.</p>

        <p>✔ Reserve a vehicle.</p>

        <p>✔ Contact the dealership through WhatsApp.</p>

        <p>✔ Track your reservations from your dashboard.</p>

      </div>

    </div>
  );
}

export default Dashboard;