import React, { Component } from 'react';
import VideoClickBox from './VideoClickBox';
import '../css/videoList.css';
import {trendingURL} from '../lib/APITools';
import {Video} from '../lib/Video';
import axios from 'axios';

import { connect } from 'react-redux'
import { updateVideoList } from '../actions';

const mapStateToProps = state => {
  return { videos: state.videos };
};

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
          this.props.updateTitle("Trending videos");
          this.props.updateVideoList(videosList);
      })
      .catch((error) => {
          console.log(error);
      });
  }

  render() {
    let videosLi = [];
    if(this.props.videos.videos.length > 0){
      videosLi = this.props.videos.videos.map((video, index) => {
        return <VideoClickBox videoData={video} playVideo={this.playVideo} key={index} />
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

function mapDispatchToProps(dispatch) {
  return {
      updateVideoList: vl => dispatch(updateVideoList(vl))
  }
}

const VL = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VL;