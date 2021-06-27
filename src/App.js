//import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/header_container';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { getAuthUserData } from './redux/auth_reducer.js';
import { compose } from 'redux';
import { initializeApp } from './redux/app_reducer.js';
import prelouder from './assets/images/prelouder.gif';
import { Provider } from 'react-redux';
import store from './redux/redux-store.js';



class App extends React.Component {
    constructor(props) {
      super(props);
    }

  //сработает когда дом будет построен
    componentDidMount() {
        this.props.initializeApp()
      }
          




  render(){
    //alert(this.props.initialized)
if(!this.props.initialized){
  
  return  <img src={prelouder} />
}



  return (
  	
    <div className="app_wrepper">

      <HeaderContainer />
      <NavBar />
      <div className="app_wrepper_content">      
      <Route path="/dialogs" render={ () => <DialogsContainer /> } />
      <Route path="/profile/:userId?" render={ () => <ProfileContainer /> } />
      <Route path="/users" render={ () => <UsersContainer /> } />
      <Route path="/login" render={ () => <Login /> } />
      </div>
     
     </div>
     
  )}
}


let mapStateToProps = (state) =>{
  return{
    initialized: state.app.initialized,

  }
}



let AppContainer =  compose(
//withRouter,
connect(mapStateToProps,{initializeApp}))(App);

let SamuraiJSApp = (props) => {
  return   <Router>
          <Provider store={store}>{/*штука из react-redux, позволяет добратьсядо store из контейнеров компонент*/}
            
                <AppContainer  />
             
          </Provider>
 </Router>


}

export default SamuraiJSApp;