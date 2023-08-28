"use client";
import About from "@/components/about";
import CounterOne from "@/components/counterOne";
import CustomerFeedBack from "@/components/customersFeedBack";
import DesignStudio from "@/components/designStudio";
import Footer from "@/components/footer";
import Header from "@/components/header";
import OurBrands from "@/components/ourBrands";
import OurIntroductions from "@/components/ourIntroductions";
import OurServices from "@/components/ourServices";
import RecentProjects from "@/components/recentProjects";
import WeCare from "@/components/weCare";
import WhyChooseUS from "@/components/whyChooseUs";
import React from "react";

const MyHome = () => {
  return (
    <div>
      <Header />
      <About />
      <CustomerFeedBack />
      <OurBrands />
      <OurServices />
      {/* <OurIntroductions /> */}
      {/* <DesignStudio /> */}
      {/* <CounterOne /> */}
      {/* <WeCare /> */}
      <RecentProjects />
      <WhyChooseUS />
      <Footer />
    </div>
  );
};

export default MyHome;
