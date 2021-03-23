
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';



const profileReducer = (state, action) => {

switch (action.type) {
  case ADD_POST:
    let newPost = {
				id: 3,
				massage: state.newPostText,
				likesCount: 4
			};
			
			state.postData.push(newPost);
			state.newPostText = '';
				return state;
    break;
  case UPDATE_NEW_POST_TEXT:
    console.log(state)
			state.newPostText = action.newText;
				return state;
    break;
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