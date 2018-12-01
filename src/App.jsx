import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";

const FourOhFour = () => <h1>404</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={Search} />
          <Route component={FourOhFour} />
        </Switch>
      </div>

    </BrowserRouter>
  );
};

render(<App />, document.getElementById("app"));

//router utilizing switch to create 404 fallback page, must be at the end
