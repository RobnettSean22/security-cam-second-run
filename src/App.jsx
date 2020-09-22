import React from "react";
import ShowArea from "./components/ShowArea";
import Authorization from "./components/Authorization";
import Alternativelog from "./components/AlternativeLog";
import Login from "./components/Login";
import EmailSMS from "./components/EmailSMS";
import { Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Authorization} />
        <Route exact path='/send-code/' component={EmailSMS} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/secondarylogin/' component={Alternativelog} />
        <Route exact path='/security-cameras/' component={ShowArea} />
      </Switch>
    </>
  );
}
