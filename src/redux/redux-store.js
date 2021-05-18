import { createStore } from 'redux';
import { combineReducers } from 'redux';
import profileReducer from './prpofile_reducer.js';
import dialogReducer from './dialog_reduser.js';
import usersReducer from './users_reduser.js';
import authReducer from './auth_reducer.js';



let reducers = combineReducers({
	profilePage: profileReducer,
	massagesPage: dialogReducer,
	usersPage: usersReducer,
	auth: authReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;