
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  postData: [
        {id: 1, massage:"hellow, i love porn", likesCount: 12},
        {id: 2, massage:"kolj ebanashka", likesCount: 3},
      ],
      newPostText: "newPostText---perdole"
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
    console.log(state);
				return {//делаем глубинную копию
          ...state,
          newPostText:action.newText
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

export default profileReducer;