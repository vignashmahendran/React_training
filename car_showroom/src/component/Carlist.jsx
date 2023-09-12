import "./carlist.css";
import { useState } from "react";
const Carlist = ({ cararr }) => {
  const [hoverid, setHoverid] = useState("");

  return (
    <div className="carlist">
      {cararr.map((car) => (
        <div
          className="carcard"
          key={car.title}
          onMouseEnter={() => setHoverid(car.title)}
          onMouseLeave={() => setHoverid("")}
        >
          <img src={car.image} />
          {hoverid == car.title && (
            <div className="car-details">
              <h4> {car.title}</h4>
              <p>Fuel Type : {car.fuel_type}</p>
              <p>Capacity : {car.capacity}</p>
              <p>Cylinders : {car.cylinders}</p>
              <p>Transmission : {car.transmission}</p>
              <p>Fuel Tank Capacity : {car.fuel_tank_capacity}</p>
              <button>
                Buy for &#8377; {car.price_inr.toLocaleString("en-IN")}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carlist;
