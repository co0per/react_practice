import React, { Component } from 'react';
import ClickableVidBox from './ClickableVidBox.js'

class VideoList extends Component {

  constructor(props) {
    super(props);
    this.state = { 

    };
  }

  playVideo = (e) => {
    this.props.playVideo(e);
  }

  render() {
    let videosLi = [];
    if(this.props.videos){
      videosLi = this.props.videos.map((video) => {
          return <ClickableVidBox key={video.id} videoData={video} playVideo={this.playVideo} />
      })
    }
    return (
      <ul className="" >
        {videosLi}
      </ul>
    );
  }
}

export default VideoList;
