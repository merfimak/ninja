import reportWebVitals from './reportWebVitals';
//import store from './redux/state.js';
import store from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';






	ReactDOM.render(
		  <React.StrictMode>
		  	<Provider store={store}>{/*штука из react-redux, позволяет добратьсядо store из контейнеров компонент*/}
		    	<App  />
		  	
		    </Provider>
		  </React.StrictMode>,
		  document.getElementById('root')
	);




reportWebVitals();