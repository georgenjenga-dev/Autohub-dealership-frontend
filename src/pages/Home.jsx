import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    api
      .get("vehicles/")
      .then((response) => {
        const raw = response.data;
        const vehicles = Array.isArray(raw.results)
          ? raw.results
          : Array.isArray(raw)
          ? raw
          : [];

        setCars(Array.isArray(vehicles) ? vehicles.slice(0, 3) : []);
      })
      .catch((error) => {
        console.log(error);
        setCars([]);
      });
  }, []);

  return (
    <>
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

      <section className="featured">
        <h2>Featured Vehicles</h2>

        <div className="featured-grid">
          {Array.isArray(cars) && cars.length > 0 ? (
            cars.map((car) => (
              <div className="featured-card" key={car.id}>
                <img
                  src={car.main_image}
                  alt={car.model}
                />

                <h3>
                  {car.brand?.name} {car.model}
                </h3>

                <p>
                  KSh {Number(car.price).toLocaleString()}
                </p>

                <Link to={`/cars/${car.id}`}>
                  <button className="details-btn">
                    View Details
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p>No featured vehicles available.</p>
          )}
        </div>
      </section>

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
    </>
  );
}

export default Home;