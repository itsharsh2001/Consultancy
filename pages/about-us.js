import React from "react"
import TopHeader from "../components/TopHeader"
import BottomHeader from "../components/BottomHeader"
import HamBurger from "../components/HamBurger";
import Footer from "../components/footer"
import Video from '../components/AboutUsPage/Video'
import OurCompany from '../components/AboutUsPage/OurCompany'
import VisionMission from '../components/AboutUsPage/VisionMission'
import OurLeaders from '../components/AboutUsPage/OurLeaders'

export default function AboutUs() {
    return (
        <React.Fragment>
            <TopHeader />
            <BottomHeader />
            <HamBurger />
            <OurCompany />
            {/* <Video /> */}
            <VisionMission />
            {/* <OurLeaders /> */}
            <Footer />
        </React.Fragment>
    )
}
