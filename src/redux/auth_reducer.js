import {authAPI} from '../api/api.js';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR_TO_LOGIN_FORM = 'SET_ERROR_TO_LOGIN_FORM';

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
          isAuth: action.isAuth
        }
  }

    case SET_ERROR_TO_LOGIN_FORM:{
        return {//делаем глубинную копию
          ...state,
          error: action.error
        }
  }
  default:
    return state;
}

}



export const setAuthUserDataCreator = (data, isAuth) =>{
  return{
    type: SET_USER_DATA,
    data: data,
    isAuth: isAuth
  }
}


export const setErrorToLoginForm = (error) =>{
  return{
    type: SET_ERROR_TO_LOGIN_FORM,
    error: error
  }
}

//это санка
export const getAuthUserData = () =>  async (dispatch) =>{
 let response =  await authAPI.me();

            if(response.data.resultCode === 0){
              dispatch(setAuthUserDataCreator(response.data.data, true))
            }
        
   }



//это санка
export const login = (email, password, rememberMe) =>{

  return async (dispatch) =>{
     let response =  await authAPI.login(email, password, rememberMe)
      //console.log(response.data.resultCode)
            if(response.data.resultCode === 0){
              dispatch(getAuthUserData())
            }else{
              console.log(response.data.messages)
             dispatch(setErrorToLoginForm(response.data.messages))//response.data.messages[0]
            }
        
   }
}

//это санка
export const logout = () =>{

  return(dispatch) =>{
     authAPI.logout().then(response =>{
            if(response.data.resultCode === 0){
              dispatch(setAuthUserDataCreator({}, false))
            }
        })
   }
}


export default authReducer;