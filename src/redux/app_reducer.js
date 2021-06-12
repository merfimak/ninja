import {getAuthUserData } from './auth_reducer.js';




const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
      initialized: false,

}

const appReducer = (state = initialState, action) => {
//урок 47 12 мин, обьяснение. делаем копию обьекта с помощью ...
switch (action.type) {
  case INITIALIZED_SUCCESS:{
				return {//делаем глубинную копию
          ...state,//даже если нам надо сделать initialized: true, мы все равно делаем копию всего state, так как в будущем при расширении приложения может что то еще добавиться 
          initialized: true,
        }
  }

  default:
    return state;
}

}



export const initializedSeccessCreator = () =>{
  return{
    type: INITIALIZED_SUCCESS,
  }
}



//это санк криэтер
export const initializeApp = () =>{

  return(dispatch) =>{// a это санка
      let promise = dispatch(getAuthUserData());
      //80 ur 20 min
      Promise.all([promise])
      .then( () => {
        dispatch(initializedSeccessCreator());
   })
}
}






export default appReducer;