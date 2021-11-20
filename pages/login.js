import LogIn from '../components/Auth/LogIn.js';
import BottomHeader from '../components/BottomHeader'
import HamBurger from '../components/HamBurger';
import TopHeader from '../components/TopHeader';
import Footer from '../components/footer.js'
import { getSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

function login() {

    // const [isLoading, setisLoading] = useState(true)

    // const router = useRouter();

    // useEffect(()=>{
    //     getSession().then(session=>{
    //         if(session){
    //             router.replace('/');
    //         }else{
    //             setisLoading(false);
    //         }
    //     })
    // },[router])

    // if(isLoading){
    //     return <p>Loading..</p>
    // }


    return (
        <>
        <TopHeader/>
        <BottomHeader/>
        <HamBurger/>
        <LogIn/>
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

// export async function getServerSideProps(context){
// const session = await getSession({req: context.req});

// if(!session){
//     return{
//         redirect: {
//             destination:'/signup',
//             permanent:false
//         }
//     };
// }

// return{
//     props:{ session }
// }

// }

export default login;