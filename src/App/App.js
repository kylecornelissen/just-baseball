import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GamesContainer from '../GamesContainer/GamesContainer';
import Header from '../Header/Header';

function App() {
  return (
    <Router>
      <main>
        <Route path="/" component={Header} />
        <Route exact path="/games" component={GamesContainer} />
      </main>
    </Router>
  );
}

export default App;
