import PopularServices from '../components/lut-under-gst/PopularServices.js'
import DocumentsRequired from '../components/lut-under-gst/DocumentsRequired.js'
import ServicePackages from '../components/lut-under-gst/ServicePackages.js'
import Advantages from '../components/lut-under-gst/Advantages.js'
import HowWeWork from '../components/lut-under-gst/HowWeWork.js'
import WhyUs from '../components/lut-under-gst/WhyUs.js'
import FAQ from '../components/lut-under-gst/FAQs.js'
import Header from '../components/lut-under-gst/Header.js'
import Footer from '../components/footer.js'
import TopHeader from '../components/TopHeader';
import BottomHeader from '../components/BottomHeader'
import HamBurger from '../components/HamBurger';
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

function lutUnderGST() {
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
        {/* <Advantages/>  */}
        <HowWeWork/>
        <PopularServices/>
        <WhyUs/>
        <FAQ/> 
        <Footer/>
        </>
    )
}

export default lutUnderGST;