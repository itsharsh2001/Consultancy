import Otp from '../components/Auth/Otp.js';
import TopHeader from "../components/TopHeader"
import BottomHeader from "../components/BottomHeader"
import HamBurger from "../components/HamBurger";
import Footer from "../components/footer"
import { getSession } from 'next-auth/client'


function otp() {
    return (
        <>
         <TopHeader/>
        <BottomHeader/>
        <HamBurger/>
        <Otp/>
        <Footer/>
        </>
    )
}

export async function getServerSideProps(context){
    const session = await getSession({req: context.req});
    
    if(session){
        return{
            redirect: {
                destination:'/admin-panel',
                permanent:false
            }
        };
    }
    
    return{
        props:{ session }
    }
    
    }

export default otp;