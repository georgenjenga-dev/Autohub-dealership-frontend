import { useState, useEffect } from "react";
import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";
import api from "../services/api";

function Cars() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("vehicles/")
      .then((response) => {
        setCars(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCars = cars.filter((car) =>
    car.model.toLowerCase().includes(search.toLowerCase()) ||
    car.brand.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Available Cars</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="cars-grid">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Cars;