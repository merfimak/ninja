import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';//в axios есть куча всего, * значит что все что есть в axios мы запиздячили в наш axios и теперь через него у нас есть доступ ко всему что там есть.
import { NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api.js';


let Users = (props) => {
//let usersElements = props.users.map( elem => <div>{elem.fullName}</div>)

console.log(props)
let pagesCount = Math.ceil(props.totalUsersCounter / props.pageSize);

let pages = [];
for(let i = 1; i<=pagesCount;i++){
	pages.push(i);
}
	return(
		<div>


<div className={classes.user_pagination}>

	{
		pages.map(elem =>{
		return <span  onClick={() => {props.onPagaChanged(elem)}} key={elem.id} className={props.currentPage === elem ? classes.select_page : ""}>{elem}</span>
	}
	)}
</div>




	<button>get Users</button>
	 <div  className={classes.users}>{
	 	
	 	props.users.map( elem =>

	 	 <div key={elem.id} className={classes.user}>


	 		<div>{elem.name}</div>

	 		 <NavLink to={'/profile/' + elem.id}>
	 		<div className={classes.user_img}><img src={elem.photos.small === null ? "/img/ava.jpg" : elem.photos.small} /></div>
	 		</NavLink>

	 		<div>{elem.id}</div>
	 		<div>{elem.status}</div>
	 		<div>тут должен быть город</div>
	 		<div className={classes.followe_button}>

	 			{elem.followed
	 			 ? <button disabled={props.followingInProgress.some(id=>id===elem.id)} onClick={() => {
	 			 	props.toggleFollowingInProgress(true,elem.id)
	 			 	 usersAPI.unFollow(elem.id).then(data =>{
					    	if(data.resultCode === 0){
					  			props.unFollow(elem.id)
					  		}
					    props.toggleFollowingInProgress(false,elem.id)	
						})

	 			 	}}>Unfollowe</button>


	 			  : <button disabled={props.followingInProgress.some(id=>id===elem.id)} onClick={() => {

	 			  	props.toggleFollowingInProgress(true,elem.id)
	 			    usersAPI.follow(elem.id).then(data =>{
					    	if(data.resultCode === 0){
					  			props.follow(elem.id)
					  		}
					    	
						})
	 			    props.toggleFollowingInProgress(false,elem.id)

	 			  }}>followe</button>}
	
	 		</div>
	


	 	</div>)
	 }
	 
			
	 </div>
	 </div>
	
	 )
}
export default Users;