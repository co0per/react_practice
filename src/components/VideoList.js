import React, { Component } from 'react';
import VideoClickBox from './VideoClickBox.js';
import '../css/videoList.css';
import {trendingURL} from '../lib/APITools.js';
import {Video} from '../lib/Video.js';
import axios from 'axios';

class VideoList extends Component {

  playVideo = (e) => {
    this.props.playVideo(e);
  }

  getTrendingVids = () => {
    axios.get(trendingURL)
      .then((response) => {
          const videosList = response.data.items.map((item) => {
              return new Video(
                  item.id,
                  item.snippet.title,
                  item.snippet.description,
                  item.snippet.thumbnails.medium.url,
                  item.snippet.publishedAt,
                  item.snippet.channelTitle
              )
          })
          this.props.updateVideosList(videosList, "Trending videos");
      })
      .catch((error) => {
          console.log(error);
      });
  }

  render() {
    let videosLi = [];
    if(this.props.videos.length > 0){
      videosLi = this.props.videos.map((video) => {
        return <VideoClickBox videoData={video} playVideo={this.playVideo} />
      })
    } else {
      this.getTrendingVids();
    }

    return (
      <div>
        <h2 className="video-list-title">{this.props.title}</h2> 
        <ul className="video-list" >
          {videosLi}
        </ul>
      </div>
    );
  }
}

export default VideoList;
