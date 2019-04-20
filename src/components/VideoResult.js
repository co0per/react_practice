import React, { Component } from 'react';
import '../css/videoResult.css';

class VideoResult extends Component {

  playVideo = () => {
    this.props.playVideo(this.props.videoData);
  }

  render() {
    const vd = this.props.videoData;
    return (
      <li className="vid-box" onClick={this.playVideo}>
        <img src={vd.img} alt={vd.title} />
        <div className="vid-box-info">
          <h3>{vd.title}</h3>
          {(vd.description) ? <p>{vd.description}</p> : <p><i>No description.</i></p>}
          <p>{vd.owner}</p>
        </div>
      </li>
    );
  }
}

export default VideoResult;