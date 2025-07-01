import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaServer,
  FaEnvelopeOpenText,
  FaDatabase,
  FaComments,
  FaTasks,
  FaSearch,
} from "react-icons/fa";
import { MdOutlinePolicy, MdOutlineQueryStats, MdSupportAgent } from "react-icons/md";

const backendServices = [
  {
    icon: <FaTasks className="text-white text-3xl" />,
    title: "Request & Loan Processing",
  },
  {
    icon: <FaDatabase className="text-white text-3xl" />,
    title: "Database Management & Mining",
  },
  {
    icon: <MdSupportAgent className="text-white text-3xl" />,
    title: "Field Executive & Agent Support",
  },
  {
    icon: <FaEnvelopeOpenText className="text-white text-3xl" />,
    title: "Email & Communication Management",
  },
  {
    icon: <FaComments className="text-white text-3xl" />,
    title: "Chat, SMS & Voice Blast",
  },
  
  {
    icon: <FaSearch className="text-white text-3xl" />,
    title: "Data Analytics & Insights",
  },
];


const BackEnd = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center px-6 bg-[#0a2540] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bgc3.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Backend Services
          </h1>
          <p className="text-lg md:text-xl font-light drop-shadow-sm">
            Free your core teams from operational burden with our expert support
          </p>
        </div>
      </section>
<section className="py-6 px-6 bg-gradient-to-r from-blue-50 to-blue-100 relative">
      {/* Intro Section */}
      <section className="px-6 py-6 text-center max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Reliable Backend Support That Drives Business Focus
        </motion.h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Berg Infotech LLP offers a full suite of backend services so our clients can
          focus on growth while we handle their operational workload. From processing
          to digitization and query management, our solutions are built to ensure
          efficiency, accuracy, and peace of mind.
        </p>
      
<section className="py-10">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 md:p-10"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mb-10 text-center">
        Our Backend Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {backendServices.map((service, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-4 bg-[#f9fafb] rounded-xl hover:bg-white transition duration-300 border hover:shadow-md"
          >
            <div className="bg-[#0a2540] text-white rounded-xl p-3 flex items-center justify-center text-xl min-w-[48px] min-h-[48px]">
              {service.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0a2540]">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  {service.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

  </section>


      {/* Backend Process Representation */}
      <section className="py-8  bg-gradient-to-br from-[#0a2540] to-[#0f3a64] rounded-3xl" >
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl font-bold text-white">How We Support You</h2>
          <p className="text-white mt-2 max-w-2xl mx-auto">
            Our backend support flow is built to help you scale without stress:
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            "Requirement Gathering & SLA Agreement",
            "Resource Allocation & Team Setup",
            "Tool & Access Configuration",
            "Workflow Integration with Your Business",
            "Ongoing Execution & Daily Reporting",
            "Continuous Optimization & Feedback Loops",
          ].map((step, index) => (
            <motion.div
              key={index}
              className="bg-[#f0f4f8] rounded-xl p-6 shadow-md border-l-4 border-[#0a2540] hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl font-bold text-[#0a2540] mb-2">
                Step {index + 1}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">{step}</h4>
            </motion.div>
          ))}
        </div>
      </section> </section>
 
 
 
 
 
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

export default BackEnd;
