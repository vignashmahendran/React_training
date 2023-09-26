// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" exact element={<FormPage/>} />
          <Route path="/table" element={<TablePage/>} />
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
