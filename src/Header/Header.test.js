import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders the website title in h1 and Beta in span', () => {
    const wrapper = shallow(<Header />);
    const title = <h1>Just Baseball.<span>Beta</span></h1>

    expect(wrapper.contains(title)).toEqual(true);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Header

    />);

    expect(wrapper).toMatchSnapshot();
  });
});
