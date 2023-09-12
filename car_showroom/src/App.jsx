import Navbar from "./component/navbar";
import Carlist from "./component/Carlist";
import car from "./component/car.json";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar name="BATA" />
      <Carlist cararr={car} />
    </div>
  );
}

export default App;
