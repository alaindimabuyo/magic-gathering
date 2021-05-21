import React from 'react';
import './App.css';
import {MagicGatheringProvider} from './context/MagicGatheringContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <MagicGatheringProvider>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </MagicGatheringProvider>
      </div>
    </Router>
  );
}

export default App;
