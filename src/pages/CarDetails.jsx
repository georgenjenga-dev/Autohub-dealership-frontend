import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/vehicles/${id}/`)
      .then((response) => setCar(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleReserve = async () => {
  const token = localStorage.getItem("access");

  try {
    await axios.post(
      "http://127.0.0.1:8000/api/reservations/",
      {
        vehicle: car.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert("Reservation successful!");

navigate("/my-reservations");
  } catch (error) {
    console.log(error.response?.data);
    alert(JSON.stringify(error.response?.data));
  }
};

  if (!car) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">

      <img
        src={car.main_image}
        alt={car.model}
        style={{
          width: "500px",
          borderRadius: "10px",
        }}
      />

      <h1>{car.brand.name} {car.model}</h1>

      <p><strong>Year:</strong> {car.year}</p>

      <p><strong>Fuel:</strong> {car.fuel_type}</p>

      <p><strong>Transmission:</strong> {car.transmission}</p>

      <p><strong>Mileage:</strong> {car.mileage} km</p>

      <p><strong>Color:</strong> {car.color}</p>

      <p><strong>Price:</strong> Ksh {car.price}</p>

      <p>{car.description}</p>

      <button
        onClick={handleReserve}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          cursor: "pointer",
        }}
      >
        Reserve Vehicle
      </button>

    </div>
  );
}

export default CarDetails;