import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';






const MyPosts = React.memo(props => {


//console.log(props)
let newPostElem = React.createRef();

let addPost = () =>{
 props.onAddPost();
};

let updateNewPost = () => {
let text = newPostElem.current.value;
props.onPostChange(text);

}
//onChange - срабатывате при изменении

let postsElements = props.profilePage.postData.map( elem => <Post massage={elem.massage} like={elem.likesCount}/>)

  return (
  
      <div className={classes.my_posts}>

      <h3> My posts</h3>
        <div className={classes.new_post}>

          <div>
          <textarea onChange={updateNewPost} ref={newPostElem} value={props.profilePage.newPostText}/>
          </div>

          <button onClick={ addPost }>Add post</button>
      </div>




          <div className={classes.posts}>
            {postsElements}
            
          </div>

      </div>

    
   )
})


export default MyPosts;