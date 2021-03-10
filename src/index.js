import reportWebVitals from './reportWebVitals';
//import state from './redux/state.js';
//import {addPost} from './redux/state.js';
//import {updateVewPostText} from './redux/state.js';
//import {subscribe} from './redux/state.js';
import store from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = () =>{
	ReactDOM.render(
  <React.StrictMode>
    <App state={store.getState} addPost={store.addPost} updateVewPostText={store.updateVewPostText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
rerenderEntireTree();

store.subscribe(rerenderEntireTree);// взяли из state и тудаже закинули rerenderEntireTree - хуй пойми зачем


reportWebVitals();