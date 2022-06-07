import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import SubBanner from "./SubBanner";
import Tools from "../../Tools/Tools";
import BusinessSummary from "./BusinessSummary";
import Reviews from "../Reviews/Reviews";
import Footer from "../Shared/Footer";
// import Info from "./Info";
// import Service from "./Service";
// import DoctAppointment from "./DoctAppointment";
// import Testimonial from "./Testimonial";
// import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <SubBanner />
      <Tools />
      <BusinessSummary />
      <Reviews />
      <Footer />
      {/* 
      <Info />
      <Service />
      <DoctAppointment />
      <Testimonial />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default Home;
