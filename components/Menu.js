import classes from "./Menu.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useState } from "react";
import Accounting from "../components/mobileDropdownComponents/Accounting";
import ChangeBusiness from "../components/mobileDropdownComponents/ChangeBusiness";
import Intellectual from "../components/mobileDropdownComponents/Intellectual";
import Legal from "../components/mobileDropdownComponents/Legal";
import Registration from "../components/mobileDropdownComponents/Registration";
import StartingBusiness from "../components/mobileDropdownComponents/StartingBusiness";

function Menu() {
  const [startingBusiness, setStartingBusiness] = useState(false);
  const [intellectual, setIntellectual] = useState(false);
  const [changeBusiness, setChangeBusiness] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [legal, setLegal] = useState(false);
  const [accounting, setAccounting] = useState(false);

  const clickHandler1 = () => {
    setStartingBusiness((prevStartingBusiness) => {
      return !prevStartingBusiness;
    });
    setIntellectual(false);
    setChangeBusiness(false);
    setRegistration(false);
    setLegal(false);
    setAccounting(false);
  };
  const clickHandler2 = () => {
    setStartingBusiness(false);
    setIntellectual((prevIntellectual) => {
      return !prevIntellectual;
    });
    setChangeBusiness(false);
    setRegistration(false);
    setLegal(false);
    setAccounting(false);
  };
  const clickHandler3 = () => {
    setStartingBusiness(false);
    setIntellectual(false);
    setChangeBusiness((prevChangeBusiness) => {
      return !prevChangeBusiness;
    });
    setRegistration(false);
    setLegal(false);
    setAccounting(false);
  };
  const clickHandler4 = () => {
    setStartingBusiness(false);
    setIntellectual(false);
    setChangeBusiness(false);
    setRegistration((prevRegistration) => {
      return !prevRegistration;
    });
    setLegal(false);
    setAccounting(false);
  };
  const clickHandler5 = () => {
    setStartingBusiness(false);
    setIntellectual(false);
    setChangeBusiness(false);
    setRegistration(false);
    setLegal((prevLegal) => {
      return !prevLegal;
    });
    setAccounting(false);
  };
  const clickHandler6 = () => {
    setStartingBusiness(false);
    setIntellectual(false);
    setChangeBusiness(false);
    setRegistration(false);
    setLegal(false);
    setAccounting((prevAccounting) => {
      return !prevAccounting;
    });
  };

  return (
    <ul className={classes.menu}>
      <hr />
      <li onClick={clickHandler1}>
        <a href="#"> Starting a New Business</a>{" "}
        <ArrowDropDownIcon style={{ fill: "#ffb403" }} />{" "}
      </li>
      <hr />
      {startingBusiness && <StartingBusiness />}
      <li onClick={clickHandler2}>
        <a href="#">Intellectual Property</a>{" "}
        <ArrowDropDownIcon style={{ fill: "#ffb403" }} />{" "}
      </li>
      <hr />
      {intellectual && <Intellectual />}
      <li onClick={clickHandler3}>
        <a href="#">Change in Business</a>{" "}
        <ArrowDropDownIcon style={{ fill: "#ffb403" }} />{" "}
      </li>
      <hr />
      {changeBusiness && <ChangeBusiness />}
      <li onClick={clickHandler4}>
        <a href="#">Registration & Filling</a>{" "}
        <ArrowDropDownIcon style={{ fill: "#ffb403" }} />{" "}
      </li>
      <hr />
      {registration && <Registration />}
      <li onClick={clickHandler5}>
        <a href="#">Legal Drafting</a>{" "}
        <ArrowDropDownIcon style={{ fill: "#ffb403" }} />{" "}
      </li>
      <hr />
      {legal && <Legal />}
      <li onClick={clickHandler6}>
        <a href="#">Accounting & Compliance</a>{" "}
        <ArrowDropDownIcon style={{ fill: "#ffb403" }} />{" "}
      </li>
      <hr />
      {accounting && <Accounting />}
    </ul>
  );
}

export default Menu;
