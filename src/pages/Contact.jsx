import { useState } from "react";
import axios from "axios";

function Contact() {
  const [message, setMessage] = useState("");
  const [vehicle, setVehicle] = useState("");

  const sendInquiry = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access");

    if (!token) {
      alert("Please login first.");
      return;
    }

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/inquiries/",
        {
          vehicle,
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Inquiry sent successfully!");
      setMessage("");
      setVehicle("");
    } catch (error) {
      console.log(error.response?.data);
      alert("Failed to send inquiry.");
    }
  };

  return (
    <div className="container">

      <section className="contact-hero">
        <h1>Contact AutoHub</h1>
        <p>
          We'd love to help you find your dream vehicle.
        </p>
      </section>

      <div className="contact-grid">

        <div className="contact-info">

          <h2>Get in Touch</h2>

          <p>📍 Nairobi, Kenya</p>

          <p>📞 +254 716 323 929</p>

          <p>✉ support@autohub.co.ke</p>

          <p>🕘 Mon - Sat : 8:00 AM - 6:00 PM</p>

          <a
            href="https://wa.me/254716323929"
            target="_blank"
            rel="noreferrer"
          >
            <button className="whatsapp-btn">
              💬 Chat on WhatsApp
            </button>
          </a>

        </div>

        <div className="contact-form">

          <h2>Send an Inquiry</h2>

          <form onSubmit={sendInquiry}>

            <input
              type="number"
              placeholder="Vehicle ID"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              required
            />

            <textarea
              rows="6"
              placeholder="Write your inquiry..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit">
              Send Inquiry
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;