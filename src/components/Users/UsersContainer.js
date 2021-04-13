import React from 'react';
import {followActionCreator} from '../../redux/users_reduser.js';
import {unFollowActionCreator} from '../../redux/users_reduser.js';
import {setUsersActionCreator} from '../../redux/users_reduser.js';
import Users from './Users';
import { connect } from 'react-redux';





// эта функция передает свойства
let mapStateToProps = (state) =>{
	return{
		users: state.usersPage.users

	}
}
//эта функция передает функции которые мы будем потом использовать в призентациооной компоненте
let mapDispatchToProps = (dispatch) =>{
	return{
		follow:  (userID) => {
			dispatch(followActionCreator(userID));
		},
		unFollow: (userID) => {
			dispatch(unFollowActionCreator(userID));
		},
		setUsers: (users) => {
			dispatch(setUsersActionCreator(users));
		}

		
	}
}



//connect внутри использует subscribe, он следит отдельно для этой компоненты когда state измениться
// но сам state не изменяеться потому что мы менять его неможем, мы делаем копию, и он следит когда появится новая копия и тогда уже перерисовывается
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;