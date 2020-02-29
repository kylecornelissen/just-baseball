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
      recap: ""
    }
  }
  async componentDidMount() {
    let highlights = await getHighlights(this.props.location.state.id);
    highlights = this.filterHighlights(highlights);
    this.props.setHighlights(highlights);
  }
  filterHighlights = (highlights) => {
    highlights = highlights.map(highlight => {
      return {
        id: highlight.id,
        title: highlight.title,
        videoURL: highlight.playbacks[2].url
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
  render() {
    const {condensedGame, recap} = this.state;
    const game = this.props.location.state;
    const highlights = this.props.highlights.map(highlight => {
      return <HighlightCard key={highlight.id} highlight={highlight} />
    });
    return (
      <article>
        <h1>{game.awayTeam.name} @ {game.homeTeam.name}</h1>
        <section className="cg-recap">
          {condensedGame.id && <HighlightCard key={condensedGame.id} highlight={condensedGame} />}
          {recap.id && <HighlightCard key={recap.id} highlight={recap} />}
        </section>
        <h2>Highlights</h2>
        <section>{highlights}</section>
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
