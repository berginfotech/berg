import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Outbound",
    image: "/oub.jpg",
    description:
      "Engaging your audience through proactive outreach for sales, surveys, and lead generation.",
    link: "/services/outbound",
  },
  {
    title: "Inbound",
    image: "/inb.png",
    description:
      "Handling inquiries, requests, and customer interactions with professionalism and empathy.",
    link: "/services/inbound",
  },
  {
    title: "Backend",
    image: "./back.jpg",
    description:
      "Managing your behind-the-scenes operations so you can stay focused on growth and strategy.",
    link: "/services/backend",
  },
  {
    title: "Customer Support",
    image: "/cs.jpg",
    description:
      "24/7 customer care solutions designed to increase satisfaction and brand loyalty.",
    link: "/services/customer-support",
  },
  {
    title: "Data Management",
    image: "/sl.png",
    description:
      "Secure and organized data handling to simplify processes and power smarter decisions.",
    link: "/services/data-management",
  },
  {
    title: "Others",
    image: "/dm2.jpeg",
    description:
      "Custom communication and operations support tailored to your unique business needs.",
    link: "/services/others",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="w-full font-sans bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg11.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Services
          </h1>
        </div>
      </section>

    {/* TRANSITION SECTION */}
<section className="relative py-24 px-6 md:px-16 bg-white text-center z-20 overflow-hidden">

  {/* TOP SVG DECORATION */}
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
    <svg
      className="relative block w-full h-20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
    >
      <path
        d="M321.39 56.44C200.11 69.57 0 120 0 120h1200V0c0 0-126.29 43.47-286.17 55.3-161.55 11.98-301.23-27.13-426.39-27.13-110.58 0-234.4 27.13-366.05 28.27z"
        fill="#f3f4f6"
      />
    </svg>
  </div>

  {/* MAIN CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-3xl mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      Empowering Businesses to Grow with Confidence
    </h2>
    <p className="text-gray-600 text-lg">
      At Berg Infotech, we tailor support services that adapt to your needs—whether it’s inbound care, outbound outreach, or seamless backend efficiency.
    </p>
  </motion.div>

  {/* BOTTOM SVG DECORATION */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
    <svg
      className="relative block w-full h-24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
    >
      <path
        d="M0,0V46.29c47.42,22,98.57,35.93,157,42.69,86.25,10.11,172-3.06,258-17.87s172-29.3,258-16c61.18,10.13,122.36,27.52,183.54,30.21,55.79,2.44,111.57-7.41,168.46-19.17V0Z"
        fill="#f3f4f6"
      />
    </svg>
  </div>

</section>


      {/* SERVICES SECTION */}
      <section className="relative bg-gradient-to-br from-[#0a2540] to-[#0f3a64] px-6 md:px-16 py-20 overflow-hidden">
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
}
