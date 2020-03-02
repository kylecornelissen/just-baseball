import React from 'react';
import { shallow } from 'enzyme';
import HighlightCard from './HighlightCard';

describe('HighlightCard', () => {
  const highlight = {
    id: 1,
    title: "WOW HOME RUN!",
    videoURL: "https://fakeurl.com/movie1.mp4",
    time: "00:01:30",
    thumbnail: "https://fakeurl.com/movie-pic1.png"
  };

  it('renders a big video if bigVid argument is true', () => {
    const wrapper = shallow(<HighlightCard highlight={highlight} bigVid={true} />);
    const featureVid = <video className="highlight-vid" align="left" controls autoplay="autoplay" loop>
      <source src={highlight.videoURL} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>

    expect(wrapper.contains(featureVid)).toEqual(true);
  });

  it('renders a thumbnail image if bigVid argument is false', () => {
    const wrapper = shallow(<HighlightCard highlight={highlight} bigVid={false} />);

    const thumbnailImg = <article className="highlight-preview" id={highlight.id}>
      <img
        className="highlight-thumbnail"
        id={highlight.id} src={highlight.thumbnail}
        alt={`${highlight.title}`}
      />
      <h3 className="highlight-title" id={highlight.id}>{highlight.title}</h3>
      <h4 className="highlight-duration" id={highlight.id}>{highlight.time}</h4>
    </article>

    expect(wrapper.contains(thumbnailImg)).toEqual(true);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<HighlightCard
      highlight={highlight}
      bigVid={false}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
