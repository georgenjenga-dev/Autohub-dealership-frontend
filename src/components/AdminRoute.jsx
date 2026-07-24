import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../services/api";

function AdminRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isStaff, setIsStaff] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get("me/")
      .then((response) => {
        setIsStaff(response.data.is_staff);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2>Checking permissions...</h2>;
  }

  if (!isStaff) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;