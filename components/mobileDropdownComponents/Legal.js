import classes from './Legal.module.css'
import { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Employment from '../mobileDropdownComponents/Legal/Employment'
import Corporate from '../mobileDropdownComponents/Legal/Corporate'
import DailyBusiness from '../mobileDropdownComponents/Legal/DailyBusiness'
import LegalAgreements from '../mobileDropdownComponents/Legal/LegalAgreements'
import BankingFinance from '../mobileDropdownComponents/Legal/BankingFinance'
import BusinessAgreements from '../mobileDropdownComponents/Legal/BusinessAgreements'
import RealEstate from '../mobileDropdownComponents/Legal/RealEstate'
import Document from '../mobileDropdownComponents/Legal/Document'

export default function Legal() {
    const [employment, setEmployment] = useState(false)
    const [corporate, setCorporate] = useState(false)
    const [dailyBusiness, setDailyBusiness] = useState(false)
    const [legalAgreements, setLegalAgreements] = useState(false)
    const [bankingFinance, setBankingFinance] = useState(false)
    const [businessAgreements, setBusinessAgreements] = useState(false)
    const [realEstate, setRealEstate] = useState(false)
    const [document, setDocument] = useState(false)


    const clickHandler1 = () => {
        setEmployment((prevEmployment)=>{return !prevEmployment});
        setCorporate(false);
        setDailyBusiness(false);
        setLegalAgreements(false);
        setBankingFinance(false);
        setBusinessAgreements(false);
        setRealEstate(false);
        setDocument(false);
    };
    const clickHandler2 = () => {
        setEmployment(false);
        setCorporate((prevCorporate)=>{return !prevCorporate});
        setDailyBusiness(false);
        setLegalAgreements(false);
        setBankingFinance(false);
        setBusinessAgreements(false);
        setRealEstate(false);
        setDocument(false);
    };
    const clickHandler3 = () => {
        setEmployment(false);
        setCorporate(false);
        setDailyBusiness((prevDailyBusiness)=>{return !prevDailyBusiness});
        setLegalAgreements(false);
        setBankingFinance(false);
        setBusinessAgreements(false);
        setRealEstate(false);
        setDocument(false);
    };
    const clickHandler4 = () => {
        setEmployment(false);
        setCorporate(false);
        setDailyBusiness(false);
        setLegalAgreements((prevLegalAgreements)=>{return !prevLegalAgreements});
        setBankingFinance(false);
        setBusinessAgreements(false);
        setRealEstate(false);
        setDocument(false);
    };
    const clickHandler5 = () => {
        setEmployment(false);
        setCorporate(false);
        setDailyBusiness(false);
        setLegalAgreements(false);
        setBankingFinance((prevBankingFinance)=>{return !prevBankingFinance});
        setBusinessAgreements(false);
        setRealEstate(false);
        setDocument(false);
    };
    const clickHandler6 = () => {
        setEmployment(false);
        setCorporate(false);
        setDailyBusiness(false);
        setLegalAgreements(false);
        setBankingFinance(false);
        setBusinessAgreements((prevBankingAgreements)=>{return !prevBankingAgreements});
        setRealEstate(false);
        setDocument(false);
    };
    const clickHandler7 = () => {
        setEmployment(false);
        setCorporate(false);
        setDailyBusiness(false);
        setLegalAgreements(false);
        setBankingFinance(false);
        setBusinessAgreements(false);
        setRealEstate((prevRealState)=>{return !prevRealState});
        setDocument(false);
    };
    const clickHandler8 = () => {
        setEmployment(false);
        setCorporate(false);
        setDailyBusiness(false);
        setLegalAgreements(false);
        setBankingFinance(false);
        setBusinessAgreements(false);
        setRealEstate(false);
        setDocument((prevDocument)=>{return !prevDocument});
    };
    
    return (
        <ul className={classes.menu}>
            <li onClick={clickHandler1}><a href="#">Employment</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {employment && <Employment />}

            <li onClick={clickHandler2}><a href="#">Corporate</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {corporate && <Corporate />}

            <li onClick={clickHandler3}><a href="#">Daily Business</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {dailyBusiness && <DailyBusiness />}

            <li onClick={clickHandler4}><a href="#">Legal Agreements</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {legalAgreements && <LegalAgreements />}

            <li onClick={clickHandler5}><a href="#">Banking & Finance</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {bankingFinance && <BankingFinance />}

            <li onClick={clickHandler6}><a href="#">Business Agreements</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {businessAgreements && <BusinessAgreements />}

            <li onClick={clickHandler7}><a href="#">Real Estate</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {realEstate && <RealEstate />}

            <li onClick={clickHandler8}><a href="#">Document Kits</a><ArrowDropDownIcon style={{ fill: "#ffb403" }}/></li>
            <hr />
            {document && <Document />}

        </ul>
    )
}
