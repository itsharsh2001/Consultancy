import classes from './StartingBusiness.module.css'
import { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PopularOptions from '../mobileDropdownComponents/StartingBusiness/PopularOptions'
import SpecialBusiness from '../mobileDropdownComponents/StartingBusiness/SpecialBusinessEntities'

export default function StartingBusiness() {
    const [popularOptions, setPopularOptions] = useState(false)
    const [specialBusiness, setSpecialBusiness] = useState(false)

    const clickHandler1 = () => {
        setPopularOptions((prevPopularOptions)=>{return !prevPopularOptions});
        setSpecialBusiness(false);
    };
    const clickHandler2 = () => {
        setPopularOptions(false);
        setSpecialBusiness((prevSpecialBusiness)=>{return !prevSpecialBusiness});
    };
    
    return (
        <ul className={classes.menu}>
            <li onClick={clickHandler1}><a href="#">Popular Options</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {popularOptions && <PopularOptions />}

            <li onClick={clickHandler2}><a href="#">Special Business Entities</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {specialBusiness && <SpecialBusiness />}
            
        </ul>
    )
}
