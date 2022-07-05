import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import greetingsReducer from './greetings';


const store = createStore(
  greetingsReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
