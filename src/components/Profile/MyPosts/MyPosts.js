import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostActionCreator} from '../../../redux/prpofile_reducer.js';
import {addPostActionCreator} from '../../../redux/prpofile_reducer.js';






const MyPosts = (props) => {



let newPostElem = React.createRef();

let addPost = () =>{
 props.dispatch(addPostActionCreator());
};

let onPostChange = () => {
let text = newPostElem.current.value;
props.dispatch(updateNewPostActionCreator(text));

}
//onChange - срабатывате при изменении

let postsElements = props.postData.map( elem => <Post massage={elem.massage} like={elem.likesCount}/>)

  return (
  
      <div className={classes.my_posts}>

      <h3> My posts</h3>
        <div className={classes.new_post}>

          <div>
          <textarea onChange={onPostChange} ref={newPostElem} value={props.newPostText}/>
          </div>

          <button onClick={ addPost }>Add post</button>
      </div>




          <div className={classes.posts}>
            {postsElements}
            
          </div>

      </div>

    
   )
}


export default MyPosts;