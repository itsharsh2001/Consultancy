import React from "react"
import TopHeader from "../components/TopHeader"
import BottomHeader from "../components/BottomHeader"
import HamBurger from "../components/HamBurger";
import Footer from "../components/footer"
import ContactForm from '../components/ContactUsPage/ContactForm'

export default function ContactUs() {
    return (
        <React.Fragment>
            <TopHeader />
            <BottomHeader />
            <HamBurger />
            <ContactForm />
            <Footer />
        </React.Fragment>
    )
}
