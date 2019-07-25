import React, { Component } from 'react';
import {loadYoutubeApi} from '../lib/APITools';
import '../css/videoPlayer.css';

import { connect } from 'react-redux'

const mapStateToProps = state => {
	return { videoPlayer: state.videoPlayer };
  };

class VideoPlayer extends Component {

	constructor(props) {
    	super(props);
    	this.state = { 
    		showMoreDescription: false
    	};
  	}

  	componentWillReceiveProps(nextProps) {
    	this.newVideo(nextProps.videoToPlay);
  	}

  	onPlayerReady = () => {
		if(this.props.videoToPlay) {
			this.newVideo(this.props.videoToPlay);
		}
  	}

	newVideo = (videoToPlay) => {
		this.setState({
			showMoreDescription: false
		})
		this.player.clearVideo();
		this.player.cueVideoById(videoToPlay.id);
		this.player.playVideo();
	}

	componentDidMount() {
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

	componentDidUpdate() {
		let video_player = document.getElementsByClassName("video-player")[0];
		if(this.props.videoPlayer.hideVideoPlayer) {
			video_player.style.display = "none";
			this.player.pauseVideo();
		} else {
			video_player.style.display = "block";
		}
	}

	showDescription = () => {
		if(this.state.showMoreDescription){
			this.setState({
				showMoreDescription: false
			})
		} else {
			this.setState({
				showMoreDescription: true
			})
		}
	}

	render() {
		const v = this.props.videoToPlay;

		return (
			<div className="video-player">
				<div id="player" />
				<div className="video-info">
				<h2>{v.title}</h2>
					{(v.description.length > 250)
					? (this.state.showMoreDescription)
						? <div>
							<p>{v.description}</p>
							<span className="show-des" onClick={this.showDescription}>Show less</span>
						</div>
						: <div>
							<p>{v.description.substring(0, 250) + "..."}</p>
							<span className="show-des" onClick={this.showDescription}>Show more</span>
						</div>
					: <p>{v.description}</p>
					}
					
				<p><i>Published {v.get_date()}</i></p>
				</div>
			</div>
		);
	}
}
  
  const VP = connect(mapStateToProps)(VideoPlayer);
  
  export default VP;