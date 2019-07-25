import { UPDATE_LIST, VL_TITLE } from '../actions'

export const initialState = {
    videos: [],
    title: 'Trending videos'
};

export default function videoListReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LIST: 
            return Object.assign({}, state, {
                videos: action.payload.videoList 
            });
        case VL_TITLE:
            return Object.assign({}, state, {
                title: action.payload.title 
            });
        default:
            return state
    }
}