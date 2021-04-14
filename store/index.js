import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware({
  onError(error, { sagaStack }) {
    if (__DEV__) {
      alert(
        'Unhandled error occured inside at least one Saga.\n\n' +
          'Check console for Saga stack trace and reload the app (saga tree is dead).'
      );
      console.log(error);
      console.log(sagaStack);
    }
  }
});
const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
