import React, { Component } from 'react';
import Header from './components/Header.js';
import VideoPlayer from './components/VideoPlayer.js';
import VideoList from './components/VideoList.js';
import './css/app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      videoToPlay: null,
      videos: [],
      hideVp: false,
      title: ''
    };
  }

  updateVideosList = (vl, t) => {
    this.setState({
      videos: vl,
      hideVp: true,
      title: t
    });
  }

  playVideo = (e) => {
    window.scrollTo(0, 0);
    this.setState({
      videoToPlay: e,
      hideVp: false,
      title: ''
    });
  }

  render() {
    return (
      <div>
        <Header updateVideosList={this.updateVideosList} />
        <div className="container">
          {(this.state.videoToPlay) 
            ? <VideoPlayer videoToPlay={this.state.videoToPlay} hide={this.state.hideVp} /> 
            : null}
          <VideoList
            title={this.state.title}
            videos={this.state.videos} 
            playVideo={this.playVideo} 
            updateVideosList={this.updateVideosList} />
        </div>
      </div>
    );
  }
}

export default App;
