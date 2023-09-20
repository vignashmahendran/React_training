import Dash from "./Dash";
import TableList from "./TableList";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CardDetail from "./CardDetail";

function App() {

  return (
    <div className="App">
      <h3>CRUD</h3>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dash />} />
          </Route>
          <Route path="/alluser/*" element={<TableList />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/card" element={<CardDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
