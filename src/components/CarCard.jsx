import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="car-card">

      <div className="car-image-container">

       <img
  src={car.main_image}
  alt={car.model}
/>

        <span
          className={
            car.is_available
              ? "status available"
              : "status sold"
          }
        >
          {car.is_available ? "Available" : "Sold"}
        </span>

      </div>

      <div className="car-info">

        <h2>
          {car.brand.name} {car.model}
        </h2>

        <h3 className="price">
          KSh {Number(car.price).toLocaleString()}
        </h3>

        <div className="car-specs">

          <span>📅 {car.year}</span>

          <span>⛽ {car.fuel_type}</span>

          <span>⚙ {car.transmission}</span>

        </div>

        <p>
          <strong>Mileage:</strong> {Number(car.mileage).toLocaleString()} km
        </p>

        <Link to={`/cars/${car.id}`}>
          <button className="details-btn">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
}

export default CarCard;