import React, { Component } from 'react';
import { connect } from 'react-redux';

import './GameDetails.scss';
import {getHighlights} from '../apiCalls';
import {setHighlights} from '../actions/actions';
import HighlightCard from '../HighlightCard/HighlightCard';

class GameDetails extends Component {
  constructor() {
    super();
    this.state = {
      condensedGame: "",
      recap: "",
      bigHighlight: ""
    }
  }
  async componentDidMount() {
    try {
      let highlights = await getHighlights(this.props.location.state.id);
      highlights = await this.filterHighlights(highlights.highlights.live.items);
      this.props.setHighlights(highlights);
      this.setState({bigHighlight: this.state.recap || this.state.condensedGame|| this.props.highlights[0]});
    } catch ({message}) {
      console.log(message);
    }
  }
  filterHighlights = (highlights) => {
    highlights = highlights.map(highlight => {
      return {
        id: highlight.id,
        title: highlight.title,
        videoURL: highlight.playbacks[2].url,
        time: this.formatTime(highlight.duration),
        thumbnail: highlight.image.cuts[5].src
      }
    });
    return this.grabCondensedAndRecap(highlights);
  }
  grabCondensedAndRecap = (highlights) => {
    highlights.forEach((highlight, i) => {
      if (highlight.title.includes('CG')) {
        this.setState({condensedGame: highlight});
        highlights.splice(i, 1);
      } else if (highlight.title.includes('Recap')) {
        this.setState({recap: highlight});
        highlights.splice(i, 1);
      }
    });
    return highlights;
  }
  formatTime = (time) => {
    time = time.split('');
    while ((time[0] === '0' || time[0] === ':') && time.length !== 4) {
      (time[0] === '0' || time[0] === ':') && time.splice(0,1);
    }
    return time.join('');
  }
  changeHighlight = ({id}) => {
    const { condensedGame, recap } = this.state;
    let bigHighlight = this.props.highlights.find(highlight => highlight.id === id);
    if (condensedGame.id === id) { bigHighlight = condensedGame}
    if (recap.id === id) { bigHighlight = recap }
    this.setState({bigHighlight});
  }
  render() {
    const { condensedGame, recap, bigHighlight } = this.state;
    const game = this.props.location.state;
    const highlights = this.props.highlights.map(highlight => {
      return <HighlightCard key={highlight.id} highlight={highlight} />
    });

    return (
      <article className="game-details">
        <div className="game-title-bar">
          <img
            className="game-heading-logo"
            src={ process.env.PUBLIC_URL + `/mlb-logos/${game.awayTeam.name.split(' ').join('')}.svg` }
            alt={`${game.awayTeam.name} logo`}
          />
          <h2 className="game-title-heading"> { game.awayTeam.name.toUpperCase() }</h2>
          <h2 className="score-text">{ game.awayScore } - { game.homeScore }</h2>
          <h2 className="game-title-heading">{ game.homeTeam.name.toUpperCase() }</h2>
          <img
            className="game-heading-logo"
            src={ process.env.PUBLIC_URL + `/mlb-logos/${game.homeTeam.name.split(' ').join('')}.svg` }
            alt={ `${game.awayTeam.name} logo` }
          />
        </div>

        <p className="more-highlights-heading">More Highlights:</p>

        <section className="big-video-container">
          { bigHighlight && <HighlightCard key={bigHighlight.id} highlight={bigHighlight} bigVid={true} /> }
          { bigHighlight && <h3 className="big-vid-title">{bigHighlight.title}</h3> }
        </section>

        <div className="scroll-container">
          <img className="scroll-up-arrow" src={process.env.PUBLIC_URL + `/arrow.png`} alt="scroll up" />
          <section className="highlight-container" onClick={(e) => this.changeHighlight(e.target)}>
            { condensedGame.id && <HighlightCard key={condensedGame.id} highlight={condensedGame} /> }
            { recap.id && <HighlightCard key={recap.id} highlight={recap} /> }
            { highlights }
            <h3 align="center">End of List</h3>
          </section>
          <img className="scroll-down-arrow" src={process.env.PUBLIC_URL + `/arrow.png`} alt="scroll down" />
        </div>
      </article>
    )
  }
}

export const mapStateToProps = state => ({
  highlights: state.highlights
});

export const mapDispatchToProps = dispatch => ({
  setHighlights: highlights => { dispatch(setHighlights(highlights)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
