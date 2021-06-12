import classes from './ProfileInfo.module.css';
import React from 'react';


class ProfileStatus extends React.Component{

		constructor(props) {
	    super(props);
	  }


//у классовой компоненты есть локальный state
state = {
	editMode: false,
	status: this.props.status//засунули глобальный state  в локальный
}


activateEditMod = () => {
	//локальный state меняется только через функцию this.setState которую он взял из React.Component
	//работает асинхронно
	this.setState({
		editMode: true
	})
}

deActivateEditMod = () => {
	//локальный state меняется только через функцию this.setState которую он взял из React.Component
	//работает асинхронно
	this.setState({
		editMode: false
	});
	this.props.updateStatus(this.state.status);//когда фокус снимаеться с инпута то сразу отправиться новый статус в базу
}

onStatusChange = (e) => {
	this.setState({
		status: e.currentTarget.value
	});


}
//сработает когда либо пропсы изменяться либо локальный стейт измениться
componentDidUpdate(prevProps, prevState){
	if(prevProps.status !== this.props.status){
		this.setState({
			status: this.props.status
		})
	}
}


render(){
		return (
			<div className={classes.profile_status}>
			{console.log(this.props.status)}
				{!this.state.editMode &&
			    	<div>
			    		<span onDoubleClick={ this.activateEditMod  }>{this.props.status || "_____"}</span>
			    	</div> 
		    	}
		    	{this.state.editMode &&
			    	<div>
			    		<input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deActivateEditMod  } type="text" value={this.state.status} />
			    	</div> 
		    	}
		     </div>       
   )
	

}




}


export default ProfileStatus;