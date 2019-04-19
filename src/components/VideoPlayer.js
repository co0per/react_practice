import React, { Component } from 'react';
import {loadYoutubeApi} from '../lib/loadApi.js';
import '../css/videoPlayer.css';

class VideoPlayer extends Component {

  componentDidUpdate() {
    this.newVideo();
  }

  onPlayerReady() {
    this.newVideo();
  }

  newVideo() {
    if(this.props.videoToPlay) {
      this.player.clearVideo();
      this.player.cueVideoById(this.props.videoToPlay.id);
      this.player.playVideo();
    }
  }

  componentDidMount () {
    const load_youtube = loadYoutubeApi();
    
    load_youtube.then((YT) => {
      this.player = new YT.Player('player', {
        videoId: '',
        height: 390,
        width: 640,
        playerVars: {
          rel: 0,
          modestbranding: 1
        },
        events: {
          'onReady': this.onPlayerReady.bind(this)/*,
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this)*/
        }
      })
    })
  }

  render() {
    const vd = this.props.videoToPlay;
    return (
      <div className="video-player">
        <div id="player" />
        <div className="video-info">
          <h2>{vd.title}</h2>
          <p>{vd.description}</p>
          <p><i>Published {vd.get_date()}</i></p>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
