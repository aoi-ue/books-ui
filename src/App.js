import React, { Component } from "react";
import Books from "./Books"
import Author from "./Author"
import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <h1> Books and authors </h1>
        <Books />
        <Author />
      </div>
    );
  }
} 


export default App;
