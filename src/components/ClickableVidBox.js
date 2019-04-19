import React, { Component } from 'react';
import '../css/clickableVidBox.css';

class ClickableVidBox extends Component {

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
        </div>
      </li>
    );
  }
}

export default ClickableVidBox;