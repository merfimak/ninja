import React from 'react';
import MyPosts from './MyPosts';
import {updateNewPostActionCreator} from '../../../redux/prpofile_reducer.js';
import {addPostActionCreator} from '../../../redux/prpofile_reducer.js';
import { connect } from 'react-redux';



// эта функция передает свойства
let mapStateToProps = (state) =>{
	return{
		profilePage: state.profilePage

	}
}
//эта функция передает функции которые мы будем потом использовать в призентациооной компоненте
let mapDispatchToProps = (dispatch) =>{
	return{
		onPostChange:  (text) => {
			dispatch(updateNewPostActionCreator(text));
		},
		onAddPost: () => {
			dispatch(addPostActionCreator());
		}

		
	}
}








const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;