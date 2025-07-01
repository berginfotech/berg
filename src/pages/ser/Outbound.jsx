import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Decorative SVG Backgrounds
const DecorativeBackground = () => (
  <>
    {/* Top Left Blob */}
    <svg className="absolute -top-20 -left-20 w-[300px] blur-3xl opacity-30 z-0" viewBox="0 0 200 200">
      <path
        fill="#3b82f6"
        d="M43.3,-70.6C54.9,-61.3,63.9,-48.3,70.7,-34.4..."
      />
    </svg>

    {/* Bottom Right Dot Grid */}
    <svg className="absolute bottom-10 right-10 w-40 opacity-10" fill="none" viewBox="0 0 200 200">
      <defs>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="#3b82f6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  </>
);

// Section Heading Component
const SectionHeading = ({ title }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
  >
    {title}
  </motion.h2>
);

// Feature Bullet
const Feature = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
  >
    <CheckCircle className="text-blue-600 mt-1" />
    <p className="text-gray-700 font-medium">{text}</p>
  </motion.div>
);

const OutboundServices = () => {
  const services = [
    { title: "Inbound Services", path: "/services/inbound" },
    { title: "Back Office", path: "/services/back-office" },
    { title: "Email Support", path: "/services/email-support" },
    { title: "Chat Support", path: "/services/chat-support" },
    { title: "Technical Support", path: "/services/tech-support" },
  ];

  const features = [
    "Focus on lead generation and proactive outreach.",
    "Trained agents for cold calling, follow-ups, and surveys.",
    "Boost sales and conversions with strategic outbound calls.",
    "Real-time reporting and data-driven campaign management.",
    "Flexible staffing to match seasonal demand or campaigns.",
  ];

  
const industries = [
  "Banking & Financial Services , Healthcare & Insurance",
  "Travel , Hospitality & Logistic , Automotive",
  "Retail, Telecom, Energy",
];

  return (
    <div className="relative bg-white text-gray-800 overflow-hidden">
      {/* Hero Banner */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center px-6 bg-[#0a2540]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bgc3.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Outbound Services
          </h1>
          <p className="text-lg md:text-xl font-light drop-shadow-sm">
            Proactive outreach that drives results and maximizes engagement.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative bg-blue-50 overflow-hidden">
        <DecorativeBackground />

        {/* Intro Section */}
        <section className="relative z-10 text-center py-24 px-4 md:px-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-900"
          >
            Expert Outbound Call Center Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg text-blue-700 max-w-3xl mx-auto"
          >
            Outbound services tailored to elevate your customer connections, sales conversions, and brand awareness.
          </motion.p>
        </section>

        {/* Features Section */}
<section className="relative z-10 py-20 px-4 md:px-20 bg-gradient-to-br from-[#0a2540] to-[#0f3a64] text-white">
  <h3 className="text-3xl font-semibold text-white text-center mb-6">
    Why Outsource Outbound Call Center Services?
  </h3>
  <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {features.map((text, index) => (
      <Feature key={index} text={text} />
    ))}
  </div>
</section>


   
         {/* COMPANY INFO */}
         <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-blue-100 relative">
         <section className="max-w-6xl mx-auto px-6 py-8 text-center relative ">
           <h3 className="text-3xl font-semibold text-blue-800 mb-6">
             Berg Infotech LLP - Your Trusted Partner
           </h3>
           <p className="text-gray-700 mb-4">
             With over two decades of experience, Berg Infotech LLP is a trusted name in inbound support
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
    </div>
  );
};

export default OutboundServices;
