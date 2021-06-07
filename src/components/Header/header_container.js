import React from 'react';
import  classes from './Header.module.css';
import { NavLink} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import {authAPI} from '../../api/api.js';
import {getAuthUserData} from '../../redux/auth_reducer.js';

class HeaderContainer extends React.Component {
	constructor(props) {
	    super(props);
	  }

		componentDidMount() {
		
			this.props.getAuthUserData()

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




export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer);