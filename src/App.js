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
      hideVp: false
    };
  }

  manageVideosList = (e) => {
    this.setState({
      videos: e,
      hideVp: true
    });
  }

  playVideo = (e) => {
    this.setState({
      videoToPlay: e,
      hideVp: false
    });
  }

  render() {
    return (
      <div>
        <Header manageVideosList={this.manageVideosList} />
        <div className="container">
          {(this.state.videoToPlay) 
            ? <VideoPlayer videoToPlay={this.state.videoToPlay} hide={this.state.hideVp} /> 
            : null}
          <VideoList videos={this.state.videos} playVideo={this.playVideo} />
        </div>
      </div>
    );
  }
}

export default App;
