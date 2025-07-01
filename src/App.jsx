import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Career";
import SuccessSection from "./pages/SuccessSection";
import Services from "./pages/Service";
import ScrollToTop from "./components/ScrollToTop";
// Service pages
import Inbound from "./pages/ser/Inbound";
import Outbound from "./pages/ser/Outbound";
import Others from "./pages/ser/Others";
import DataManagement from "./pages/ser/DataManagement";
import CustomerSupport from "./pages/ser/CustomerSupport";
import Backend from "./pages/ser/Backend";

import "./App.css";

function App() {
  return (
    <Router>
       <ScrollToTop />
      <div className="font-sans bg-white text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/services/inbound" element={<Inbound />} />
          <Route path="/services/outbound" element={<Outbound />} />
          <Route path="/services/backend" element={<Backend />} />
          <Route path="/services/customer-support" element={<CustomerSupport />} />
          <Route path="/services/data-management" element={<DataManagement />} />
          <Route path="/services/others" element={<Others />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/inbound" element={<Inbound />} />
          <Route path="/services/outbound" element={<Outbound />} />
          <Route path="/services/backend" element={<Backend />} />
          <Route path="/services/customer-support" element={<CustomerSupport />} />
          <Route path="/services/data-management" element={<DataManagement />} />
          <Route path="/services/others" element={<Others />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/success" element={<SuccessSection />} />
          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
