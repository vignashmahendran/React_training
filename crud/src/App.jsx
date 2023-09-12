import Dash from "./Dash";
import TableList from "./TableList";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dash />} />
          </Route>
          <Route path="/alluser" element={<TableList />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
