import React from "react";
import Navbar from "./Components/Navbar";
import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
};

export default App;
