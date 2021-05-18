import React from 'react';
import { connect } from 'react-redux';
import {setUsersProfile} from '../../redux/prpofile_reducer.js';//тут ошибка в названиее prpofile_reducer
import Profile from './Profile';
import * as axios from 'axios';//в axios есть куча всего, * значит что все что есть в axios мы запиздячили в наш axios и теперь через него у нас есть доступ ко всему что там есть.
import { withRouter } from "react-router";

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

			 axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
		    .then(response =>{
		    	this.props.setUsersProfile(response.data);
			//console.log(response.data)
			})

		  }




	render(){
		 return (
  			 <div>
              <Profile {...this.props} profile={this.props.profile} />
           

            </div>
   )
	}
 
}

///////////////////////////////////////////////////////////////////оберточная компонента которая работает с стором
let mapStateToProps = (state) =>({
	profile: state.profilePage.profile
});


let withUrlDataProfileAPIContainer = withRouter(ProfileAPIContainer);//withRouter как и connect вернет ProfileAPIContainer но уже с добавлениями данных из url


export default connect(mapStateToProps,{setUsersProfile})(withUrlDataProfileAPIContainer);