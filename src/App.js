
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import News from './Components/News';


export default class App extends Component {
  render() {
    return (
      <div>
       <NavBar/>
        <News pageSize={6} country="in" category="entertainment"/>

      </div>
    )
  }
}


