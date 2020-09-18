import React from "react";
import ShowArea from "./components/ShowArea";
import Authorization from "./components/Authorization";
import Alternativelog from "./components/AlternativeLog";
import { Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Authorization} />
        <Route exact path='/' component={Alternativelog} />
        <Route exact path='/' component={ShowArea} />
      </Switch>
    </>
  );
}
