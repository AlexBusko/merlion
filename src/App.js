import "./style.scss";
import "../src/scss/custom.scss";
import Header from "./components/header/Header";
import Grid from "./components/grid/Grid";
import Home from "./pages/home/Home";
import Photos from "./pages/photos/Photos";
import Contacts from "./pages/contacts/Contacts";
import Footer from "./pages/footer/Footer";
import Services from "./pages/services/Services";
import Partners from "./pages/partners/Partners";
import AboutUs from "./pages/aboutus/AboutUs";
import WhyWe from "./pages/aboutus/whyWe/WhyWe";
import FirstAboutUs from "./pages/aboutus/firstAboutUs/FirstAboutUs";
import ThirdAboutUs from "./pages/aboutus/thirdAboutUs/ThirdAboutUs";
import FourthAboutUs from "./pages/aboutus/fourthAboutUs/FourthAboutUs";

const App = () => {
  return (
    <div className="merloin-app">
      <Header />
      <Home />
      <FirstAboutUs />
      <Grid first={<Photos />} second={<AboutUs />} />
      <Services />
      <ThirdAboutUs />
      <Grid first={<WhyWe />} second={<Photos />} />
      <Contacts />
      <Partners />
      <FourthAboutUs />
      <Footer />
    </div>
  );
};

export default App;
