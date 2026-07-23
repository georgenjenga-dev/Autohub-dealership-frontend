import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,.2)",
      }}
    >
      <img
        src={car.main_image}
        alt={car.model}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <h2>{car.brand.name} {car.model}</h2>

      <p>KSh {car.price}</p>

      <Link to={`/cars/${car.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default CarCard;