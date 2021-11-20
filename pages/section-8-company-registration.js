import PopularServices from '../components/section-8-company-registration/PopularServices.js'
import DocumentsRequired from '../components/section-8-company-registration/DocumentsRequired.js'
import ServicePackages from '../components/section-8-company-registration/ServicePackages.js'
import Advantages from '../components/section-8-company-registration/Advantages.js'
import HowWeWork from '../components/section-8-company-registration/HowWeWork.js'
import WhyUs from '../components/section-8-company-registration/WhyUs.js'
import FAQ from '../components/section-8-company-registration/FAQs.js'
import Header from '../components/section-8-company-registration/Header.js'
import Footer from '../components/footer.js'
import TopHeader from '../components/TopHeader';
import BottomHeader from '../components/BottomHeader'
import HamBurger from '../components/HamBurger';
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

function section8CompanyRegistration() {
    const Router = useRouter();
const pathname = Router.pathname;
const serviceName = pathname.substring(1,)
const [data, setData] = useState('');


    useEffect(async ()=>{
        try{
        const response = await fetch('/api/get-Price', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
            serviceName
            })
        });
        const data = await response.json();
        setData(data.data)

    }catch(err){
        console.log(err)
    }
    },[])

    return (
        <>
        <TopHeader /> 
        <BottomHeader />
        <HamBurger /> 
         <Header/> 
        <DocumentsRequired/>
        <ServicePackages
        basicPlan={(data.planPrice || {}).basicPlan} megaPlan={(data.planPrice || {}).megaPlan}  smartPlan={(data.planPrice || {}).smartPlan}/> 
        <Advantages/> 
        <HowWeWork/>
        <PopularServices/>
        <WhyUs/>
        <FAQ/> 
        <Footer/>
        </>
    )
}

export default section8CompanyRegistration;