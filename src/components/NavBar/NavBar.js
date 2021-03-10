
import  classes from './NavBar.module.css';
import { NavLink} from 'react-router-dom';

const NavBar = () => {
  return (

  <nav className={classes.nav}>

             <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active} >profile</NavLink>
             </div>
             <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>massages</NavLink>
             </div>
             <div className={classes.item}>
                <NavLink to="#3">news</NavLink>
             </div>
             <div className={classes.item}>
                <NavLink to="#4">music</NavLink>
             </div>
             <div className={classes.item}>
                <NavLink to="#4">settings</NavLink>
             </div>
            </nav>
   )
}


export default NavBar;