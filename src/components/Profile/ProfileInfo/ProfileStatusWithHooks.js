import classes from './ProfileInfo.module.css';
import React, {useState, useEffect} from 'react';


const ProfileStatusWithHooks = (props) => {

//локальный state	
//let stateWithSetState = useState(false); //возваращает массив из двух элиментов
//let editMode = stateWithSetState[0];// первый это значение которое в стейте хранитсья(в данном стлучаи false) 
//let setEditMode = stateWithSetState[1];// второй это функция с помощью которой мы можем этот стейт изменять

let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status);


//сработает когда дом будет построен, типо как componentDidMount в классовой компоненте
useEffect(  () => (
setStatus(props.status)
	), [props.status]// перерисовываем только тогда когда меняеться статус в пропсах
)





const activateEditMod = () => {
	setEditMode(true)
}
const deActivateEditMod = () => {
	setEditMode(false)
props.updateStatus(status);//когда фокус снимаеться с инпута то сразу отправиться новый статус в базу
}
const onStatusChange = (e) => {
	setStatus(e.currentTarget.value)
}


		return (
			<div className={classes.profile_status}>
		
				{!editMode &&
			    	<div>
			    		<span  onDoubleClick={ activateEditMod  }>{ props.status || "_____"}</span>
			    	</div> 
		    	}
		    	{editMode &&
			    	<div>
			    		<input onChange={ onStatusChange}  autoFocus={true}  type="text"  onBlur={ deActivateEditMod  }  value={status} />
			    	</div> 
		    	}
		     </div>       
   )
	

}







export default ProfileStatusWithHooks;