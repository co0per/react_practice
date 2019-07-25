export const UPDATE_LIST = 'updateVideoList';
export const HIDE_PLAYER = 'hidePlayer';
export const VL_TITLE = 'updateVLTitle'

export function updateVideoList(vl) {
    return {
        type: UPDATE_LIST,
        payload: {
            videoList: vl
        }
    }
}

export function updateVideoListTitle(title) {
    return {
        type: VL_TITLE,
        payload: {
            title: title
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