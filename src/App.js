//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = (props) => {
  //console.log(props)
  return (
  	<Router>
    <div className="app_wrepper">

        <Header />
        <NavBar />
        <div className="app_wrepper_content">      
        <Route path="/dialogs" render={ () => <Dialogs  dialogsData={props.state.massagesPage.dialogsData} massagesData={props.state.massagesPage.massagesData} /> } />
        <Route path="/profile" render={ () => <Profile   postData={props.state.profilePage.postData} newPostText={props.state.profilePage.newPostText} addPost={props.addPost} updateVewPostText={props.updateVewPostText}/> } />
        </div>
          
        
         


         
           
     </div>
     </Router>
  )
}






export default App;