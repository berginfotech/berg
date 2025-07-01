import React from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaTasks, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const services = [
  {
    icon: <FaRegEdit className="text-3xl text-white" />,
    title: "Data Entry",
    description:
      "Accurate and efficient data entry solutions tailored to your business needs.",
  },
  {
    icon: <FaDatabase className="text-3xl text-white" />,
    title: "Data Management",
    description:
      "Organized storage, retrieval, and control of your growing business data.",
  },
  {
    icon: <FaTasks className="text-3xl text-white" />,
    title: "Data Processing",
    description:
      "Transform raw data into valuable insights through automated workflows.",
  },
];

const steps = [
  "Initial Consultation & Data Audit",
  "Tailored Data Strategy Design",
  "Data Cleansing & Structuring",
  "System Integration & Workflow Setup",
  "Ongoing Data Monitoring & Updates",
];

const DataManagement = () => {
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
            Data Management Services
          </h1>
          <p className="text-lg md:text-xl font-light drop-shadow-sm">
            Helping you harness the power of your data with precision and care.
          </p>
        </div>
      </section>

      {/* Intro Section */}

      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-blue-100 relative">
      <section className="px-6 py-16  text-center max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let Your Data Work For You
        </motion.h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Business data is growing at an exponential rate—up to 50% annually.
          Without the right strategy and tools, this can become overwhelming. At{" "}
          <strong>Berg Infotech LLP</strong>, our expertise and 14+ years of
          experience make us your ideal partner in turning information chaos into business clarity.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-[#f5f7fa] py-6">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-[#0a2540] text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section> </section>

      {/* Step-by-Step Box Representation */}
      <section className="py-20 text-white bg-gradient-to-br from-[#0a2540] to-[#0f3a64]">
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl font-bold text-white">Our Process</h2>
          <p className="text-white mt-2 max-w-2xl mx-auto">
            A streamlined, strategic approach to managing your data from start to finish.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-[#f0f4f8] rounded-xl p-6 shadow-md border-l-4 border-[#0a2540] hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="text-4xl font-bold text-[#0a2540] mb-2">
                Step {idx + 1}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">{step}</h4>
            </motion.div>
          ))}
        </div>
      </section>
      
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

export default DataManagement;
