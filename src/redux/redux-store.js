import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import profileReducer from './prpofile_reducer.js';
import dialogReducer from './dialog_reduser.js';
import usersReducer from './users_reduser.js';
import authReducer from './auth_reducer.js';
import app_reducer from './app_reducer.js';
import thunkMiddleware from "redux-thunk";
import { compose } from 'redux';

let reducers = combineReducers({
	profilePage: profileReducer,
	massagesPage: dialogReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: app_reducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));




//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;