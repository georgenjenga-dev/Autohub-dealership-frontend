import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="car-card">
      <img
   src={car.main_image}
   alt={car.model}
   style={{width: "300px"}}
   />




      <div className="car-info">
        <h2>{car.brand.name} {car.model}</h2>

        <p><strong>Year:</strong> {car.year}</p>

        <p><strong>Fuel:</strong> {car.fuel_type}</p>

        <p><strong>Transmission:</strong> {car.transmission}</p>

        <p><strong>Price:</strong> Ksh {car.price}</p>

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