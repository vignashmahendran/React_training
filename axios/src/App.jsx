import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <>
            <h3>AXIOS,ACCESS TOKEN & PROTECTED ROUTE</h3>
            <Outlet />
          </>
        }
      >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<img src="404.svg" />} />
      </Route>
    </Routes>
  );
}

export default App;
