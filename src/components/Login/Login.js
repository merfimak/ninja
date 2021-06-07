import React from 'react';
import classes from './Login.module.css'

let LoginForm = (props) => {

return(
	<form action="">
		<div>
			<input className={classes.login_input} placeholder={"Login"} />
		</div>
		<div>
			<input className={classes.login_input} placeholder={"Pass"} />
		</div>
		<div>
			<input type={"checkbox"} /> remember me
		</div>
		<div>
			<button>Login</button>
		</div>
	</form>
)
}


let Login = (props) => {

return(
	<div>
		 <div className={classes.login_container}>
			<h1  className={classes.login_title}>Login</h1>
			<LoginForm />
		</div>
	</div>
)
}

export default Login;