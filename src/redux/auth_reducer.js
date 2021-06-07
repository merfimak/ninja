import {authAPI} from '../api/api.js';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
      id: null,
      email: null,
      login: null,
      isAuth: false

}

const authReducer = (state = initialState, action) => {
//урок 47 12 мин, обьяснение. делаем копию обьекта с помощью ...
switch (action.type) {
  case SET_USER_DATA:{
				return {//делаем глубинную копию
          ...state,
         ...action.data,
          isAuth: true
        }
  }
  default:
    return state;
}

}



export const setAuthUserDataCreator = (data) =>{
  return{
    type: SET_USER_DATA,
    data: data
  }
}

//это санка
export const getAuthUserData = () =>{

  return(dispatch) =>{
     authAPI.me().then(response =>{
      console.log(response.data.data)
            if(response.data.resultCode === 0){
              dispatch(setAuthUserDataCreator(response.data.data))
            }
        })
   }
}





export default authReducer;