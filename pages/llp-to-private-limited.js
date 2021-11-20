import PopularServices from '../components/llp-to-private-limited/PopularServices.js'
import DocumentsRequired from '../components/llp-to-private-limited/DocumentsRequired.js'
import ServicePackages from '../components/llp-to-private-limited/ServicePackages.js'
import Advantages from '../components/llp-to-private-limited/Advantages.js'
import HowWeWork from '../components/llp-to-private-limited/HowWeWork.js'
import WhyUs from '../components/llp-to-private-limited/WhyUs.js'
import FAQ from '../components/llp-to-private-limited/FAQs.js'
import Header from '../components/llp-to-private-limited/Header.js'
import Footer from '../components/footer.js'
import TopHeader from '../components/TopHeader';
import BottomHeader from '../components/BottomHeader'
import HamBurger from '../components/HamBurger';
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

function llpToPrivateLimited() {
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

export default llpToPrivateLimited;