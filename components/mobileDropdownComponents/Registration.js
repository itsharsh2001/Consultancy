import classes from './Registration.module.css'
import { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import GovernmentRegistration from '../mobileDropdownComponents/Registration/GovernmentRegistration'
import TaxFilling from '../mobileDropdownComponents/Registration/TaxFiling'

export default function Registration() {
    const [governmentRegistration, setGovernmentRegistration] = useState(false)
    const [taxFilling, setTaxFilling] = useState(false)

    const clickHandler1 = () => {
        setGovernmentRegistration((prevGovernmentRegistration)=>{return !prevGovernmentRegistration});
        setTaxFilling(false);
    };
    const clickHandler2 = () => {
        setGovernmentRegistration(false);
        setTaxFilling((prevTaxFilling)=>{return !prevTaxFilling});
    };
    
    return (
        <ul className={classes.menu}>
            <li onClick={clickHandler1}><a href="#">Government Registration</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {governmentRegistration && <GovernmentRegistration />}

            <li onClick={clickHandler2}><a href="#">Tax Filling</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {taxFilling && <TaxFilling />}

        </ul>
    )
}
