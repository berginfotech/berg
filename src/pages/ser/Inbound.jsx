import React from 'react';
import { Link } from 'react-router-dom';

const points = [
  "Customer support, sales & query resolution",
  "Improves customer satisfaction & loyalty",
  "Cost-effective alternative to in-house support",
  "Helps businesses scale communication efficiently",
  "Enhances brand credibility through expert handling",
];

const industries = [
  "Banking & Financial Services , Healthcare & Insurance",
  "Travel , Hospitality & Logistic , Automotive",
  "Retail, Telecom, Energy",
];

const services = [
  { title: "Outbound Services", path: "/services/outbound" },
  { title: "Chat Support", path: "/services/chat-support" },
  { title: "Email Support", path: "/services/email-support" },
  { title: "Back Office", path: "/services/back-office" },
];

const Inbound = () => {
  return (
    <div className="relative bg-white text-gray-800 overflow-hidden">
      {/* Decorative Blob SVG (Top Left) */}
      <svg
        className="absolute -top-20 -left-20 w-[300px] opacity-20 blur-sm z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M40.5,-65.7C52.6,-58.6,62.9,-52.6,68.1,-42.3C73.2,-32,73.2,-17.3,73.4,-2C73.6,13.4,74.1,26.9,68.6,39.2C63,51.5,51.4,62.5,38.1,69.1C24.8,75.6,9.9,77.7,-4.6,83.6C-19,89.6,-33,99.3,-45.3,95.7C-57.5,92,-68.1,75,-72.5,58.3C-77,41.6,-75.2,25.3,-78.1,10C-81,-5.3,-88.6,-19.5,-84.8,-29.4C-81,-39.2,-65.8,-44.8,-51.4,-53.8C-36.9,-62.8,-23.2,-75.1,-7.8,-79.7C7.6,-84.4,15.3,-81.3,40.5,-65.7Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Dot Grid Pattern (Bottom Right) */}
      <svg
        className="absolute bottom-10 right-10 w-40 h-40 opacity-10 z-0"
        viewBox="0 0 100 100"
        fill="none"
      >
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#dotPattern)" />
      </svg>


{/* Decorative Blob SVG (Top Left) */}
  <svg
    className="absolute -top-20 -left-20 w-[300px] opacity-20 blur-sm z-0"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#ffffff"
      d="M40.5,-65.7C52.6,-58.6,62.9,-52.6,68.1,-42.3C73.2,-32,73.2,-17.3,73.4,-2C73.6,13.4,74.1,26.9,68.6,39.2C63,51.5,51.4,62.5,38.1,69.1C24.8,75.6,9.9,77.7,-4.6,83.6C-19,89.6,-33,99.3,-45.3,95.7C-57.5,92,-68.1,75,-72.5,58.3C-77,41.6,-75.2,25.3,-78.1,10C-81,-5.3,-88.6,-19.5,-84.8,-29.4C-81,-39.2,-65.8,-44.8,-51.4,-53.8C-36.9,-62.8,-23.2,-75.1,-7.8,-79.7C7.6,-84.4,15.3,-81.3,40.5,-65.7Z"
      transform="translate(100 100)"
    />
  </svg>
 
 
  {/* Dot Grid Pattern (Bottom Right) */}
  <svg
    className="absolute bottom-10 right-10 w-40 h-40 opacity-10 z-0"
    viewBox="0 0 100 100"
    fill="none"
  >
    <defs>
      <pattern
        id="dotPattern"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="1" cy="1" r="1" fill="white" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#dotPattern)" />
  </svg>

      {/* HERO */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center px-6 bg-[#0a2540] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bgc3.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Inbound Services
          </h1>
          <p className="text-lg md:text-xl font-light drop-shadow-sm">
            Delivering exceptional customer experiences 24/7
          </p>
        </div>
      </section>
        <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-blue-100 relative">

      {/* INTRO */}
          
      <section className="max-w-6xl mx-auto px-6 py-10 text-center relative z-10">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Inbound Call Center Outsourcing Company
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          An inbound call center is tailored to handle customer support, sales inquiries, service
          requests, and general queries.
        </p>
        <p className="text-lg text-gray-700">
          Offering exceptional support means transforming your customer interactions into lasting
          relationships and measurable revenue.
        </p>
      </section>
      {/* Decorative Blob SVG (Top Left) */}
  <svg
    className="absolute -top-20 -left-20 w-[300px] opacity-20 blur-sm z-0"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#ffffff"
      d="M40.5,-65.7C52.6,-58.6,62.9,-52.6,68.1,-42.3C73.2,-32,73.2,-17.3,73.4,-2C73.6,13.4,74.1,26.9,68.6,39.2C63,51.5,51.4,62.5,38.1,69.1C24.8,75.6,9.9,77.7,-4.6,83.6C-19,89.6,-33,99.3,-45.3,95.7C-57.5,92,-68.1,75,-72.5,58.3C-77,41.6,-75.2,25.3,-78.1,10C-81,-5.3,-88.6,-19.5,-84.8,-29.4C-81,-39.2,-65.8,-44.8,-51.4,-53.8C-36.9,-62.8,-23.2,-75.1,-7.8,-79.7C7.6,-84.4,15.3,-81.3,40.5,-65.7Z"
      transform="translate(100 100)"
    />
  </svg>
 
 
  {/* Dot Grid Pattern (Bottom Right) */}
  <svg
    className="absolute bottom-10 right-10 w-40 h-40 opacity-10 z-0"
    viewBox="0 0 100 100"
    fill="none"
  >
    <defs>
      <pattern
        id="dotPattern"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="1" cy="1" r="1" fill="white" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#dotPattern)" />
  </svg>
</section>

     {/* WHY OUTSOURCE */}
<section className="relative bg-gradient-to-br from-[#0a2540] to-[#0f3a64] py-20 px-6 text-white overflow-hidden">
  {/* Decorative SVG Circle */}
  <svg
    className="absolute top-10 left-10 w-24 h-24 opacity-10 z-0"
    viewBox="0 0 100 100"
    fill="none"
  >
    <circle cx="50" cy="50" r="50" fill="white" />
  </svg>

  <h3 className="text-3xl font-semibold text-center mb-10 z-10 relative">
    Why Outsource Inbound Call Center Services?
  </h3>

  <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {points.map((point, index) => (
      <div
        key={index}
        className="relative group overflow-hidden bg-white rounded-xl shadow-xl p-6 border transition-transform duration-300 hover:scale-105"
      >
        {/* Shutter Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />

        {/* Content */}
        <span className="relative z-10 text-blue-700 group-hover:text-white font-medium transition-colors duration-300">
          {point}
        </span>
      </div>
    ))}
  </div>
</section>


      {/* COMPANY INFO */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-blue-100 relative">
      <section className="max-w-6xl mx-auto px-6 py-10 text-center relative ">
        <h3 className="text-3xl font-semibold text-blue-800 mb-6">
          Berg Infotech LLP - Your Trusted Partner
        </h3>
        <p className="text-gray-700 mb-4">
          With over decades of experience, Berg Infotech LLP is a trusted name in inbound support
          services.
        </p>
        <p className="text-gray-700">
          From expert teams to modern infrastructure, we empower brands to deliver seamless customer
          communication across industries.
        </p>
      </section>
</section>
      {/* INDUSTRIES WE SERVE */}
      <section className="bg-gradient-to-br from-[#0a2540] to-[#0f3a64] py-8 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h4 className="text-3xl font-bold text-white mb-6">Industries We Serve</h4>
            <p className="text-white text-lg mb-8">
              We specialize in delivering customized support solutions across a range of industries.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white font-medium">
              {industries.map((industry, idx) => (
                <li
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4 border border-white/20 hover:bg-white/20 transition"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="/9.jpg"
              alt="Industries we serve"
              className="max-w-full w-[90%] rounded-2xl shadow-2xl border-4 border-white/20"
            />
          </div>
        </div>

        {/* Extra Decorative SVG Bubble */}
        <svg
          className="absolute top-0 right-0 w-48 opacity-10 z-0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M39.3,-62.4C52.2,-53.5,64,-43.2,70.8,-29.4C77.6,-15.6,79.5,1.8,73.9,17.5C68.3,33.1,55.2,47,40.7,56.4C26.2,65.9,10.1,70.8,-4.4,72.1C-18.9,73.4,-37.8,71,-52.5,61.1C-67.2,51.1,-77.6,33.5,-78.4,16.1C-79.2,-1.3,-70.5,-18.6,-59.7,-32.5C-48.9,-46.4,-36,-57,-21.5,-65.1C-7,-73.1,9.1,-78.6,24.6,-75.2C40,-71.9,54.9,-59.9,39.3,-62.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </section>

      {/* Decorative Blob SVG (Top Left) */}
  <svg
    className="absolute -top-20 -left-20 w-[300px] opacity-20 blur-sm z-0"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#ffffff"
      d="M40.5,-65.7C52.6,-58.6,62.9,-52.6,68.1,-42.3C73.2,-32,73.2,-17.3,73.4,-2C73.6,13.4,74.1,26.9,68.6,39.2C63,51.5,51.4,62.5,38.1,69.1C24.8,75.6,9.9,77.7,-4.6,83.6C-19,89.6,-33,99.3,-45.3,95.7C-57.5,92,-68.1,75,-72.5,58.3C-77,41.6,-75.2,25.3,-78.1,10C-81,-5.3,-88.6,-19.5,-84.8,-29.4C-81,-39.2,-65.8,-44.8,-51.4,-53.8C-36.9,-62.8,-23.2,-75.1,-7.8,-79.7C7.6,-84.4,15.3,-81.3,40.5,-65.7Z"
      transform="translate(100 100)"
    />
  </svg>
 
 
  {/* Dot Grid Pattern (Bottom Right) */}
  <svg
    className="absolute bottom-10 right-10 w-40 h-40 opacity-10 z-0"
    viewBox="0 0 100 100"
    fill="none"
  >
    <defs>
      <pattern
        id="dotPattern"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="1" cy="1" r="1" fill="white" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#dotPattern)" />
  </svg>
{/* CONTACT NOW SECTION */}
<section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-blue-100 relative">
  <div className="max-w-4xl mx-auto text-center">
    
    <h4 className="text-3xl font-bold text-blue-900 mb-6">
      Ready to Elevate Your Customer Experience?
    </h4>
    <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
      Connect with Berg Infotech today and let us help transform your customer interactions with tailored solutions.
    </p>
    <Link
      to="/contact"
      onClick={() => window.scrollTo(0, 0)}
      className="inline-block bg-blue-600 text-white hover:bg-blue-700 transition duration-300 font-semibold py-4 px-8 rounded-full shadow-lg"
    >
      Contact Us Now
    </Link>
  </div>
</section>


    </div>
  );
};

export default Inbound;
