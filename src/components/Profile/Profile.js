import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
	
  return (
   <div>
 
              <ProfileInfo profile={props.profile} isOwner={props.isOwner} status={props.status} savePhoto={props.savePhoto} updateStatus={props.updateStatus} />
          
            <MyPostsContainer store={props.store}/>
           

            </div>
   )
}


export default Profile;