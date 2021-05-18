import classes from './ProfileInfo.module.css';
import Prelouder from '../../common/Prelouder/Prelouder.js'
const ProfileInfo = (props) => {
	if(!props.profile){
		return (
			<div>тут должен быть прелудер</div>
			)

				}else{
		  return (
  
              <div className={classes.profile_info}>

                <div className={classes.content_img}><img src="props.profile.photos.large" alt=""></img></div>
              <div className={classes.ava_descriptioin}>ava_descriptioin</div>
            

            
          <div className={classes.ava_descriptioin}> {props.profile.userId}</div>
          <div className={classes.ava_descriptioin}> {props.profile.fullName}</div>
         <div className={classes.ava_descriptioin}>  {props.profile.aboutMe}</div>
              </div>

            
   )
	}






}


export default ProfileInfo;