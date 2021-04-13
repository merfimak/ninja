//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
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

      <Header />
      <NavBar />
      <div className="app_wrepper_content">      
      <Route path="/dialogs" render={ () => <DialogsContainer /> } />
      <Route path="/profile" render={ () => <Profile /> } />
      <Route path="/users" render={ () => <UsersContainer /> } />
      </div>
        
        
         


         
           
     </div>
     </Router>
  )
}






export default App;