import classes from './ChangeBusiness.module.css'
import { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SelectConversionType from '../mobileDropdownComponents/ChangeBusiness/SelectConversionType'
import UpdateCorporateInformation from '../mobileDropdownComponents/ChangeBusiness/UpdateCorporationInformation'
import CloseABusiness from '../mobileDropdownComponents/ChangeBusiness/CloseABusiness'

export default function ChangeBusiness() {
    const [selectConversionType, setSelectConversionType] = useState(false);
    const [updateCorporateInformation, setUpdateCorporateInformation] = useState(false)
    const [closeABusiness, setCloseABusiness] = useState(false)

    const clickHandler1 = () => {
        setSelectConversionType((prevSelectConversionType)=>{return !prevSelectConversionType});
        setUpdateCorporateInformation(false);
        setCloseABusiness(false);
    };
    const clickHandler2 = () => {
        setSelectConversionType(false);
        setUpdateCorporateInformation((prevUpdateCorporateInformation)=>{return !prevUpdateCorporateInformation});
        setCloseABusiness(false);
    };
    const clickHandler3 = () => {
        setSelectConversionType(false);
        setUpdateCorporateInformation(false);
        setCloseABusiness((prevCloseABusiness)=>{return !prevCloseABusiness});
    };
    return (
        <ul className={classes.menu}>
            <li onClick={clickHandler1}><a href="#">Update Corporate Information</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {selectConversionType && <SelectConversionType />}

            <li onClick={clickHandler2}><a href="#">Select Conversion Type</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {updateCorporateInformation && <UpdateCorporateInformation />}

            <li onClick={clickHandler3}><a href="#">Close a Business</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {closeABusiness && <CloseABusiness />}

        </ul>
    )
}
