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
        "https://autohub-delership-backend.vercel.app//api/payments/",
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

    <h1 className="page-title">My Reservations</h1>

    {reservations.length === 0 ? (

      <div className="empty-box">
        <h2>No Reservations Yet</h2>
        <p>You haven't reserved any vehicles.</p>
      </div>

    ) : (

      <div className="reservation-grid">

        {reservations.map((reservation) => (

          <div
            className="reservation-card"
            key={reservation.id}
          >

            <h2>
              🚗 {reservation.brand} {reservation.vehicle_name}
            </h2>

            <p>
              <strong>Status:</strong>
              <span className={`status-badge ${reservation.status.toLowerCase()}`}>
                {reservation.status}
              </span>
            </p>

            <p>
              <strong>Reserved:</strong>
              <br />
              {new Date(reservation.reservation_date).toLocaleString()}
            </p>

            <p>
              <strong>Notes:</strong>
              <br />
              {reservation.notes || "No notes"}
            </p>

           
            <a
              href={`https://wa.me/254716323929?text=Hello AutoHub, I reserved the ${reservation.brand} ${reservation.vehicle_name} and would like more information.`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="whatsapp-btn">
                💬 Contact Dealer
              </button>
            </a>

          </div>

        ))}

      </div>

    )}

  </div>
);
  
}

export default MyReservations;