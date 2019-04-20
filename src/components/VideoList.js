import React, { Component } from 'react';
import VideoResult from './VideoResult.js';
import '../css/videoList.css';

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
          return <VideoResult videoData={video} playVideo={this.playVideo} />
      })
    }
    return (
      <ul className="video-list" >
        {videosLi}
      </ul>
    );
  }
}

export default VideoList;
