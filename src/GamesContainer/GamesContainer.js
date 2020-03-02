import React, {Component} from 'react';
import { connect } from 'react-redux';

import './GamesContainer.scss';
import GameCard from '../GameCard/GameCard';
import {getGames} from '../apiCalls';
import {setGames} from '../actions/actions';


class GamesContainer extends Component {
  async componentDidMount() {
    const date = '07/01/2018';
    let games = await getGames(date);
    games = this.filterGames(games);
    this.props.setGames(games);
  }
  filterGames = (games) => {
    return games.map(game => {
      return {
        id: game.gamePk,
        awayTeam: game.teams.away.team,
        homeTeam: game.teams.home.team
      }
    })
  }
  render() {
    const { games } = this.props;
    const gameCards = games.map(game => {
      return <GameCard key={game.gamePk} game={game} />
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
