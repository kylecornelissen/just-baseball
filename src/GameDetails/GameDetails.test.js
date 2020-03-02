import { GameDetails, mapStateToProps, mapDispatchToProps } from './GameDetails';
import { setHighlights } from '../actions/actions';

describe('GamesContainer', () => {
  const highlights = [
    {
      id: 1,
      title: "WOW HOME RUN!",
      videoURL: "https://fakeurl.com/movie1.mp4",
      time: "00:01:30",
      thumbnail: "https://fakeurl.com/movie-pic1.png"
    },
    {
      id: 2,
      title: "OH YEAH STRIKEOUT!",
      videoURL: "https://fakeurl.com/movie2.mp4",
      time: "00:11:22",
      thumbnail: "https://fakeurl.com/movie-pic2.png"
    }
  ]

  describe('mapStateToProps', () => {
    it('should return an object with the highlights array', () => {
      // SETUP
      const mockState = {
        highlights: highlights
      };
      const expected = {
        highlights: highlights
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
      const actionToDispatch = setHighlights(highlights);
      const mappedProps = mapDispatchToProps(mockDispatch);

      // EXECUTION
      mappedProps.setHighlights(highlights);

      // EXPECTATION
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
