import Hero from "./Hero";
import CardsConditions from "./CardsConditions";
import CardsCoffee from "./CardsCoffee";
import Faq from "./Faq";
import FeatureSection from "./FeatureSection";
import SectionContact from "./SectionContact";
import FooterWrapper from "./FooterWrapper";
import ShoppingCart from "@/components/ShoppingCart";


const Home = () => {
  

  return (
    <div className=" w-auto pt-[48px]">
      <Hero/>

      <CardsConditions/>

      <CardsCoffee/>

      <Faq/>

      <FeatureSection/>

      <SectionContact/>

      <FooterWrapper/>

      


  

    </div>
  );
};

export default Home;
