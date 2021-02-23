import React from "react";

import "./App.css";
import CardDesign from "./CardDesign";
import Filter from "./Filter";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,

  BrowserRouter
} from "react-router-dom"
import CartDesign from "./CartDesign";

function App() {
  return (
    
    <div className="app">
      <div className="appContainer">
      <BrowserRouter>

      
      <Switch>
      <Route
      exact
      path="/">
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

      </Route>
      <Route 
      
      path="/cart">
        <CartDesign/>
      </Route>
      
    </Switch>
    </BrowserRouter>
        

        
      </div>
    </div>
  );
}

export default App;
