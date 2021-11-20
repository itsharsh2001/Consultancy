import PopularServices from '../components/close-a-limited-liability-partnership/PopularServices.js'
import DocumentsRequired from '../components/close-a-limited-liability-partnership/DocumentsRequired.js'
import ServicePackages from '../components/close-a-limited-liability-partnership/ServicePackages.js'
import Advantages from '../components/close-a-limited-liability-partnership/whyChangingDirectorRequired.js'
import HowWeWork from '../components/close-a-limited-liability-partnership/HowWeWork.js'
import WhyUs from '../components/close-a-limited-liability-partnership/WhyUs.js'
import FAQ from '../components/close-a-limited-liability-partnership/FAQs.js'
import Header from '../components/close-a-limited-liability-partnership/Header.js'
import Footer from '../components/footer.js'
import TopHeader from '../components/TopHeader';
import BottomHeader from '../components/BottomHeader'
import HamBurger from '../components/HamBurger';
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

function closeALimitedLiabilityPartnership() {

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
         basicPlan={(data.planPrice || {}).basicPlan} megaPlan={(data.planPrice || {}).megaPlan}  smartPlan={(data.planPrice || {}).smartPlan} /> 
        <Advantages/> 
        <HowWeWork/>
        <PopularServices/>
        <WhyUs/>
        <FAQ/> 
        <Footer/>
        </>
    )
}

export default closeALimitedLiabilityPartnership;