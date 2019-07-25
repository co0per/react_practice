import { combineReducers } from 'redux';
import videoListReducer from './videoListReducer';
import videoPlayerReducer from './videoPlayerReducer';

export default combineReducers({
    videos: videoListReducer,
    videoPlayer: videoPlayerReducer
});