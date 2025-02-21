import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import Services from "./components/Services";
import IndustryComponent from "./components/IndustryComponent";
import FeatureProduct from "./components/Feature";
import Footer from "./components/Footer";
import ToolTip from "./components/ToolTip";
import Choose from "./components/Choose";
import Serve from "./components/Serve";
import CustomerReview from "./components/Review";
import GlobalDelivery from "./components/GlobalDelivery";

export default function Home() {
  return (
    <>
      <ToolTip/>
      <Navbar/>
      <HeroPage/>
      <Services/>
      <IndustryComponent/>
      <FeatureProduct/>
      <Choose/>
      <Serve/>
      <CustomerReview/>
      <GlobalDelivery/>
      <Footer/>
    </>
  );
}
