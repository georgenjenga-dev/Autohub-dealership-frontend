import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const navigate = useNavigate();



 useEffect(() => {
  axios
    .get(`http://127.0.0.1:8000/api/vehicles/${id}/`)
    .then((response) => setCar(response.data))
    .catch((error) => console.log(error));
}, [id]);

  if (!car) {
    return (
      <div className="container">
        <h2>Loading vehicle...</h2>
      </div>
    );
  }
  const reserveVehicle = async () => {
  const token = localStorage.getItem("access");

  if (!token) {
    alert("Please login first.");
    navigate("/login");
    return;
  }

  try {
    await axios.post(
      "http://127.0.0.1:8000/api/reservations/",
      {
        vehicle: car.id,
        notes: "",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Vehicle reserved successfully!");

    navigate("/my-reservations");

  } catch (error) {
    console.log(error);

    alert("Reservation failed.");
  }
};

  return (
    <div className="container">

      <div className="details-container">

        <div className="details-image">

          <img
  src={car.main_image}
  alt={car.model}
/>
        </div>

        <div className="details-info">

          <h1>
            {car.brand.name} {car.model}
          </h1>

          <h2 className="details-price">
            KSh {Number(car.price).toLocaleString()}
          </h2>

          <span
            className={
              car.is_available
                ? "status available"
                : "status sold"
            }
          >
            {car.is_available ? "Available" : "Sold"}
          </span>

          <div className="spec-grid">

            <div>
              <strong>Year</strong>
              <p>{car.year}</p>
            </div>

            <div>
              <strong>Fuel</strong>
              <p>{car.fuel_type}</p>
            </div>

            <div>
              <strong>Transmission</strong>
              <p>{car.transmission}</p>
            </div>

            <div>
              <strong>Mileage</strong>
              <p>{Number(car.mileage).toLocaleString()} km</p>
            </div>

          </div>

          <h3>Description</h3>

          <p className="description">
            {car.description}
          </p>

          <div className="details-buttons">

           <button
  className="reserve-btn"
  onClick={reserveVehicle}
>
  📅 Reserve Vehicle
</button>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
            >
              <button className="whatsapp-btn">
                💬 WhatsApp Dealer
              </button>
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CarDetails;