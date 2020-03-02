import React from 'react';
import { shallow } from 'enzyme';
import GameCard from './GameCard';

describe('GameCard', () => {
  const game = {awayTeam: {name: "angels"}, homeTeam: {name: "athletics"}};

  it('renders the names of the teams in <h3> tags', () => {
    const wrapper = shallow(<GameCard game={game} />);
    const title1 = <h3>angels</h3>;
    const title2 = <h3>athletics</h3>;

    expect(wrapper.contains(title1)).toEqual(true);
    expect(wrapper.contains(title2)).toEqual(true);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<GameCard
      game={game}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  
});
