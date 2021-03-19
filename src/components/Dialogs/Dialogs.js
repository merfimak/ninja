import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink} from 'react-router-dom';
import {sendMessageCreator} from '../../redux/state.js';
import {updateNewMessageCreator} from '../../redux/state.js';

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
	

	
	let addMassag = () =>{
		//let text = newMassagElem.current.value;
		 props.dispatch(sendMessageCreator());
	};





	let onMessageChange = (event) =>{
		let body = event.target.value;
		 props.dispatch(updateNewMessageCreator(body));
	};
	
	/*каждый элемент мы преобразовываем в компоненту DialogItem с получеными данными*/
	let dialogElement = props.dialogsData.map( (elem) => {
		return [
			<DialogItem name={elem.name} id={elem.id} />
		]
	});
	

	/*каждый элемент мы преобразовываем в компоненту Massage с получеными данными*/
	let dialogMasstges = props.massagesData.map( (elem) => {
		return [
			<Massage massage={elem.massage}/>
		]
	});

	  return (
			<div className={classes.dialogs}>

		    	<div className={classes.dialogs_items}>		
					{dialogElement}	    	
		  		</div>

			    <div className={classes.massages}>
			    	{dialogMasstges}	
			    											

				    <div>
			          <textarea onChange={onMessageChange} value={props.NewMessageBody}></textarea>
			        </div>

          			<button onClick={ addMassag }>Add Massag</button>	    		
			    </div>

	   	  	</div>
	   )
}

export default Dialogs;