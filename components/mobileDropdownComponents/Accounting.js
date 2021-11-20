import classes from './Accounting.module.css'
import { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CorporateCompliances from '../mobileDropdownComponents/AccountingComponents/CorporateCompliances'
import AccountingChota from '../mobileDropdownComponents/AccountingComponents/Accounting'

export default function Accounting() {
    const [corporateCompliances, setCorporateCompliances] = useState(false);
    const [accountingChota, setAccountingChota] = useState(false);

    const clickHandler1 = () => {
        setCorporateCompliances((prevCorporateCompliances)=>{return !prevCorporateCompliances});
        setAccountingChota(false);
    };
    const clickHandler2 = () => {
        setAccountingChota((prevAccountingChota)=>{return !prevAccountingChota});
        setCorporateCompliances(false);
    };
    return (
        <ul className={classes.menu}>
            <li onClick={clickHandler1}><a href="#">Corporate Compliances</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {corporateCompliances && <CorporateCompliances />}

            <li onClick={clickHandler2}><a href="#">Accounting</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {accountingChota && <AccountingChota />}
        </ul>
    )
}
