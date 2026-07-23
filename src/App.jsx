import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MyReservations from "./pages/MyReservations";
import MyPayments from "./pages/MyPayments";
import MyInquiries from "./pages/MyInquiries";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-reservations" element={<MyReservations />} />
       <Route path="/my-payments" element={<MyPayments />} />
       <Route path="/my-inquiries" element={<MyInquiries />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;