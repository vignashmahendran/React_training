import Dash from "./Dash";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  element={<PrivateRoute   />}>
            <Route  path="/" element={<Dash  />} />
          </Route>
          <Route path="/signin" element={<Login  />} />
          <Route path="/signup" element={<Register />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
  }

export default App;

// page == "true" ? <Login setpage={setpage} /> : <Register setpage={setpage} />;
