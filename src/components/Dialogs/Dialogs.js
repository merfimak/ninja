import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import {sendMessageCreator} from '../../redux/dialog_reduser.js';
import {updateNewMessageCreator} from '../../redux/dialog_reduser.js';
import { Formik, Form, Field, ErrorMessage } from 'formik'; 


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

	let addMassag = (massage) =>{
		alert(massage);
		 props.onAddMassag(massage);
	};





	let MessageChange = (event) =>{
		let body = event.target.value;
		// props.onMessageChange(body);
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
			    											

			    	<AddMassagForm addMassag={addMassag}/>
	    		
			    </div>




	   	  	</div>
	   )
}


const AddMassagForm = (props) => {
	return(

<div>
     <Formik
       initialValues={{ massage: ''}}
       validate={values => {
         const errors = {};
         if (!values.massage) {
           errors.massage = 'Required';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         
          // alert(JSON.stringify(values, null, 2));
           //alert(values.massage);
           props.addMassag(values.massage)

       }}
     >
       {({ isSubmitting }) => (
         <Form>
	         <div>
	           <Field placeholder={"massage"} className={classes.massage_input} type="text" name="massage" />
	           <ErrorMessage className={classes.massage_error} name="massage" component="div" />
           </div>
           <div>
           		<button type="submit" className={classes.massage_button} disabled={isSubmitting}>Add Massag</button>
           </div>
         </Form>
       )}
     </Formik>
   </div>

		)
}










export default Dialogs;