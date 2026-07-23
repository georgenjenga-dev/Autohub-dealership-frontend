import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("https://autohub-delership-backend.vercel.app//api/vehicles/")
      .then((response) => {
        const vehicles = response.data.results || response.data;
        setCars(vehicles.slice(0, 3));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* Hero Section */}

      <section className="hero">

        <h1>Find Your Dream Car Today</h1>

        <p>
          Browse premium vehicles from trusted dealerships across Kenya.
        </p>

        <div className="hero-buttons">

          <Link to="/cars">
            <button className="btn">
              Browse Cars
            </button>
          </Link>

          <Link to="/contact">
            <button className="secondary-btn">
              Contact Dealer
            </button>
          </Link>

        </div>

      </section>

      {/* Featured Cars */}

      <section className="featured">

        <h2>Featured Vehicles</h2>

        <div className="featured-grid">

          {cars.map((car) => (

            <div className="featured-card" key={car.id}>
<img
  src={car.main_image}
  alt={car.model}
/>

              <h3>
                {car.brand.name} {car.model}
              </h3>

              <p>Ksh {car.price}</p>

              <Link to={`/cars/${car.id}`}>
                <button className="details-btn">
                  View Details
                </button>
              </Link>

            </div>

          ))}

        </div>

      </section>
      <section className="stats-section">

  <div className="stat-card">
    <h2>500+</h2>
    <p>Happy Customers</p>
  </div>

  <div className="stat-card">
    <h2>100+</h2>
    <p>Vehicles Available</p>
  </div>

  <div className="stat-card">
    <h2>15+</h2>
    <p>Trusted Brands</p>
  </div>

  <div className="stat-card">
    <h2>24/7</h2>
    <p>Customer Support</p>
  </div>

</section>

      {/* Why Choose Us */}

      <section className="why-us">

        <h2>Why Choose AutoHub?</h2>

        <div className="features">

          <div className="feature-box">
            <h3>🚗 Premium Vehicles</h3>

            <p>
              Carefully inspected vehicles from trusted dealerships.
            </p>

          </div>

          <div className="feature-box">

            <h3>💰 Fair Pricing</h3>

            <p>
              Competitive pricing with transparent vehicle information.
            </p>

          </div>

          <div className="feature-box">

            <h3>📱 Direct Dealer Contact</h3>

            <p>
              Reserve online and chat directly with our sales team via WhatsApp.
            </p>

          </div>

        </div>

      </section>
      <section className="brands-section">

  <h2>Popular Brands</h2>

  <div className="brands-grid">

    <div className="brand-item">🚗 Toyota</div>

    <div className="brand-item">🏁 BMW</div>

    <div className="brand-item">⭐ Mercedes-Benz</div>

    <div className="brand-item">🚙 Nissan</div>

  </div>

</section>
    </>
  );
}

export default Home;