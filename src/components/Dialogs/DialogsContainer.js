import React from 'react';
import { NavLink} from 'react-router-dom';
import {sendMessageCreator} from '../../redux/dialog_reduser.js';
import {updateNewMessageCreator} from '../../redux/dialog_reduser.js';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';




// эта функция передает свойства
let mapStateToProps = (state) =>{
	return{
		massagesPage: state.massagesPage,
	}
}
//эта функция передает функции которые мы будем потом использовать в призентациооной компоненте
let mapDispatchToProps = (dispatch) =>{
	return{
		onMessageChange:  (body) => {
			dispatch(updateNewMessageCreator(body));
		},
		onAddMassag: (massage) => {
			dispatch(sendMessageCreator(massage));
		}

		
	}
}



//это хок который проверят авторизацию
//let AuthRedirectComponent = withAuthRedirect(Dialogs)

//connect внутри использует subscribe, он следит отдельно для этой компоненты когда state измениться
// но сам state не изменяеться потому что мы менять его неможем, мы делаем копию, и он следит когда появится новая копия и тогда уже перерисовывается
//const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default compose(
	connect(mapStateToProps,mapDispatchToProps),
	withAuthRedirect
	)(Dialogs);