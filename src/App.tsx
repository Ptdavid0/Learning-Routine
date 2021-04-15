import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import List from "./pages/List";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/list" component={List} />
    </Switch>
  );
};

export default App;
