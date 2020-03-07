import React, {Component} from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './GamesContainer.scss';
import GameCard from '../GameCard/GameCard';
import {getGames} from '../apiCalls';
import {setGames, setDate} from '../actions/actions';

class GamesContainer extends Component {
  async componentDidMount() {
    const { date } = this.props;
    const newDate = await date || this.formatDate(new Date());
    await this.loadGames(newDate);
  }
  loadGames = async (date) => {
    try {
      this.props.setDate(date);
      let games = await getGames(date);
      games = this.filterGames(games.dates[0].games);
      this.props.setGames(games);
    } catch ({message}) {
      console.log(message);
    }
  }
  formatDate = (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const month = `${String(date.getMonth()+1).length < 2 ? 0 : ''}${date.getMonth()+1}`;
    const day = `${String(date.getDate()).length < 2 ? 0 : ''}${date.getDate()}`;
    return {cleanDate: date, month, day, year: date.getFullYear(), monthABC: months[month-1]}
  }
  filterGames = (games) => {
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
  handleChange = async (date) => {
    console.log(date);
    date = await this.formatDate(date);
    this.loadGames(date);
  }
  render() {
    const { games, date } = this.props;
    const gameCards = games.map(game => {
      return <GameCard key={game.gamePk} game={game} />
    });

    return (
      <section className="games-container">
        <div className="calendar-date-header">
          <label className="date-selection-label">
            <h2>{date.monthABC} {parseInt(date.day)}, {date.year}</h2>
            <DatePicker
              className="game-date-picker"
              selected={this.props.date.cleanDate}
              onSelect={this.handleChange}
            />
            <img src={process.env.PUBLIC_URL + '/calendar.png'} alt="calendar" />
          </label>
        </div>
        <div className="game-cards-container">{gameCards ? gameCards : <span>No games on this day.</span>}</div>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  games: state.games,
  date: state.date
});

export const mapDispatchToProps = dispatch => ({
  setGames: games => { dispatch(setGames(games)) },
  setDate: date => { dispatch(setDate(date)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
