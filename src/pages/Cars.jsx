import { useState, useEffect } from "react";
import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";
import api from "../services/api";

function Cars() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("vehicles/")
      .then((response) => {
        console.log(response.data);
        console.log(response.data.results);
        setCars(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCars = cars.filter((car) => {
    const query = search.toLowerCase();

    return (
      car.model.toLowerCase().includes(query) ||
      car.brand.name.toLowerCase().includes(query)
    );
  });

  return (
    <div className="container">
      <h1>Available Cars</h1>

      <SearchBar search={search} setSearch={setSearch} />

      {filteredCars.length === 0 ? (
        <h3 style={{ marginTop: "30px", textAlign: "center" }}>
          No vehicles found.
        </h3>
      ) : (
        <div className="cars-grid">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cars;