import PopularServices from '../components/Proprietorship-to-Limited-Liability-Partnership/PopularServices.js'
import DocumentsRequired from '../components/Proprietorship-to-Limited-Liability-Partnership/DocumentsRequired.js'
import ServicePackages from '../components/Proprietorship-to-Limited-Liability-Partnership/ServicePackages.js'
import Advantages from '../components/Proprietorship-to-Limited-Liability-Partnership/Advantages.js'
import HowWeWork from '../components/Proprietorship-to-Limited-Liability-Partnership/HowWeWork.js'
import WhyUs from '../components/Proprietorship-to-Limited-Liability-Partnership/WhyUs.js'
import FAQ from '../components/Proprietorship-to-Limited-Liability-Partnership/FAQs.js'
import Header from '../components/Proprietorship-to-Limited-Liability-Partnership/Header.js'
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

export default PrivateCompanyRegistration;