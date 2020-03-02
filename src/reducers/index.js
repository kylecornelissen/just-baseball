import { combineReducers } from 'redux';
import { gamesReducer } from './gamesReducer';
import { highlightsReducer } from './highlightsReducer';

export const rootReducer = combineReducers({
  games: gamesReducer,
  highlights: highlightsReducer
});
