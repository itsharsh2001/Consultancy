import React from 'react'
import TopHeader from "../components/TopHeader"
import BottomHeader from "../components/BottomHeader"
import HamBurger from "../components/HamBurger";
import Footer from "../components/footer"
import AdminPanel from '../components/AdminPanel/AdminPanel';
import { getSession } from 'next-auth/client'

export default function adminpanel() {
    return (
        <React.Fragment>
            <TopHeader text={1}/>
            <BottomHeader />
            <HamBurger />
            <AdminPanel />
            <Footer />
        </React.Fragment>
    )
}

export async function getServerSideProps(context){
    const session = await getSession({req: context.req});
    
    if(!session){
        return{
            redirect: {
                destination:'/',
                permanent:false
            }
        };
    }
    
    return{
        props:{ session }
    }
    
    }