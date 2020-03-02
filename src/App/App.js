import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import GamesContainer from '../GamesContainer/GamesContainer';
import GameDetails from '../GameDetails/GameDetails';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route path="/:header" component={Header} />
        </Switch>
        <Switch>
          <Route exact path="/games" component={GamesContainer} />
          <Route exact path="/game/:id" component={GameDetails} />
          <Route path="/:undefined_path" component={PageNotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
