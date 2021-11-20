import classes from "./HamBurger.module.css";
import {useState} from 'react'
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './Menu'
import Link from 'next/link';

function HamBurger() {
  const [isClicked, setIsClicked] = useState(false)  
  const menuClickHandler = () => {
    setIsClicked((prevIsClicked)=>{return !prevIsClicked})
  }
  return (
      <>
    <div className={classes.hamburger}>
      <div className={classes.logo}>
        <Link href="/">
        <img src='/logo.png' className={classes.logo} width="60%"></img>
        </Link>
      </div>
      <MenuIcon className={classes.burger} fontSize="large" style={{ fill: "#FFC43B" }} onClick={menuClickHandler}/>
    </div>
    {isClicked && <Menu />}
</>
  );
}

export default HamBurger;
