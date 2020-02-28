import React from 'react';
import { Link } from 'react-router-dom';

import './GameCard.scss';

export const GameCard = ({game}) => {
  return (
    <Link to={`/game/${game.id}`}>
      <h3>{game.awayTeam.name} @ {game.homeTeam.name}</h3>
    </Link>
  )
}

export default GameCard;
