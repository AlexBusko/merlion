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
import WhyWe from "./pages/aboutus/WhyWe";
import FirstAboutUs from "./pages/aboutus/FirstAboutUs";
import ThirdAboutUs from "./pages/aboutus/ThirdAboutUs";
import FourthAboutUs from "./pages/aboutus/FourthAboutUs";

const App = () => {
  return (
    <div className="merloin-app">
      <Header />
      <Home />
      <FirstAboutUs />
      <Grid first={<Photos />} second={<AboutUs />} />
      <Services />
      <ThirdAboutUs />
      <Partners />
      <FourthAboutUs />
      <Grid first={<WhyWe />} second={<Photos />} />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
