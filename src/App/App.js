import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import GamesContainer from '../GamesContainer/GamesContainer';
import GameDetails from '../GameDetails/GameDetails';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route path="/:header" component={Header} />
        </Switch>
        <Route exact path="/games" component={GamesContainer} />
        <Route exact path="/game/:id" component={GameDetails} />
      </main>
    </Router>
  );
}

export default App;
