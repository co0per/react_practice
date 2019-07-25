import { HIDE_PLAYER } from '../actions'

export const initialState = {
    hideVideoPlayer: 0
};

export default function videoPlayerReducer(state = initialState, action) {
    switch (action.type) {
        case HIDE_PLAYER: 
            return Object.assign({}, state, {
                hideVideoPlayer: action.payload.hide 
            });
        default:
            return state
    }
}