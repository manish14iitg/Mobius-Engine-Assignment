import React from "react";
import NavBarAndFooterLayout from "../layouts/NavBarAndFooterLayout";
import HeroSection from "./HeroSection";
import Work from "./Work";
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";
import ChooseUs from "./ChooseUs";
import SubscriptionPlan from "./SubscriptionPlan";
import CoachingPlanSection from "./CoachingPlanSection";
import ContactUs from "./ContactUs";

function HomePage() {
  return (
    <NavBarAndFooterLayout>
      <HeroSection />
      <Work />
      <AboutUs />
      <Testimonial />
      <ChooseUs />
      <SubscriptionPlan />
      <CoachingPlanSection />
      <ContactUs />
    </NavBarAndFooterLayout>
  );
}

export default HomePage;
