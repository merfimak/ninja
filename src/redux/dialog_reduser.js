
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
      massagesData: [
        {id: 1, massage:"hi"},
        {id: 2, massage:"hui"},
        {id: 3, massage:"hoi"},
        {id: 3, massage:"hei"},
      ],
      dialogsData: [
        {id: 1, name:"Pasha"},
        {id: 2, name:"Dima"},
        {id: 3, name:"Vova"},
        {id: 4, name:"Sasha"}
      ],
      NewMessageBody:'',
}




const dialogReducer = (state = initialState, action) => {
//урок 47 12 мин, обьяснение. делаем копию обьекта с помощью ...


switch (action.type) {

  case UPDATE_NEW_MESSAGE_BODY:
     return {...state,//делаем глубинную копию
                 NewMessageBody: action.body
     };
    break;



  case SEND_MESSAGE:
  let body = action.massage;
  return {...state,//делаем глубинную копию
                 NewMessageBody: '',
                massagesData: [...state.massagesData, {id: 6, massage:body}],//по старому тут так писалось stateCopy.massagesData.push({id: 6, massage:body});
                
  }
    break;



  default:
   return state;
}



	
}




//action creator импортим его в Dialogs.js
export const sendMessageCreator = (massage) =>{
  //console.log(massage)
  return{
    type: SEND_MESSAGE,
    massage: massage
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