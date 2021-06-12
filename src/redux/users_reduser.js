import {usersAPI} from '../api/api.js';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';
const   TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const   TOGGLE_IS_FOLOWING_PROGRESS = 'TOGGLE_IS_FOLOWING_PROGRESS';

let initialState = {
      users: [],
      pageSize: 5,
      totalUsersCounter: 0,
      currentPage: 1,
      isFetching: false,
      followingInProgress: []
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
            users: [...action.users]//засовываем в users масив из state(делаем копию глубинную) и зсовываем тудаже юзеров из action
       };
      break;
      case SET_CURRENT_PAGE:
        return {
        ...state,
            currentPage: action.currentPage
       };
      break;
       case TOTAL_COUNT:
        return {
        ...state,
            totalUsersCounter: action.totalCount
       };
      break;
       case TOGGLE_IS_FETCHING:
        return {
        ...state,
            isFetching: action.isFetching
       };
        case TOGGLE_IS_FOLOWING_PROGRESS:
        return {
        ...state,
            followingInProgress: action.isFetching
             ? [...state.followingInProgress, action.userId]
             : state.followingInProgress.filter(id=>id != action.userId)
       };
      break;
      default:
       return state;
    }
	
}




//action creator импортим его в Users.js
export const followSuccess = (userID) =>{
  return{
    type: FOLLOW,
    userID
  }
}

//action creator импортим его в Users.js
export const unFollowSuccess = (userID) =>{
  return{
    type: UNFOLLOW,
    userID
  }
}

export const setUsers = (users) =>{
  return{
    type: SET_USERS,
    users
  }
}

export const setCurrentPage = (currentPage) =>{
  return{
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

export const setTotalUsersCount = (totalCount) =>{
  return{
    type: TOTAL_COUNT,
    totalCount
  }
}

export const toggleFeching = (isFetching) =>{
  return{
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

export const toggleFollowingInProgress = (isFetching, userId) =>{
  return{
    type: TOGGLE_IS_FOLOWING_PROGRESS,
    isFetching,
    userId
  }
}


//это санка
export const getUsers = (currentPage,pageSize) =>{

  return (dispatch) =>{
    dispatch(toggleFeching(true));
    dispatch(setCurrentPage(currentPage));
         usersAPI.getUsers(currentPage, pageSize).then(data =>{
            dispatch(toggleFeching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        })
  }
}



//это санка
export const follow = (userId) =>{

  return (dispatch) =>{
    dispatch(toggleFollowingInProgress(true, userId))
           usersAPI.follow(userId).then(data =>{
                if(data.resultCode === 0){
                  dispatch(followSuccess(userId))
                }
              dispatch(toggleFollowingInProgress(false,userId))
            })
  }
}


//это санка
export const unfollow = (userId) =>{

  return (dispatch) =>{
    dispatch(toggleFollowingInProgress(true, userId))
           usersAPI.unFollow(userId).then(data =>{
                if(data.resultCode === 0){
                  dispatch(unFollowSuccess(userId))
                }
              dispatch(toggleFollowingInProgress(false,userId))
            })
  }
}


export default usersReduser;