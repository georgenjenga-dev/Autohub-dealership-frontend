import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access");

    axios
      .get("https://autohub-delership-backend.vercel.app//api/dashboard/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setStats(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (!stats) {
    return <h2 className="container">Loading Admin Dashboard...</h2>;
  }

  return (
    <div className="container">

      <div className="dashboard-header">
        <h1>🛠 AutoHub Admin Dashboard</h1>
        <p>Staff Management Portal</p>
      </div>

      <div className="dashboard-grid">

        <div className="card">
          <h1>🚗</h1>
          <h2>{stats.vehicles}</h2>
          <p>Total Vehicles</p>
        </div>

        <div className="card">
          <h1>🏷</h1>
          <h2>{stats.brands}</h2>
          <p>Brands</p>
        </div>

        <div className="card">
          <h1>📅</h1>
          <h2>{stats.reservations}</h2>
          <p>Reservations</p>
        </div>

        <div className="card">
          <h1>💳</h1>
          <h2>{stats.payments}</h2>
          <p>Payments</p>
        </div>

        <div className="card">
          <h1>👥</h1>
          <h2>{stats.customers}</h2>
          <p>Customers</p>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;