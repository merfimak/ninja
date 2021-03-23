import reportWebVitals from './reportWebVitals';
import store from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*import {profileReducer} from './redux/profile_reducer.js';
import {dialogReducer} from './redux/dialog_reduser.js';*/

let rerenderEntireTree = () =>{
	ReactDOM.render(
  <React.StrictMode>
    <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
rerenderEntireTree();

store.subscribe(rerenderEntireTree);// взяли из state и тудаже закинули rerenderEntireTree - хуй пойми зачем


reportWebVitals();