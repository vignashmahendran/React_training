// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <Router>
      <DataProvider>
        <Switch>
          <Route path="/" exact component={FormPage} />
          <Route path="/table" component={TablePage} />
        </Switch>
      </DataProvider>
    </Router>
  );
}

export default App;
