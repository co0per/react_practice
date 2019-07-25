import { UPDATE_LIST } from '../actions'

export const initialState = {
    videos: []
};

export default function videoListReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LIST: 
            return Object.assign({}, state, {
                videos: action.payload.videoList 
            });
        default:
            return state
    }
}