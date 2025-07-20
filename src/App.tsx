import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TechnicalCapabilities from "./components/technical";
import WhyChooseUs from "./components/whyChooseUs";
import Header from "./components/Header";
import LandingPage from "./pages/HomePage";
import About from "./components/About";
import ServicesApplications from "./components/serviceApplication";
import Footer from "./components/footer";
import "./App.css";
import ContactUs from "./components/contactUs";


const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
      {/* HEADER + PAGE CONTENT */}
      <div className="flex-grow">
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesApplications />} />
          <Route path="/technical" element={<TechnicalCapabilities />} />
          <Route path="/safety" element={<WhyChooseUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
    </Router>
  );
};

export default App;
