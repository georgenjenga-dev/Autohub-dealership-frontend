import { useEffect, useState } from "react";
import axios from "axios";

function MyInquiries() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access");

    axios
      .get("http://127.0.0.1:8000/api/inquiries/my_inquiries/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setInquiries(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>My Inquiries</h1>

      {inquiries.length === 0 ? (
        <p>No inquiries found.</p>
      ) : (
        inquiries.map((inquiry) => (
          <div className="card" key={inquiry.id}>
            <p>{inquiry.message}</p>
            <p>
              <strong>Responded:</strong>{" "}
              {inquiry.is_responded ? "Yes" : "No"}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyInquiries;