import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {
    videos: [],
    hidePlayer: true
};

const middleware = [thunk];

export const store = createStore(
    rootReducer/*, 
    initialState,
    applyMiddleware(...middleware),
    window.devToolsExtension && window.devToolsExtension()*/
);