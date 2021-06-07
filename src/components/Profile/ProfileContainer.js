import React from 'react';
import { connect } from 'react-redux';
import {getUsersProfile, getStatus, updateStatus} from '../../redux/prpofile_reducer.js';//тут ошибка в названиее prpofile_reducer
import Profile from './Profile';
import * as axios from 'axios';//в axios есть куча всего, * значит что все что есть в axios мы запиздячили в наш axios и теперь через него у нас есть доступ ко всему что там есть.
import { withRouter } from "react-router";
import {usersAPI} from '../../api/api.js';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';

import { NavLink, Redirect } from 'react-router-dom';
//оберточная компонента которая работает с сервером
class ProfileAPIContainer extends React.Component {
		constructor(props) {
	    super(props);
	  }


	//сработает когда дом будет построен
		componentDidMount() {
			let userId = this.props.match.params.userId;
			if(!userId){
				userId = 2;
			}
       		this.props.getUsersProfile(userId);//это санка
       		this.props.getStatus(userId);//это санка

		  }




	render(){
		 return (
  			 <div>
              <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
	  				 )
		}
	 
	}


//это хок который проверят авторизацию
//let AuthRedirectComponent = withAuthRedirect(ProfileAPIContainer)

/*let mapStateToPropsForRedirect = (state) =>({
	isAuth: state.auth.isAuth
});
AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);*/

//let withUrlDataProfileAPIContainer = withRouter(AuthRedirectComponent);//withRouter как и connect вернет ProfileAPIContainer но уже с добавлениями данных из url



///////////////////////////////////////////////////////////////////оберточная компонента которая работает с стором



let mapStateToProps = (state) =>({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
});

export default compose(
	connect(mapStateToProps,{getUsersProfile,getStatus,updateStatus}),//добавляет инфу Props в из State
	withRouter,//Компонент высшего порядка,withRouter как и connect вернет компоненту но уже с добавлениями данных из url
	withAuthRedirect//проверка на авторизацию
	)(ProfileAPIContainer);

//export default connect(mapStateToProps,{getUsersProfile})(withUrlDataProfileAPIContainer);