import React from "react"
import TopHeader from "../components/TopHeader"
import BottomHeader from "../components/BottomHeader"
import HamBurger from "../components/HamBurger";
import Footer from "../components/footer"
import MainContent from '../components/Blog/MainContent'

export default function blog() {
    return (
        <React.Fragment>
            <TopHeader />
            <BottomHeader />
            <HamBurger />
            <MainContent/>
            <Footer />
        </React.Fragment>
    )
}
