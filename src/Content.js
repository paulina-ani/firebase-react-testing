import React from "react";
import { Switch, Route } from "react-router-dom";
import Counter from "./counter/Counter";
import CounterLive from "./counter-live/Counter";
import Sign from "./auth/Sign";
import Chat from "./chat/Chat";

const Content = () => (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/chat" component={chat} />
    <Route exact path="/counter" component={Counter} />
    <Route exact path="/counter-live" component={CounterLive} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/sign-in" component={Sign} />
    <Route exact path="/sign-up" component={() => <Sign isSignUp />} />
  </Switch>
);

export default Content;
