import React from 'react';
import { compose } from 'redux';
import {follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleFeching,
	toggleFollowingInProgress,
	getUsers
} from '../../redux/users_reduser.js';
/*
import {followActionCreator} from '../../redux/users_reduser.js';
import {unFollowActionCreator} from '../../redux/users_reduser.js';
import {setUsersActionCreator} from '../../redux/users_reduser.js';
import {setCurrntPageActionCreator} from '../../redux/users_reduser.js';
import {setTotalUsersCountctionCreator} from '../../redux/users_reduser.js';
import {toggleFechingActionCreator} from '../../redux/users_reduser.js';*/
import { connect } from 'react-redux';
import Users from './Users';
import * as axios from 'axios';//в axios есть куча всего, * значит что все что есть в axios мы запиздячили в наш axios и теперь через него у нас есть доступ ко всему что там есть.
import {usersAPI} from '../../api/api.js';
import Prelouder from '../common/Prelouder/Prelouder.js'

//оберточная компонента которая работает с сервером
class UsersAPIcomponent extends React.Component {
		constructor(props) {
	    super(props);
	  }
	  
		//сработает когда дом будет построен
		componentDidMount() {
			//здесь раньше был аякс запрос но мы вынесли его в usersReduser
			this.props.getUsers(this.props.currentPage,this.props.pageSize)

		  }
		onPagaChanged = (pageNumber) => {
				this.props.getUsers(pageNumber,this.props.pageSize)
			
		}
		render(){
		return( 
				<div>
				<Prelouder isFetching={this.props.isFetching} />
				<Users users={this.props.users}
						unfollow={this.props.unfollow}
						follow={this.props.follow}
						onPagaChanged={this.onPagaChanged}
						currentPage={this.props.currentPage}
						totalUsersCounter={this.props.totalUsersCounter}
						pageSize={this.props.pageSize}
						followingInProgress={this.props.followingInProgress}
						toggleFollowingInProgress={this.props.toggleFollowingInProgress}
						
				/>
				
				 </div>
		 )
		}
}


//оберточная компонента которая работает с стором
// эта функция передает свойства
let mapStateToProps = (state) =>{
	return{
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCounter: state.usersPage.totalUsersCounter,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
		getUsers: state.usersPage.getUsers,

	}
}
//эта функция передает функции которые мы будем потом использовать в призентациооной компоненте
/*let mapDispatchToProps = (dispatch) =>{
	return{
		follow:  (userID) => {
			dispatch(followActionCreator(userID));
		},
		unFollow: (userID) => {
			dispatch(unFollowActionCreator(userID));
		},
		setUsers: (users) => {
			dispatch(setUsersActionCreator(users));
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrntPageActionCreator(currentPage));
		},
		setTotalUsersCount: (currentPage) => {
			dispatch(setTotalUsersCountctionCreator(currentPage));
		},
		toggleFeching: (isFetching) => {
			dispatch(toggleFechingActionCreator(isFetching));
		}

		
	}
}*/



//connect внутри использует subscribe, он следит отдельно для этой компоненты когда state измениться
// но сам state не изменяеться потому что мы менять его неможем, мы делаем копию, и он следит когда появится новая копия и тогда уже перерисовывается
//const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPIcomponent);cтарая запись
//connect внутри себя создает ActionCreator, и поэтому можно писать вот так вот сокращенно
/*const UsersContainer = connect(mapStateToProps,{
	follow,
	unfollow,
	setCurrentPage,
	toggleFollowingInProgress,
	getUsers
})(UsersAPIcomponent);*///UsersAPIcomponent находиться в этом же файле


export default compose(
	connect(mapStateToProps,{
	follow,
	unfollow,
	setCurrentPage,
	toggleFollowingInProgress,
	getUsers
}),//добавляет инфу Props в из State
	)(UsersAPIcomponent);




//export default UsersContainer;