import { createStore, applyMiddleware } from 'redux';
import blogReducer from '../reducers/blogReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore() {
  return createStore(
    //   courseReducer(blogReducer),
    blogReducer,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}