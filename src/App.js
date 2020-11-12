import React from "react";
import Home from "./Screens/Home";
import Category from "./Screens/Category";
import Single from "./Screens/Single";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/">
        <Home />
      </Route>
	  <Route path="/category">
        <Category />
      </Route>
	  <Route path="/single">
        <Single />
      </Route>
    </BrowserRouter>
  );
};

export default App;
