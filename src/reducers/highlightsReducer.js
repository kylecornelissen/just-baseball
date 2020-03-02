export const highlightsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_HIGHLIGHTS':
      return action.highlights;
    default:
      return state;
  }
};
