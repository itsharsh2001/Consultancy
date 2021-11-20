import ForgotPassword from '../components/Auth/ForgotPassword.js';
import TopHeader from "../components/TopHeader"
import BottomHeader from "../components/BottomHeader"
import HamBurger from "../components/HamBurger";
import Footer from "../components/footer"

function forgotpassword() {
    return (
        <>
        <TopHeader/>
        <BottomHeader/>
        <HamBurger/>
        <ForgotPassword/>
        <Footer/>
        </>
    )
}

export default forgotpassword;