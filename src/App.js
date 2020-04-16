import React, { Component } from 'react';
import './App.css';
import Nav from "./Nav";
import Left from "./Left";
import Right from "./Right";

class App extends Component {
  render () {
    return (
      <div className="wholeContainer">
        <Nav className="navi"/>
        <div className="mainContainer">
          <Left />
          <Right />
        </div>
      </div>
    );
  }
}

export default App;
