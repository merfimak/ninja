//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/header_container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = (props) => {
  
  return (
  	<Router>
    <div className="app_wrepper">

      <HeaderContainer />
      <NavBar />
      <div className="app_wrepper_content">      
      <Route path="/dialogs" render={ () => <DialogsContainer /> } />
      <Route path="/profile/:userId?" render={ () => <ProfileContainer /> } />
      <Route path="/users" render={ () => <UsersContainer /> } />
      </div>
        
        
         


         
           
     </div>
     </Router>
  )
}






export default App;