import React, {Component} from 'react';
import { connect } from 'react-redux';

import './GamesContainer.scss';
import {getGames} from '../apiCalls';
import {setGames} from '../actions/actions';


class GamesContainer extends Component {
  async componentDidMount() {
    const date = '07/01/2018';
    const games = await getGames(date);
    this.props.setGames(games);
  }
  render() {
    const { games } = this.props;
    const gameCards = games.map(game => {
      return <h3>{game.teams.away.team.name} at {game.teams.home.team.name}</h3>
    });

    return (
      <>
        <h2>Today's Games</h2>
        <section>{gameCards}</section>
      </>
    )
  }
}

export const mapStateToProps = state => ({
  games: state.games
});

export const mapDispatchToProps = dispatch => ({
  setGames: games => { dispatch(setGames(games)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
