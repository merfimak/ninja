import React from 'react';
import  classes from './Header.module.css';
import { NavLink} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {setAuthUserDataCreator}  from '../../redux/auth_reducer.js';

class HeaderContainer extends React.Component {
	constructor(props) {
	    super(props);
	  }

		componentDidMount() {
		
			 axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true})
		    .then(response =>{
		  		if(response.data.resultCode === 0){
		  			this.props.setAuthUserDataCreator(response.data.data)
		  		}
			})

		  }




	render(){

  return (
			<Header {...this.props}/> 
  	  )
}
}


let mapStateToProps = (state) =>{
	return{
		id: state.auth.id,
		email: state.auth.email,
		login: state.auth.login,
		isAuth: state.auth.isAuth,
	}
}




export default connect(mapStateToProps,{setAuthUserDataCreator})(HeaderContainer);