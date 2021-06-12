import React from 'react';
import { connect } from 'react-redux'
import classes from './Login.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'; 
import {login, logout} from '../../redux/auth_reducer.js';//тут ошибка auth_reduCer
import { Redirect } from 'react-router-dom';




////////////////////////////////////////////////////////////// 3 компонента
let LoginForm = (props) => {
 //console.log(props)
return(
<div>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.password) {
           errors.password = 'Required';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        
           //alert(JSON.stringify(values, null, 2));
           //alert(values.email + values.password + values.rememberMe);
         props.login(values.email, values.password, values.rememberMe)
       }}
     >
       {({ isSubmitting }) => (
         <Form>
         aBA5a!3u5SAZcBs
	         <div>
	           <Field placeholder={"email"} className={classes.login_input} type="email" name="email" />
	           <ErrorMessage className={classes.login_error} name="email" component="div" />
           </div>
           
           <div>
	           <Field placeholder={"Pass"} className={classes.login_input} type="password" name="password" />
	           <ErrorMessage className={classes.login_error} name="password" component="div" />
            </div>
            <div>
	           <Field type="checkbox" name="rememberMe" /> remember Me
	        </div>
          <div className={classes.login_error} >{props.error}</div>
           <div>
           		<button type="submit" className={classes.login_button} disabled={isSubmitting}>отправить</button>
           </div>
         </Form>
       )}
     </Formik>
   </div>
)
}

//////////////////////////////////////////////////////////////2компонента
let Login = (props) => {

if(props.isAuth) return <Redirect to={"/Profile"} />

return(
	<div>
		 <div className={classes.login_container}>
			<h1  className={classes.login_title}>Login</h1>
			<LoginForm login={props.login} logout={props.logout} {...props}/>
		</div>
	</div>
)
}

//////////////////////////////////////////////////////////3 компонента
let mapStateToProps = (state) =>{
  return{
    isAuth: state.auth.isAuth,
    error: state.auth.error,

  }
}

export default connect(mapStateToProps,{login, logout})(Login);