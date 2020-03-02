import { GamesContainer, mapStateToProps, mapDispatchToProps } from './GamesContainer';
import { setGames } from '../actions/actions';

describe('GamesContainer', () => {
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

  describe('mapStateToProps', () => {
    it('should return an object with the games array', () => {
      // SETUP
      const mockState = {
        games: games
      };
      const expected = {
        games: games
      };

      // EXECUTION
      const mappedProps = mapStateToProps(mockState);

      // EXPECTATION
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the setGames action when setGames is called', () => {
      // SETUP
      const mockDispatch = jest.fn();
      const actionToDispatch = setGames(games);
      const mappedProps = mapDispatchToProps(mockDispatch);

      // EXECUTION
      mappedProps.setGames(games);

      // EXPECTATION
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
