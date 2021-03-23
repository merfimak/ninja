
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogReducer = (state, action) => {



switch (action.type) {
  case UPDATE_NEW_MESSAGE_BODY:
  state.NewMessageBody = action.body;
  return state;
    break;
  case SEND_MESSAGE:
   let body = state.NewMessageBody;
			state.massagesData.push({id: 6, massage:body});
			state.NewMessageBody = '';
			return state;
    break;
  default:
   return state;
}



	
}




//action creator импортим его в Dialogs.js
export const sendMessageCreator = () =>{
  return{
    type: SEND_MESSAGE,
  }
}
//action creator импортим его в Dialogs.js
export const updateNewMessageCreator = (body) =>{
  return{
    type: UPDATE_NEW_MESSAGE_BODY,
    body:body
  }
}

export default dialogReducer;