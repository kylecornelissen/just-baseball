export const gamesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_GAMES':
      return action.games;
    default:
      return state;
  }
};
