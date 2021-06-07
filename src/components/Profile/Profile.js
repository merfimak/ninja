import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
	
  return (
   <div>
   {console.log(props)}
              <ProfileInfo profile={props.profile}  status={props.status} updateStatus={props.updateStatus} />
          
            <MyPostsContainer store={props.store}/>
           

            </div>
   )
}


export default Profile;