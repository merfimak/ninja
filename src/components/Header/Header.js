import  classes from './Header.module.css';

const Header = () => {
  return (
<header className={classes.header}>
           <div className={classes.logo}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png" alt=""></img>
           </div>
          </header> 
  	  )
}


export default Header;