import { useState, useEffect } from "react";
import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";
import api from "../services/api";

function Cars() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [debug, setDebug] = useState(null);

  useEffect(() => {
    api
      .get("vehicles/")
      .then((response) => {
        setDebug(response.data);
        const raw = response.data;
        const vehicles = Array.isArray(raw.results)
          ? raw.results
          : Array.isArray(raw)
          ? raw
          : [];

        setCars(Array.isArray(vehicles) ? vehicles : []);
      })
      .catch((error) => {
        console.error("Cars fetch error:", error.response?.data || error.message || error);
        setDebug({ error: error.response?.data || error.message });
        setCars([]);
      });
  }, []);
  const filteredCars = Array.isArray(cars)
    ? cars.filter(
        (car) =>
          car.model?.toLowerCase().includes(search.toLowerCase()) ||
          car.brand?.name?.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  console.log("Cars state:", cars);
  console.log("Cars length:", Array.isArray(cars) ? cars.length : 0);

  return (
    <div className="container">
      <h1>Available Cars</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="cars-grid">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))
        ) : (
          <>
            <h2>No vehicles found.</h2>
            {debug && (
              <pre style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>
                {JSON.stringify(debug, null, 2)}
              </pre>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Cars;