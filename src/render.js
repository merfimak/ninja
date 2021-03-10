//этот файла для того что бы небыло круговой зависимости
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




export let rerenderEntireTree = (state, addPost, updateVewPostText) =>{
console.log(addPost)
	ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} updateVewPostText={updateVewPostText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

reportWebVitals();