import { combineReducers } from 'redux';
import { gamesReducer } from './gamesReducer';
import { highlightsReducer } from './highlightsReducer';
import { dateReducer } from './dateReducer';

export const rootReducer = combineReducers({
  games: gamesReducer,
  highlights: highlightsReducer,
  date: dateReducer
});
