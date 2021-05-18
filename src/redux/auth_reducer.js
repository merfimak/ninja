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


export default authReducer;