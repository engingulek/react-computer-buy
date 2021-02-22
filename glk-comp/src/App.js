import React from "react";

import "./App.css";
import CardDesign from "./CardDesign";
import Filter from "./Filter";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <div className="appContainer">
        <div className="header">
          <Header />
        </div>
        <div className="body">
        <div className="filter">
          <Filter />
        </div>
        <div className="cardDesign">
          <CardDesign />
          <CardDesign />
          <CardDesign />
          <CardDesign />
          <CardDesign />
         
        </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;
