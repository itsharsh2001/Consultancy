import Banner from "../components/Banner";
import BottomHeader from "../components/BottomHeader";
import HamBurger from "../components/HamBurger";
import SatisfactionGaurantee from "../components/SatisfactionGaurantee";
import ServiceSlider from "../components/ServiceSlider";
import TopHeader from "../components/TopHeader";
import WhyUs from "../components/WhyUs";

//Gourav
import classes from "../styles/background.module.css";
import VideoShowcase from "../components/section_videoShowcase.js";
import Footer from "../components/footer.js";
import FeaturedOn from "../components/section_featuredOn.js";
import OurPartners from "../components/section_ourPartners.js";
import Testimonial from "../components/section_testimonial.js";
import { useRouter } from 'next/router';


function HomePage() {

  const Router = useRouter();

  return (
    <>
      <div>
      <TopHeader />
      <BottomHeader />
      <HamBurger />
      <div className={classes.backgroundColor}>
        <Banner />
        <ServiceSlider heading={1} />
      </div>
      <SatisfactionGaurantee />
      <WhyUs />

      {/* Gourav */}

      <div>
        {/* <VideoShowcase /> */}
        <div className={classes.backgroundColor}>
          <Testimonial />
        </div>
        <FeaturedOn />
        <OurPartners />
        <Footer />
      </div>
      </div>
    </>
  );
}

export default HomePage;
