import React, { Component } from 'react';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import VideoList from './components/VideoList';
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

  updateTitle = (t) => {
    this.setState({
      title: t
    });
  }

  playVideo = (e) => {
    window.scrollTo(0, 0);
    this.setState({
      videoToPlay: e
    });
  }

  render() {
    return (
      <div>
        <Header 
          updateTitle={this.updateTitle} 
        />
        <div className="container">
          {(this.state.videoToPlay) 
            ? <VideoPlayer videoToPlay={this.state.videoToPlay} hide={this.state.hideVp} /> 
            : null}
          <VideoList
            title={this.state.title}
            videos={this.state.videos} 
            playVideo={this.playVideo} 
            updateTitle={this.updateTitle} />
        </div>
      </div>
    );
  }
}

export default App;
