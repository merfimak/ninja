import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

	let mapStateToPropsForRedirect = (state) =>({
		isAuth: state.auth.isAuth
	});

export const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component{
		render() {
			if(!this.props.isAuth) return <Redirect to={"/Login"} />

			return <Component {...this.props} />
		}
	}

//ебашим один хок в другом что бы закидывать в него инфу из isAuth
let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);


	return  ConnectAuthRedirectComponent;
}









