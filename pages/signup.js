import SignUp from '../components/Auth/SignUp.js';
import BottomHeader from '../components/BottomHeader'
import HamBurger from '../components/HamBurger';
import TopHeader from '../components/TopHeader';
import Footer from '../components/footer.js'
import { getSession } from 'next-auth/client'

function signup() {
    return (
        <>
        <TopHeader/>
        <BottomHeader/>
        <HamBurger/>
        <SignUp/>
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


export default signup;