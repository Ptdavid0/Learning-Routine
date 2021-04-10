import React, { useState, useMemo } from "react";
import { UserContext } from "./UserContext";
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import List from "../pages/List";
import Login from "../pages/Login";

const AppRouter = () =>{
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <Switch>
          <PublicRoute restricted={true} component={Login} path="/" exact />
          <PrivateRoute component={List} path="/list" exact />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}


export default AppRouter;