import React, { Component } from 'react';
import axios from 'axios';
import '../css/inputsearch.css';
import {APIkey} from '../lib/APITools.js';
import {Video} from '../lib/Video.js';

const result = 10;

let preliminarURL = `https://www.googleapis.com/youtube/v3/search?key=${APIkey}&part=snippet&order=date&maxResults=${result}`

class InputSearch extends Component {

    constructor(props) {
	    super(props);
	    this.state = {
            input_search: ''
        }
    }
		
    handleInput = (e) => {
        this.setState({
            input_search: e.target.value
        });
    }

    handleSubmitEnter = (e) => {
        if(e.key === 'Enter'){
            this.searchVideos();
        }
    }

    searchVideos = () => {
        if (!this.state.input_search) {
            return
        }
        let finalURL = preliminarURL + "&q=" + this.state.input_search;
        
        axios.get(finalURL)
            .then((response) => {
                const videosList = response.data.items.map((item) => {
                    return new Video(
                        item.id.videoId,
                        item.snippet.title,
                        item.snippet.description,
                        item.snippet.thumbnails.medium.url,
                        item.snippet.publishedAt,
                        item.snippet.channelTitle
                    )
                })

                this.props.updateVideosList(videosList, "Search results");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="input-search"> 
                <input type="text" name="search" 
                    value={this.state.input_search} 
                    onChange={this.handleInput} 
                    onKeyPress={this.handleSubmitEnter} />
                <button onClick={this.searchVideos} className="search-button">
                    <i class="fas fa-search" />
                </button>
            </div>
        );
    }
}

export default InputSearch;
