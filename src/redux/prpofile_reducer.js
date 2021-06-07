import {usersAPI} from '../api/api.js';
import {profileAPI} from '../api/api.js';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  postData: [
        {id: 1, massage:"hellow, i love porn", likesCount: 12},
        {id: 2, massage:"kolj ebanashka", likesCount: 3},
      ],
      newPostText: "newPostText---perdole",
      profile: null,
      status: ""

}

const profileReducer = (state = initialState, action) => {
  
//урок 47 12 мин, обьяснение. делаем копию обьекта с помощью ...
switch (action.type) {
  case ADD_POST:{
    let newPost = {
				id: 3,
				massage: state.newPostText,
				likesCount: 4
			};

      return {//делаем глубинную копию
        ...state,
        postData:[...state.postData, newPost],
        newPostText: ''
      }

   }
  case UPDATE_NEW_POST_TEXT:{
   // console.log(state);
				return {//делаем глубинную копию
          ...state,
          newPostText:action.newText
        }
  }




    case SET_USER_PROFILE:{
   // console.log(state);
        return {//делаем глубинную копию
          ...state,
          profile:action.profile
        }
  }

     case SET_STATUS:{
   // console.log(state);
        return {//делаем глубинную копию
          ...state,
          status:action.status
        }
  }



  default:
    return state;
}






}



//action creator импортим его в MyPosts.js
export const addPostActionCreator = () =>{
  return{
    type: ADD_POST,
  }
}
//action creator импортим его в MyPosts.js
export const updateNewPostActionCreator = (text) =>{
  return{
    type: UPDATE_NEW_POST_TEXT,
    newText:text
  }
}

export const setUsersProfile = (profile) =>{
  return{
    type: SET_USER_PROFILE,
    profile:profile
  }
}

export const setStatus = (status) =>{
  return{
    type: SET_STATUS,
    status:status
  }
}
//это санка
export const getUsersProfile = (userId) =>{
  return(dispatch) =>{
   usersAPI.getProfile(userId).then(response =>{
          dispatch(setUsersProfile(response.data));
      })
  }
}

//это санка
export const getStatus = (userId) =>{
  return(dispatch) =>{
   profileAPI.getStatus(userId).then(response =>{
          dispatch(setStatus(response.data));
      })
  }
}

//это санка
export const updateStatus = (status) =>{
  return(dispatch) =>{
   profileAPI.updateStatus(status).then(response =>{
    if(response.data.resultCode === 0 ){
      dispatch(setStatus(status));
    }
          
      })
  }
}

export default profileReducer;