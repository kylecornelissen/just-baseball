import React from 'react';

import './HighlightCard.scss';

export const HighlightCard = ({highlight, bigVid}) => {
  const featureVid = (
    <video className="highlight-vid" align="left" controls autoplay="autoplay" loop>
      <source src={highlight.videoURL} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  )
  const thumbnailImg = (
    <article className="highlight-preview" id={highlight.id}>
      <img
        className="highlight-thumbnail"
        id={highlight.id} src={highlight.thumbnail}
        alt={`${highlight.title}`}
      />
      <h3 className="highlight-title" id={highlight.id}>{highlight.title}</h3>
      <h4 className="highlight-duration" id={highlight.id}>{highlight.time}</h4>
    </article>
  )
  return (
    <article className="highlight-card">
      {!bigVid && thumbnailImg}
      {bigVid && featureVid}
    </article>
  )
}

export default HighlightCard;
