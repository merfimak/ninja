import classes from './Post.module.css';

const Post = (props) => {
  return (
  

      <div className={classes.post}>
      <div className={classes.post_ava}><img src="img/post_ava.jpg" alt=""></img></div>
      
      {props.massage}

      


      <div className={classes.like}>like: {props.like} </div>
      </div>
  

            
   )
}


export default Post;