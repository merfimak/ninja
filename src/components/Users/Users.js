import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';//в axios есть куча всего, * значит что все что есть в axios мы запиздячили в наш axios и теперь через него у нас есть доступ ко всему что там есть.


let Users = (props) => {
//let usersElements = props.users.map( elem => <div>{elem.fullName}</div>)
//console.log(props.users)


let getUsers = () =>{
if(props.users.length === 0){
axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
	//console.log(response.data.items)
	props.setUsers(response.data.items);
})
}
}
/*props.setUsers([
		{id: 1, fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G4qIeWgW1fzg1S8HoZ690i1c1iTnQ7wb0w&usqp=CAU', followed: false, fullName:"Kaligula", status: "I am a zar", location: {city: "Rome", country: "Italia"}},
        {id: 2, fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G4qIeWgW1fzg1S8HoZ690i1c1iTnQ7wb0w&usqp=CAU', followed: true, fullName:"Ioan", status: "I am a zar too", location: {city: "Moscow", country: "Russ"}},
        {id: 3, fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G4qIeWgW1fzg1S8HoZ690i1c1iTnQ7wb0w&usqp=CAU', followed: false, fullName:"Vova", status: "I am a loh", location: {city: "Kiev", country: "Ukrain"}},
		])*/

	return(
	 <div  className={classes.users}>{
	 	
	 	props.users.map( elem =>

	 	 <div key={elem.id} className={classes.user}>

	 
	 		<div>{elem.name}</div>
	 		<div className={classes.user_img}><img src={elem.photos.small =! null ? "/img/ava.jpg" : elem.photos.small} /></div>
	 		<div>{elem.status}</div>
	 		<div>тут должен быть город</div>
	 		<div className={classes.followe_button}>

	 			{elem.followed
	 			 ? <button onClick={() => {props.unFollow(elem.id)}}>Unfollowe</button>
	 			  : <button onClick={() => {props.follow(elem.id)}}>followe</button>}
	
	 		</div>


	 	</div>)
	 }
	 
		<button onClick={getUsers}>get Users</button>	
	 </div>
	 )
}
export default Users;