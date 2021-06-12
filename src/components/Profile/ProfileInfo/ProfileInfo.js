import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import prelouder from '../../../assets/images/prelouder.gif';
const ProfileInfo = (props) => {
	if(!props.profile){
		return (
			<div><img src={prelouder} /></div>
			)

				}else{
		  return (
  
              <div className={classes.profile_info}>
                <div className={classes.content_img}><img src={props.profile.photos.large} alt=""></img></div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

            
          <div className={classes.ava_descriptioin}><span>id</span>  -  {props.profile.userId}</div>
          <div className={classes.ava_descriptioin}><span>name</span>  -   {props.profile.fullName}</div>
         <div className={classes.ava_descriptioin}><span>aboutMe</span>  -  {props.profile.aboutMe}</div>
              </div>

            
   )
	}






}


export default ProfileInfo;