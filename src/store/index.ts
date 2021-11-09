import thunk from 'redux-thunk';
import { applyMiddleware,  compose, createStore } from "redux";
import { rootReducer } from './reducers';

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))