import classes from './Intellectual.module.css'
import { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Trademark from '../mobileDropdownComponents/Intellectual/Trademark'
import Patent from '../mobileDropdownComponents/Intellectual/Patent'
import Copyright from '../mobileDropdownComponents/Intellectual/Copyright'

export default function Intellectual() {
    const [trademark, setTrademark] = useState(false)
    const [patent, setPatent] = useState(false)
    const [copyright, setCopyright] = useState(false)

    const clickHandler1 = () => {
        setTrademark((prevTrademark)=>{return !prevTrademark});
        setPatent(false);
        setCopyright(false);
    };
    const clickHandler2 = () => {
        setTrademark(false);
        setPatent((prevPatent)=>{return !prevPatent});
        setCopyright(false);
    };
    const clickHandler3 = () => {
        setTrademark(false);
        setPatent(false);
        setCopyright((prevCopyright)=>{return !prevCopyright});
    };
    return (
        <ul className={classes.menu}>
            <li onClick={clickHandler1}><a href="#">Trademark</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {trademark && <Trademark />}

            <li onClick={clickHandler2}><a href="#">Patent</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {patent && <Patent />}

            <li onClick={clickHandler3}><a href="#">Copyright</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {copyright && <Copyright />}
        </ul>
    )
}
