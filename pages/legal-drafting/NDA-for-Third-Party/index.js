import React from 'react'
import TopHeader from "../../../components/TopHeader"
import BottomHeader from "../../../components/BottomHeader"
import HamBurger from "../../../components/HamBurger";
import Footer from "../../../components/footer"
import Banner from '../../../components/NDA-for-Third-Party/Banner'

export default function LegalDrafting() {
    return (
        <React.Fragment>
            <TopHeader />
            <BottomHeader />
            <HamBurger />
            <Banner />
            <Footer />
        </React.Fragment>
    )
}
