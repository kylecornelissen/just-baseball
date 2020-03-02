import React from 'react';
import { Link } from 'react-router-dom';

import './GameCard.scss';

export const GameCard = ({game}) => {
  return (
    <Link className="game-card-link" to={{
      pathname: `/game/${game.id}`,
      state: game
    }}>
      <article className="game-card">
        <div className="away-team-container">
          <img
            className="team-logo"
            src={process.env.PUBLIC_URL + `/mlb-logos/${game.awayTeam.name.split(' ').join('')}.svg`}
            alt={`${game.awayTeam.name} logo`}
          />
          <h3>{game.awayTeam.name}</h3><span>{game.awayScore}</span>
        </div>
        <div className="home-team-container">
          <img
            className="team-logo"
            src={process.env.PUBLIC_URL + `/mlb-logos/${game.homeTeam.name.split(' ').join('')}.svg`}
            alt={`${game.homeTeam.name} logo`}
          />
          <h3>{game.homeTeam.name}</h3><span>{game.homeScore}</span>
        </div>
      </article>
    </Link>
  )
}

export default GameCard;
