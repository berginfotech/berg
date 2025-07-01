import { useEffect, useState } from "react";
import { FiActivity, FiShield, FiTrendingUp, FiUsers } from "react-icons/fi";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-router-dom";



import { FiPhoneCall, FiTarget } from "react-icons/fi"; // Add relevant icons
// You can also import from other libraries like AiIcons or HiIcons if needed

import { useNavigate } from "react-router-dom";



const highlights = [
  {
    icon: <FiPhoneCall className="h-8 w-8 text-indigo-600" />,
    title: "Tele Sales",
    description: "Boost conversions with strategic outbound calling and persuasive engagement.",
  },
  {
    icon: <FiTarget className="h-8 w-8 text-indigo-600" />,
    title: "Lead Generation",
    description: "Fill your pipeline with high-quality prospects using data-driven targeting.",
  },
  {
    icon: <FiActivity className="h-8 w-8 text-indigo-600" />,
    title: "Smart Automation",
    description: "Accelerate productivity with AI-driven tools.",
  },
  {
    icon: <FiUsers className="h-8 w-8 text-indigo-600" />,
    title: "Customer-Centric",
    description: "Deliver stellar experiences at every touchpoint.",
  },
];
const services = [
  { 
    title: "Outbound",
    image: "/oub.jpg",
    description:
      "Engaging your audience through proactive outreach for sales, surveys, and lead generation.",
    link: "./pages/services/outbound",
  },
  {
    title: "Inbound",
    image: "/inb.png",
    description:
      "Handling inquiries, requests, and customer interactions with professionalism and empathy.",
    link:"./pages/services/inbound",
  },
  {
    title: "Backend",
    image: "./back.jpg",
    description:
      "Managing your behind-the-scenes operations so you can stay focused on growth and strategy.",
    link: "./pages/services/backend",
  },
  {
    title: "Customer Support",
    image: "/cs.jpg",
    description:
      "24/7 customer care solutions designed to increase satisfaction and brand loyalty.",
    link: "./pages/services/customer-support",
  },
  {
    title: "Data Management",
    image: "/sl.png",
    description:
      "Secure and organized data handling to simplify processes and power smarter decisions.",
    link: "./pages/services/data-management",
  },
  {
    title: "Others",
    image: "/dm2.jpeg",
    description:
      "Custom communication and operations support tailored to your unique business needs.",
    link: "./pages/services/others",
  },
];


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
   <main className="bg-black bg-opacity-60 min-h-screen">
  {/* HERO SECTION */}
  <section className="relative min-h-[80vh] flex items-end justify-center px-6 pb-12">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/b2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
    </div>
<div className="relative z-10 text-center max-w-4xl">
  <p className="text-yellow-400 text-xl mb-3">Since 2020</p>
  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white/50 drop-shadow-lg">
    Smart Support Solutions for Modern Businesses
  </h1>
</div>

  </section>


<section className="relative bg-[#f8f9fb] px-4 sm:px-8 md:px-16 py-20 overflow-hidden">
  {/* Top Left Circle Accent */}
  <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-2xl pointer-events-none"></div>

  {/* Bottom Right Circle Accent */}
  <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 rounded-full opacity-20 blur-2xl pointer-events-none"></div>

  {/* Dot Grid Top Right */}
  <svg
    className="absolute top-10 right-10 w-28 h-28 text-gray-300 opacity-20"
    fill="none"
    viewBox="0 0 100 100"
  >
    <defs>
      <pattern
        id="smallDots"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="1" cy="1" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#smallDots)" />
  </svg>

  {/* Corner Line Decoration */}
  <svg
    className="absolute top-0 left-0 w-24 h-24 opacity-10"
    viewBox="0 0 100 100"
  >
    <line x1="0" y1="100" x2="100" y2="0" stroke="#94a3b8" strokeWidth="2" />
  </svg>

  {/* Wavy Divider at the Bottom */}
  <svg
    className="absolute bottom-0 left-0 w-full h-20 text-blue-100 opacity-30"
    preserveAspectRatio="none"
    viewBox="0 0 1440 320"
  >
    <path
      fill="currentColor"
      d="M0,256L80,245.3C160,235,320,213,480,192C640,171,800,149,960,160C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    ></path>
  </svg>

 {/* Growth Section */}
<div className="text-center mb-2 relative z-10">
  <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540] drop-shadow">
    Grow Faster, Worry Less
  </h2><br/>
  <p className="text-base md:text-lg text-slate-900 mb-1 drop-shadow-sm">
    We empower your business with intelligent, scalable assistance.
  </p>
  <p className="text-base text-[#0a2540] mb-3 drop-shadow-sm">
    At{" "}
    <span className="text-blue-400 font-semibold">Berg Infotech</span>,
    we provide ethical, efficient, and results-driven outsourcing
    solutions.
  </p>
  <em className="block text-[#0a2540] text-base mb-4 italic drop-shadow-sm">
    "What we give is what we get."
  </em>
  <Link to="/about">
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-full transition duration-300 shadow-md">
      More About Us
    </button>
  </Link>
</div>


</section>

     {/* SERVICES SECTION */}
          <section className="relative bg-gradient-to-br from-[#0a2540] to-[#0f3a64] px-6 md:px-16 py-12 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16 relative z-10"
            >
              <h2 className="text-blue-300 text-sm uppercase tracking-widest mb-3 font-semibold">
                Our Solutions
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-snug">
                What We Offer
              </h3>
              <p className="text-blue-100 mt-4 max-w-xl mx-auto text-base md:text-lg">
                Explore our reliable support and engagement services designed to help your business thrive.
              </p>
            </motion.div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => navigate(service.link)}
                  className="cursor-pointer relative group bg-white border border-slate-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:border-blue-500"
                >
                  <div className="overflow-hidden rounded-t-3xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#3b82f670] to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
    
            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
            >
              <path fill="#0a2540" d="M0,0 C480,100 960,0 1440,100 L1440,00 L0,0 Z" />
            </svg>
    
     
          </section>



          
{/* STATS SECTION */}
<section className="py-10 px-4 bg-gradient-to-r from-blue-50 to-blue-100 relative">
  <section className="py-8 px-4 md:px-10">
    <div className="text-center mb-6">
      <h2 className="text-2xl font-semibold text-gray-900">Our Impact in Numbers</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div>
        <h4 className="text-2xl font-bold text-blue-600">
          <CountUp end={1485} duration={15.5} separator="," />+
        </h4>
        <p className="text-gray-500 mt-1 text-sm">Trusted Clients</p>
      </div>
      <div>
        <h4 className="text-2xl font-bold text-blue-600">
          <CountUp end={520} duration={15} separator="," />+
        </h4>
        <p className="text-gray-500 mt-1 text-sm">Calls Per Day</p>
      </div>
      <div>
        <h4 className="text-2xl font-bold text-blue-600">
          <CountUp end={2020} duration={15} separator="," />
        </h4>
        <p className="text-gray-500 mt-1 text-sm">Year of Establishment</p>
      </div>
      <div>
        <h4 className="text-2xl font-bold text-blue-600">
          <CountUp end={25} duration={15} />
        </h4>
        <p className="text-gray-500 mt-1 text-sm">Professional Staff</p>
      </div>
    </div>
  </section>
</section>

    </main>
  );
}
