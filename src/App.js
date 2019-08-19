import React, { Component } from "react";
import "./App.css";
import Nav from "./navigation/Navigation.js";
import Content from "./Content.js";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBISIYAYUssZJuljLkAH9_LxAs1TQJTmhk",
  authDomain: "fir-testing-5f3bf.firebaseapp.com",
  databaseURL: "https://fir-testing-5f3bf.firebaseio.com",
  projectId: "fir-testing-5f3bf",
  storageBucket: "fir-testing-5f3bf.appspot.com",
  messagingSenderId: "176155565856"
};

firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Content />
      </div>
    );
  }
}

export default App;
