import { Link } from "react-router-dom";

function Home() {
  const featuredCars = [
    {
      id: 1,
      name: "Toyota Corolla",
      price: "Ksh 2,500,000",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800",
    },
    {
      id: 2,
      name: "BMW X5",
      price: "Ksh 7,500,000",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
    },
    {
      id: 3,
      name: "Mercedes C-Class",
      price: "Ksh 5,300,000",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    },
  ];

  return (
    <>
      {/* Hero Section */}
    <section className="hero">

    <h1>Drive Your Dream Today</h1>

    <p>

        Explore quality vehicles from trusted brands.

    </p>

    <div className="hero-buttons">

        <Link to="/cars">

            <button className="btn">

                Browse Inventory

            </button>

        </Link>

        <Link to="/contact">

            <button className="secondary-btn">

                Contact Us

            </button>

        </Link>

    </div>

</section>

      {/* Featured Cars */}
      <section className="featured">
        <h2>Featured Cars</h2>

        <div className="featured-grid">
          {featuredCars.map((car) => (
            <div className="featured-card" key={car.id}>
              <img src={car.image} alt={car.name} />

              <h3>{car.name}</h3>

              <p>{car.price}</p>

              <Link to="/cars">
                <button className="btn">View Cars</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose AutoHub?</h2>

        <div className="features">
          <div className="feature-box">
            <h3>🚗 Quality Vehicles</h3>
            <p>Every vehicle is inspected before being listed.</p>
          </div>

          <div className="feature-box">
            <h3>💰 Affordable Prices</h3>
            <p>Competitive pricing with flexible payment options.</p>
          </div>

          <div className="feature-box">
            <h3>🤝 Trusted Service</h3>
            <p>Professional customer support before and after purchase.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;