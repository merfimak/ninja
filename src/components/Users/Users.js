import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';//в axios есть куча всего, * значит что все что есть в axios мы запиздячили в наш axios и теперь через него у нас есть доступ ко всему что там есть.
import { NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api.js';


let Users = (props) => {
//let usersElements = props.users.map( elem => <div>{elem.fullName}</div>)

///console.log(props)
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
		return <div className={classes.pagination_number}>
			<span  onClick={() => {props.onPagaChanged(elem)}} key={elem.id} className={props.currentPage === elem ? classes.select_page : ""}>{elem}</span>,
		</div>
	}
	)}
</div>




	<button className={classes.get_users_btn}>get Users</button>
	 <div  className={classes.users}>{
	 	
	 	props.users.map( elem =>

	 	 <div key={elem.id} className={classes.user}>


	 		<div className={classes.user_name}>{elem.name}</div>

	 		 <NavLink to={'/profile/' + elem.id}>
	 		<div className={classes.user_img}><img src={elem.photos.small === null ? "/img/ava.jpg" : elem.photos.small} /></div>
	 		</NavLink>

	 		<div className={classes.user_id}>id - {elem.id}</div>
	 		<div>{elem.status}</div>
	 		<div className={classes.followe_button}>

	 			{elem.followed
	 			 ? <button className={classes.followe_btn} disabled={props.followingInProgress.some(id=>id===elem.id)} onClick={() => {
	 			 	props.unfollow(elem.id)
	 			 	 

	 			 	}}>Unfollowe</button>


	 			  : <button className={classes.followe_btn} disabled={props.followingInProgress.some(id=>id===elem.id)} onClick={() => {

	 			  	props.follow(elem.id)

	 			  }}>followe</button>}
	
	 		</div>
	


	 	</div>)
	 }
	 
			
	 </div>
	 </div>
	
	 )
}
export default Users;