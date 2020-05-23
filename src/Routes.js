import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./Core/Home";
import Login from "./Core/Login";
import Register from "./Core/Register";
import RegPatient from "./Core/RegPatient";
import RegDoctor from "./Core/RegDoctor";
import RegPharmacy from "./Core/RegPharmacy";
import DocHome from "./Doctor/DocHome";
import PatHome from "./Patient/PatHome";
import PharHome from "./Pharmacy/PharHome";
import PrivateRoute from "./privateRoute/PrivateRoute";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/main" component={Home} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/signup/patient" component={RegPatient} />
        <Route exact path="/signup/doctor" component={RegDoctor} />
        <Route exact path="/signup/pharmacy" component={RegPharmacy} />
        <PrivateRoute
          exact
          path="/user/patient/dashboard"
          component={PatHome}
        />
        <PrivateRoute exact path="/user/doctor/dashboard" component={DocHome} />
        <PrivateRoute
          exact
          path="/user/pharmacy/dashboard"
          component={PharHome}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
