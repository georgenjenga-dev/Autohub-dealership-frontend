import { useEffect, useState } from "react";
import axios from "axios";

function MyReservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access");

    axios
      .get("http://127.0.0.1:8000/api/reservations/my_reservations/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setReservations(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handlePayment = async (reservation) => {
    const token = localStorage.getItem("access");

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/payments/",
        {
          reservation: reservation.id,
          amount: 5000,
          payment_method: "Cash",
          bank_name: "",
          account_number: "",
          transaction_reference: "TXN" + Date.now(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Payment submitted successfully!");
    } catch (error) {
      console.log(error.response?.data);
      alert(JSON.stringify(error.response?.data));
    }
  };

  return (
    <div className="container">
      <h1>My Reservations</h1>

      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        reservations.map((reservation) => (
          <div
            key={reservation.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h2>
              {reservation.brand} {reservation.vehicle_name}
            </h2>

            <p>
              <strong>Status:</strong> {reservation.status}
            </p>

            <p>
              <strong>Date:</strong> {reservation.reservation_date}
            </p>

            <p>
              <strong>Notes:</strong> {reservation.notes}
            </p>

           <a
  href={`https://wa.me/254716323929?text=Hello%20AutoHub,%20I%20have%20reserved%20the%20${reservation.brand}%20${reservation.vehicle_name}%20and%20would%20like%20to%20schedule%20a%20viewing.`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    style={{
      marginTop: "15px",
      padding: "12px 20px",
      background: "#25D366",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    Contact Dealer on WhatsApp
  </button>
</a>
          </div>
        ))
      )}
    </div>
  );
}

export default MyReservations;