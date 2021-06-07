import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import {sendMessageCreator} from '../../redux/dialog_reduser.js';
import {updateNewMessageCreator} from '../../redux/dialog_reduser.js';

const DialogItem = (props) =>{

	let path = "/dialogs/" + props.id;
	return(
	<div className={classes.dialog}>
	    <NavLink to={path} activeClassName={classes.active}>
	    <div className={classes.dialogs_ava}> 
	    <img src="img/nicol.jpg" alt=""></img> 
	     </div>
	    {props.name}
	    </NavLink>
	</div>
	)
}

const Massage = (props) =>{
	return(
	<div className={classes.massage}>
	    			{props.massage}
	   </div>
	)
}




const Dialogs = (props) => {
	
//console.log(props)

	let addMassag = () =>{
		 props.onAddMassag();
	};





	let MessageChange = (event) =>{
		let body = event.target.value;
		 props.onMessageChange(body);
	};

	
	
	//каждый элемент мы преобразовываем в компоненту DialogItem с получеными данными
	let dialogElement = props.massagesPage.dialogsData.map( (elem) => {
		return [
			<DialogItem name={elem.name} id={elem.id} key={elem.id}/>
		]
	});
	

	/*каждый элемент мы преобразовываем в компоненту Massage с получеными данными*/
	let dialogMasstges = props.massagesPage.massagesData.map( (elem) => {
		return [
			<Massage massage={elem.massage} key={elem.id}/>
		]
	});

if(!props.isAuth) return <Redirect to={"/Login"} />

	  return (
			<div className={classes.dialogs}>

					<div className={classes.dialogs_items}>		
					{dialogElement}	    	
		  		</div>

			    <div className={classes.massages}>
			    	{dialogMasstges}	
			    											

				    <div>
			          <textarea onChange={MessageChange} value={props.massagesPage.NewMessageBody}></textarea>
			        </div>

          			<button onClick={ addMassag }>Add Massag</button>	    		
			    </div>
	   	  	</div>
	   )
}

export default Dialogs;