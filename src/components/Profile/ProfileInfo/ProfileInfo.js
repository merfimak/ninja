import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import prelouder from '../../../assets/images/prelouder.gif';
import zaglushka from '../../../assets/images/zaglushka.jpg';
const ProfileInfo = (props) => {

const onMainPhotoSelected = (e) =>{
if(e.target.files.length){
  props.savePhoto(e.target.files[0])
}
}



	if(!props.profile){
		return (
			<div><img src={prelouder} /></div>
			)

				}else{
		  return (
  
      <div className={classes.profile_info}>
        <div className={classes.content_img}><img src={props.profile.photos.large || zaglushka} alt=""></img></div>
          {props.isOwner ? <div>поменять фотку<input type="file" onChange={onMainPhotoSelected} multiple /></div> : '' }


    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

    
  <div className={classes.ava_descriptioin}><span>id</span>  -  {props.profile.userId}</div>
  <div className={classes.ava_descriptioin}><span>name</span>  -   {props.profile.fullName}</div>
 <div className={classes.ava_descriptioin}><span>aboutMe</span>  -  {props.profile.aboutMe}</div>
 <div className={classes.ava_descriptioin}><span>lookingForAJobDescription</span>  -  {props.profile.lookingForAJobDescription}</div>
 <div className={classes.ava_descriptioin}><span>github</span>  -  {props.profile.contacts.github}</div>
 <div className={classes.ava_descriptioin}><span>instagram</span>  -  {props.profile.contacts.instagram}</div>
 <div className={classes.ava_descriptioin}><span>ищу работу</span>  -  {props.profile.lookingForAJob ? "ага" : "неа"}</div>
      </div>

            
   )
	}






}


export default ProfileInfo;