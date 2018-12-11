import React, { Component } from 'react';
import './App.css';
import Home from './home/Home'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <div>
          <Home />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;