
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
      users: []
}




const usersReduser = (state = initialState, action) => {
//урок 47 12 мин, обьяснение. делаем копию обьекта с помощью ...


switch (action.type) {
      case FOLLOW:
       return {
        ...state,//делаем копию state
          users: state.users.map( u =>{//проходимся по всем элементам массива
            if(u.id === action.userID){//человек нажимает кнопку на какомто юзере, его id приходит в action.
              return {...u, followed: true};
            }
            return u;
          })
       };
      break;

       case UNFOLLOW:
        return {
        ...state,//делаем копию state
          users: state.users.map( u =>{//проходимся по всем элементам массива
            if(u.id === action.userID){
              return {...u, followed: false};
            }
            return u;
          })
       };
      break;

       case SET_USERS:
        return {
        ...state,
            users: [...state.users, ...action.users]//засовываем в users масив из state(делаем копию глубинную) и зсовываем тудаже юзеров из action
       };
      break;

      default:
       return state;
    }
	
}




//action creator импортим его в Users.js
export const followActionCreator = (userID) =>{
  return{
    type: FOLLOW,
    userID
  }
}

//action creator импортим его в Users.js
export const unFollowActionCreator = (userID) =>{
  return{
    type: UNFOLLOW,
    userID
  }
}

export const setUsersActionCreator = (users) =>{
  return{
    type: SET_USERS,
    users
  }
}

export default usersReduser;