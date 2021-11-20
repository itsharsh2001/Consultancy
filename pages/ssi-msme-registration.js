import PopularServices from '../components/ssi-msme-registration/PopularServices.js'
import DocumentsRequired from '../components/ssi-msme-registration/DocumentsRequired.js'
import ServicePackages from '../components/ssi-msme-registration/ServicePackages.js'
import Advantages from '../components/ssi-msme-registration/Advantages.js'
import HowWeWork from '../components/ssi-msme-registration/HowWeWork.js'
import WhyUs from '../components/ssi-msme-registration/WhyUs.js'
import FAQ from '../components/ssi-msme-registration/FAQs.js'
import Header from '../components/ssi-msme-registration/Header.js'
import Footer from '../components/footer.js'
import TopHeader from '../components/TopHeader';
import BottomHeader from '../components/BottomHeader'
import HamBurger from '../components/HamBurger';
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

function ssiMsmeRegistration() {
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

export default ssiMsmeRegistration;