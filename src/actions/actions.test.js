import * as actions from './actions';

describe('actions', () => {
  it('should have a type of SET_GAMES', () => {
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
    const expectedAction = {
      type: 'SET_GAMES',
      games: games
    };

    // EXECUTION
    const result = actions.setGames(games);

    // EXPECTATION
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_HIGHLIGHTS', () => {
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
    const expectedAction = {
      type: 'SET_HIGHLIGHTS',
      highlights: highlights
    };

    // EXECUTION
    const result = actions.setHighlights(highlights);

    // EXPECTATION
    expect(result).toEqual(expectedAction);
  });
});
