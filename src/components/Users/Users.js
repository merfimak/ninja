
import classes from './Users.module.css';
import * as axios from 'axios';//в axios есть куча всего, * значит что все что есть в axios мы запиздячили в наш axios и теперь через него у нас есть доступ ко всему что там есть.
import { NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api.js';
import React, { useState, useEffect } from 'react';
import zaglushka from '../../assets/images/zaglushka.jpg';
let Users = (props) => {
//let usersElements = props.users.map( elem => <div>{elem.fullName}</div>)

console.log(props)
let pagesCount = Math.ceil(props.totalUsersCounter / props.pageSize);

let pages = [];
for(let i = 1; i<=pagesCount;i++){
	pages.push(i);
}
let total_pages = pages;

const [StartPaginationCount, setStartPaginationCount] = useState(0);
const [EndPaginationCount, setEndPaginationCount] = useState(props.pagination_size);

console.log(total_pages.length)
console.log(EndPaginationCount)



let slice_pages = [];
pages = pages.slice(StartPaginationCount, EndPaginationCount)






	return(
		<div>


				{/*пагинатор и отдельного user я не выносил в отдельную компоненту, как это сделал димычь смотри 90 урок 42 минута*/}
				<div className={classes.user_pagination}>

				{StartPaginationCount > 0
			 			 ? 
					<button onClick={() => {
						setStartPaginationCount(StartPaginationCount - props.pagination_size)
						setEndPaginationCount(EndPaginationCount - props.pagination_size)
						props.onPagaChanged(StartPaginationCount - props.pagination_size + 1)
					} } className={classes.pagination_btn}> &larr; сюда</button>
					:
					''}


					{
						pages.map(elem =>{
						return <div className={classes.pagination_number}>
							<span  onClick={() => {props.onPagaChanged(elem)}} key={elem.id} className={props.currentPage === elem ? classes.select_page : ""}>{elem}</span>,
						</div>
					}
					)}
					{EndPaginationCount > total_pages.length  ?
					''
					

					:<button  onClick={() => {
						setStartPaginationCount(StartPaginationCount + props.pagination_size)
						setEndPaginationCount(EndPaginationCount + props.pagination_size)
						props.onPagaChanged(StartPaginationCount + props.pagination_size + 1)
					} } className={classes.pagination_btn}>туда &rarr;</button>
					}


				</div>




		<button className={classes.get_users_btn}>get Users</button>
		 <div  className={classes.users}>{	
			 props.users.map( elem =>

			 	 <div key={elem.id} className={classes.user}>

			 		<div className={classes.user_name}>{elem.name}</div>

			 		 <NavLink to={'/profile/' + elem.id}>
			 			<div className={classes.user_img}><img src={elem.photos.small === null ? zaglushka : elem.photos.small} /></div>
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