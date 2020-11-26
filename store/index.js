import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as Sentry from 'sentry-expo';
import combineReducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware({
  onError(error) {
    Sentry.Native.captureException(error);
  }
});
const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
