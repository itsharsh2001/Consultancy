import {useState, useEffect} from 'react'
import classes from "./BottomHeader.module.css";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import Link from "next/link";
import { IconButton } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import StartingNewBusiness from '../components/dropdownComponents/StartingNewBusiness'
import IntellectualProperty from '../components/dropdownComponents/IntellectualProperty'
import ChangeBusiness from '../components/dropdownComponents/ChangeBusiness'
import RegistrationFilling from '../components/dropdownComponents/RegistrationFilling'
import LegalDrafting from '../components/dropdownComponents/LegalDrafting'
import Accounting from '../components/dropdownComponents/Accounting'

function BottomHeader() {
  const [isDropDownClicked1, setIsDropDownClicked1] = useState(false)
  const dropDownClickHandler1 = () => {
    setIsDropDownClicked1((prevDropDownClicked)=>{return !prevDropDownClicked});
    setIsDropDownClicked2(false);
    setIsDropDownClicked3(false);
    setIsDropDownClicked4(false);
    setIsDropDownClicked5(false);
    setIsDropDownClicked6(false);
  }

  const [isDropDownClicked2, setIsDropDownClicked2] = useState(false)
  const dropDownClickHandler2 = () => {
    setIsDropDownClicked2((prevDropDownClicked)=>{return !prevDropDownClicked});
    setIsDropDownClicked1(false);
    setIsDropDownClicked3(false);
    setIsDropDownClicked4(false);
    setIsDropDownClicked5(false);
    setIsDropDownClicked6(false);
  }
  const [isDropDownClicked3, setIsDropDownClicked3] = useState(false)
  const dropDownClickHandler3 = () => {
    setIsDropDownClicked3((prevDropDownClicked)=>{return !prevDropDownClicked});
    setIsDropDownClicked2(false);
    setIsDropDownClicked1(false);
    setIsDropDownClicked4(false);
    setIsDropDownClicked5(false);
    setIsDropDownClicked6(false);
  }
  const [isDropDownClicked4, setIsDropDownClicked4] = useState(false)
  const dropDownClickHandler4 = () => {
    setIsDropDownClicked4((prevDropDownClicked)=>{return !prevDropDownClicked});
    setIsDropDownClicked2(false);
    setIsDropDownClicked3(false);
    setIsDropDownClicked1(false);
    setIsDropDownClicked5(false);
    setIsDropDownClicked6(false);
  }
  const [isDropDownClicked5, setIsDropDownClicked5] = useState(false)
  const dropDownClickHandler5 = () => {
    setIsDropDownClicked5((prevDropDownClicked)=>{return !prevDropDownClicked});
    setIsDropDownClicked2(false);
    setIsDropDownClicked3(false);
    setIsDropDownClicked4(false);
    setIsDropDownClicked1(false);
    setIsDropDownClicked6(false);
  }
  const [isDropDownClicked6, setIsDropDownClicked6] = useState(false)
  const dropDownClickHandler6 = () => {
    setIsDropDownClicked6((prevDropDownClicked)=>{return !prevDropDownClicked});
    setIsDropDownClicked2(false);
    setIsDropDownClicked3(false);
    setIsDropDownClicked4(false);
    setIsDropDownClicked5(false);
    setIsDropDownClicked1(false);
  }

  
  const mouseOut1 = () => {
    setIsDropDownClicked1(false);
  }
  const mouseOut2 = () => {
    setIsDropDownClicked2(false);
  }
  const mouseOut3 = () => {
    setIsDropDownClicked3(false);
  }
  const mouseOut4 = () => {
    setIsDropDownClicked4(false);
  }
  const mouseOut5 = () => {
    setIsDropDownClicked5(false);
  }
  const mouseOut6 = () => {
    setIsDropDownClicked6(false);
  }

  // const [scrolled,setScrolled]=useState(false);

  // const handleScroll=() => {
  //     const offset=window.scrollY;
  //     console.log(offset)
  //     if(offset > 63.2 ){
  //       setScrolled(true);
  //     }
  //     else{
  //       setScrolled(false);
  //     }
  //   }
  
  //   useEffect(() => {
  //     window.addEventListener('scroll',handleScroll)
  //   })

  return (
    <>
    <header id="navbar" className={`${classes.header} `}>
      <div className={classes.logo}>
        <Link href="/">
          <img src='/logo.png' width="250%"></img>
        </Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="">Starting a New Business</Link>
            <ArrowDropDownIcon className={classes.iconarrow}
              fontSize="large"
              style={{ fill: "#ffb403" }}
              onClick={dropDownClickHandler1}
            />
          </li>
          <li>
            <Link href="">Intellectual Property</Link>
            <ArrowDropDownIcon className={classes.iconarrow}
              fontSize="large"
              style={{ fill: "#ffb403" }}
              onClick={dropDownClickHandler2}
            />
          </li>
          <li>
            <Link href="">Change in Business</Link>
            <ArrowDropDownIcon className={classes.iconarrow}
              fontSize="large"
              style={{ fill: "#ffb403" }}
              onClick={dropDownClickHandler3}
            />
          </li>
          <li>
            <Link href="">Registration & Filling</Link>
            <ArrowDropDownIcon className={classes.iconarrow}
              fontSize="large"
              style={{ fill: "#ffb403" }}
              onClick={dropDownClickHandler4}
            />
          </li>
          <li>
            <Link href="">Legal Drafting</Link>
            <ArrowDropDownIcon className={classes.iconarrow}
              fontSize="large"
              style={{ fill: "#ffb403" }}
              onClick={dropDownClickHandler5}
            />
          </li>
          <li>
            <Link href="">
              Accounting & Compliance
            </Link>
            
              <ArrowDropDownIcon
                fontSize="large" className={classes.iconarrow}
                style={{ fill: "#ffb403"}}
                onClick={dropDownClickHandler6}
              />
            
          </li>
        </ul>
      </nav>
    </header>
    {isDropDownClicked1 && <StartingNewBusiness mouseOutHandler={mouseOut1} />}
    {isDropDownClicked2 && <IntellectualProperty mouseOutHandler={mouseOut2} />}
    {isDropDownClicked3 && <ChangeBusiness mouseOutHandler={mouseOut3} />}
    {isDropDownClicked4 && <RegistrationFilling mouseOutHandler={mouseOut4} />}
    {isDropDownClicked5 && <LegalDrafting mouseOutHandler={mouseOut5} />}
    {isDropDownClicked6 && <Accounting mouseOutHandler={mouseOut6} />}
    </>
  );
}

export default BottomHeader;
