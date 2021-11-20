import PopularServices from '../components/annual-compliance-for-llp/PopularServices.js'
import DocumentsRequired from '../components/annual-compliance-for-llp/DocumentsRequired.js'
import ServicePackages from '../components/annual-compliance-for-llp/ServicePackages.js'
import Advantages from '../components/annual-compliance-for-llp/Advantages.js'
import HowWeWork from '../components/annual-compliance-for-llp/HowWeWork.js'
import WhyUs from '../components/annual-compliance-for-llp/WhyUs.js'
import FAQ from '../components/annual-compliance-for-llp/FAQs.js'
import Header from '../components/annual-compliance-for-llp/Header.js'
import Footer from '../components/footer.js'
import TopHeader from '../components/TopHeader';
import BottomHeader from '../components/BottomHeader'
import HamBurger from '../components/HamBurger';
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

function PrivateCompanyRegistration() {

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
        basicPlan={(data.planPrice || {}).basicPlan} megaPlan={(data.planPrice || {}).megaPlan}  smartPlan={(data.planPrice || {}).smartPlan}
        /> 
        {/* <Advantages/>  */}
        <HowWeWork/>
        <PopularServices/>
        <WhyUs/>
        <FAQ/> 
        <Footer/>
        </>
    )
}

export default PrivateCompanyRegistration;