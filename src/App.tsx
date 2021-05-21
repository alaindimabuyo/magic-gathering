import React from 'react';
import './App.css';
import {MagicGatheringProvider} from './context/MagicGatheringContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import CurrentCard from "./components/cards/CurrentCard"
import 'mana-font'
import {useMagicGatheringState} from "./context/MagicGatheringContext";

function App() {
  const { isDark} = useMagicGatheringState()
  return (
    <Router>
        <div className={`${isDark ? 'bg-dark' : 'bg-light'}`}>
          <Navbar />
          <Switch>
              <Route exact path='/' component={CurrentCard} />
              <Route exact path='/cards' component={Home} />
              <Route exact path='/cards/:id' component={CurrentCard} />
            </Switch>
        
        </div>
    
    </Router>
  );
}

export default App;
