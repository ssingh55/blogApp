import { createStore, applyMiddleware } from 'redux';
import blogReducer from '../reducers/blogReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from "redux-logger"

export default function configureStore() {
    return createStore(
        //   courseReducer(blogReducer),
        blogReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(reduxImmutableStateInvariant(),thunk, logger)
    );
}