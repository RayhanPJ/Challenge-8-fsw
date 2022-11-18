import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import NavLogin from "../NavLogin";
import { OurService, WhyUs, Testimonial, CTABanner, FAQ } from "../Main";

const LandingPage = () => {
  return (
    <div>
      <NavLogin />
      <Header />
      <OurService />
      <WhyUs />
      <Testimonial />
      <CTABanner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
