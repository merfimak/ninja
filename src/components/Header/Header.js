import  classes from './Header.module.css';
import { NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
<header className={classes.header}>
           <div className={classes.logo}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png" alt=""></img>
           </div>

<div>{props.isAuth ? props.login : 
	<div className={classes.login_block}>
           		<NavLink to={'/login'}>login</NavLink>
           </div>}
</div>

           

          </header> 
  	  )
}


export default Header;