import { gamesReducer } from './gamesReducer';

describe('gamesReducer', () => {
  it('should return the initial state', () => {
    // SETUP
    const expected = [];

    // EXECUTION
    const result = gamesReducer(undefined, {});

    // EXPECTATION
    expect(result).toEqual(expected);
  });

  it('should return state with games', () => {
    // SETUP
    const games = [
      {
        id: 1,
        awayTeam: "Atlanta Barves",
        awayScore: 0,
        homeTeam: "Washington Nationals",
        homeScore: 42
      },
      {
        id: 2,
        awayTeam: "New York Yankees",
        awayScore: 2,
        homeTeam: "Boston Red Sox",
        homeScore: 3
      }
    ]
    const expected = games;

    // EXECUTION
    const result = gamesReducer(games, {});

    // EXPECTATION
    expect(result).toEqual(expected);
  });
});
