import { highlightsReducer } from './highlightsReducer';

describe('highlightsReducer', () => {
  it('should return the initial state', () => {
    // SETUP
    const expected = [];

    // EXECUTION
    const result = highlightsReducer(undefined, {});

    // EXPECTATION
    expect(result).toEqual(expected);
  });

  it('should return state with highlights', () => {
    // SETUP
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
    const expected = highlights;

    // EXECUTION
    const result = highlightsReducer(highlights, {});

    // EXPECTATION
    expect(result).toEqual(expected);
  });
});
