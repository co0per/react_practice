export const UPDATE_LIST = 'updateVideoList';
export const HIDE_PLAYER = 'hidePlayer';

export function updateVideoList(vl) {
    return {
        type: UPDATE_LIST,
        payload: {
            videoList: vl
        }
    }
}

export function hidePlayer(bool) {
    return {
        type: HIDE_PLAYER,
        payload: {
            hide: bool
        }
    }
}