import { useEffect, useState } from "react";
import axios from "axios";

function MyPayments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access");

    axios
      .get("http://127.0.0.1:8000/api/payments/my_payments/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setPayments(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">

      <h1 className="page-title">My Payments</h1>

      {payments.length === 0 ? (

        <div className="empty-box">
          <h2>No Payments Found</h2>
          <p>You haven't made any payments yet.</p>
        </div>

      ) : (

        <div className="payment-grid">

          {payments.map((payment) => (

            <div
              className="payment-card"
              key={payment.id}
            >

              <h2>💳 {payment.reservation_vehicle}</h2>

              <h3 className="payment-price">
                KSh {Number(payment.amount).toLocaleString()}
              </h3>

              <p>
                <strong>Payment Method:</strong>
                <br />
                {payment.payment_method}
              </p>

              <p>
                <strong>Status:</strong>

                <span
                  className={`status-badge ${payment.status.toLowerCase()}`}
                >
                  {payment.status}
                </span>
              </p>

              <p>
                <strong>Reference:</strong>
                <br />
                {payment.transaction_reference}
              </p>

              <p>
                <strong>Date:</strong>
                <br />
                {new Date(payment.payment_date).toLocaleString()}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default MyPayments;