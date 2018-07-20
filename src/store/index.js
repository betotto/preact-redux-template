import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import commonModule from '../modules/common/commonActions';
import initialState from '../initialState';

const appReducer = combineReducers({
  commonModule
});

let composeEnhancers;

if(process.env.NODE_ENV === 'production') {
  composeEnhancers = compose;
} else {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = createStore(
  appReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;
