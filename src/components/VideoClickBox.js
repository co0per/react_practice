import React, { Component } from 'react';
import '../css/videoClickBox.css';

import { connect } from 'react-redux'
import { hidePlayer } from '../actions';

class VideoClickBox extends Component {

  playVideo = () => {
    this.props.hidePlayer(0);
    this.props.playVideo(this.props.videoData);
  }

  render() {
    const vd = this.props.videoData;
    return (
      <li className="vid-box" onClick={this.playVideo}>
        <img src={vd.img} alt={vd.title} />
        <div className="vid-box-info">
          <h3>{vd.title}</h3>
          {(vd.description) 
            ? (vd.description.lenght > 100
              ? <p>{vd.description}</p> 
              : <p>{vd.description.substring(0, 197) + "..."}</p>)
            : <p className="no-description"><i>No description.</i></p>
          }
          <p>{vd.owner}</p>
        </div>
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
      hidePlayer: hp => dispatch(hidePlayer(hp))
  }
}

const VCB = connect(null, mapDispatchToProps)(VideoClickBox);

export default VCB;