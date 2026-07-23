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
      <h1>My Payments</h1>

      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        payments.map((payment) => (
          <div
            key={payment.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h2>{payment.reservation_vehicle}</h2>

            <p>
              <strong>Amount:</strong> Ksh {payment.amount}
            </p>

            <p>
              <strong>Method:</strong> {payment.payment_method}
            </p>

            <p>
              <strong>Status:</strong> {payment.status}
            </p>

            <p>
              <strong>Reference:</strong> {payment.transaction_reference}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyPayments;