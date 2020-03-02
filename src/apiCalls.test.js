import React from 'react';
import { shallow } from 'enzyme';
import { getGames, getHighlights } from './apiCalls';

describe('getGames', () => {
  const date = '03/01/2020'
  let mockResponse = {
    dates: [
      {
        date: "2020-03-01",
        games: [
          {
            gamePk: 605800,
            teams: {
              away: {
                score: 9,
                team: {
                  id: 141,
                  name: "Toronto Blue Jays"
                }
              },
              home: {
                score: 13,
                team: {
                  id: 134,
                  name: "Pittsburgh Pirates"
                }
              }
            }
          }
        ]
      }
    ]
  };


  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    const getGamesURL = 'https://statsapi.mlb.com/api/v1/schedule'
    const getGamesParams = `?sportId=1&startDate=${date}&endDate=${date}`
    getGames(date);

    expect(window.fetch).toHaveBeenCalledWith(getGamesURL + getGamesParams);
  });

  it('should return a resolved promise when response is OK (Happy Path)', () => {
    expect(getGames(date)).resolves.toEqual(mockResponse);
  });

  it('should return error if the resolved promise response is not OK (Sad Path)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockResponse)
      });
    });
    expect(getGames(date)).rejects.toEqual(Error('Invalid.'));
    expect(getGames(date)).rejects.toThrow(Error('Invalid.'));
  });

  it('should return error if the resolved promise response is not OK (Sad Path)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("Invalid."));
    });
    expect(getGames(date)).rejects.toEqual(Error('Invalid.'));
  });
});

describe('getHighlights', () => {
  let gameID = 530661;
  let mockResponse = {
    highlights: {
      highlights: {
        items: [
          {
            playbacks: [
              {
                url: "https://fakeurl.com/asset_450K.mp4"
              }
            ]
          }
        ]
      }
    }
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    const getHighlightsURL = `https://statsapi.mlb.com/api/v1/game/${gameID}/content`
    getHighlights(gameID);

    expect(window.fetch).toHaveBeenCalledWith(getHighlightsURL);
  });

  it('should return a resolved promise when response is OK (Happy Path)', () => {
    expect(getHighlights(gameID)).resolves.toEqual(mockResponse);
  });

  it('should return error if the resolved promise response is not OK (Sad Path)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockResponse)
      });
    });
    expect(getHighlights(gameID)).rejects.toEqual(Error('Invalid.'));
    expect(getHighlights(gameID)).rejects.toThrow(Error('Invalid.'));
  });

  it('should return error if the resolved promise response is not OK (Sad Path)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("Invalid."));
    });
    expect(getHighlights(gameID)).rejects.toEqual(Error('Invalid.'));
  });
});
