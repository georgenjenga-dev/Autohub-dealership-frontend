import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">

      <section className="about-hero">
        <h1>About AutoHub</h1>
        <p>
          Kenya's trusted online dealership connecting customers with
          high-quality vehicles at competitive prices.
        </p>
      </section>

      <section className="about-section">
        <div className="about-card">
          <h2>🚗 Our Mission</h2>
          <p>
            AutoHub aims to make buying a vehicle simple, transparent and
            convenient. We provide a platform where customers can browse,
            compare, reserve and contact dealers directly.
          </p>
        </div>

        <div className="about-card">
          <h2>🌍 Our Vision</h2>
          <p>
            To become the leading digital automobile marketplace in Kenya by
            providing trusted vehicle listings and exceptional customer
            experience.
          </p>
        </div>

        <div className="about-card">
          <h2>⭐ Why Choose AutoHub?</h2>

          <ul>
            <li>✔ Carefully verified vehicle listings</li>
            <li>✔ Affordable and transparent pricing</li>
            <li>✔ Easy online reservations</li>
            <li>✔ Direct WhatsApp communication with dealers</li>
            <li>✔ Secure customer dashboard</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>📈 Our Services</h2>

          <ul>
            <li>New & Used Vehicle Sales</li>
            <li>Vehicle Reservations</li>
            <li>Customer Inquiries</li>
            <li>Dealer Communication</li>
            <li>Vehicle Management</li>
          </ul>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Find Your Dream Car?</h2>

        <p>
          Browse our collection of premium vehicles and reserve your next car
          today.
        </p>

        <Link to="/cars">
          <button className="details-btn">
            Browse Vehicles
          </button>
        </Link>
      </section>

    </div>
  );
}

export default About;