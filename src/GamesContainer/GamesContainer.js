import React, {Component} from 'react';
import { connect } from 'react-redux';

import './GamesContainer.scss';
import GameCard from '../GameCard/GameCard';
import {getGames} from '../apiCalls';
import {setGames} from '../actions/actions';

class GamesContainer extends Component {
  async componentDidMount() {
    const date = this.formatDate(new Date());
    try {
      let games = await getGames(date);
      games = this.filterGames(games.dates[0].games);
      this.props.setGames(games);
    } catch ({message}) {
      console.log(message);
    }
  }
  formatDate = (date) => {
    console.log(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`);
    return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
  }
  filterGames = (games) => {
    console.log(games);
    return games.map(game => {
      return {
        id: game.gamePk,
        awayTeam: game.teams.away.team,
        awayScore: game.teams.away.score,
        homeTeam: game.teams.home.team,
        homeScore: game.teams.home.score
      }
    })
  }
  render() {
    const { games } = this.props;
    const gameCards = games.map(game => {
      return <GameCard key={game.gamePk} game={game} />
    });

    return (
      <section className="games-container">
        <h2>This Date's Games</h2>
        <div>{gameCards}</div>
      </section>
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
