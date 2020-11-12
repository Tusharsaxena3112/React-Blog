import React from "react";
import Home from "./Screens/Home";
import Category from "./Screens/Category";
import Single from "./Screens/Single";
import Contact from "./Screens/Contact";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
	  <Route path="/category">
        <Category />
      </Route>
	  <Route path="/single">
        <Single />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </BrowserRouter>
  );
};

export default App;
