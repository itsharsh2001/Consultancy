import PopularServices from '../components/close-a-private-limited-company/PopularServices.js'
import DocumentsRequired from '../components/close-a-private-limited-company/DocumentsRequired.js'
import ServicePackages from '../components/close-a-private-limited-company/ServicePackages.js'
import Advantages from '../components/close-a-private-limited-company/Advantages.js'
import HowWeWork from '../components/close-a-private-limited-company/HowWeWork.js'
import WhyUs from '../components/close-a-private-limited-company/WhyUs.js'
import FAQ from '../components/close-a-private-limited-company/FAQs.js'
import Header from '../components/close-a-private-limited-company/Header.js'
import Footer from '../components/footer.js'
import TopHeader from '../components/TopHeader';
import BottomHeader from '../components/BottomHeader'
import HamBurger from '../components/HamBurger';
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'


function closeAPrivateLimitedCompany() {

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
        {/* <Advantages/>  */}
        <HowWeWork/>
        <PopularServices/>
        <WhyUs/>
        <FAQ/> 
        <Footer/>
        </>
    )
}

export default closeAPrivateLimitedCompany;