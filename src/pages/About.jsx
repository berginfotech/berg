import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaSmile, FaGlobe } from "react-icons/fa";

const images = ["/images1.png", "/images2.png"];

const missionItems = [
  {
    icon: <FaUsers className="text-3xl text-indigo-600 mb-3" />,
    title: "Empower Clients",
    desc: "We help businesses grow and scale through tailored customer experience solutions.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-indigo-600 mb-3" />,
    title: "Drive Innovation",
    desc: "Integrating modern technology to deliver fast, reliable, and intelligent services.",
  },
  {
    icon: <FaSmile className="text-3xl text-indigo-600 mb-3" />,
    title: "Customer Delight",
    desc: "Dedicated to ensuring exceptional service with measurable outcomes.",
  },
  {
    icon: <FaGlobe className="text-3xl text-indigo-600 mb-3" />,
    title: "Global Reach",
    desc: "Supporting international clients with multilingual, round-the-clock solutions.",
  },
];

const steps = [
  {
    title: "Define Goals",
    description: "Understand client objectives and unique challenges.",
  },
  {
    title: "Build Strategy",
    description: "Develop customized business communication solutions tailored for growth.",
  },
  {
    title: "Deliver Results",
    description: "Achieve KPI and client satisfaction through proactive execution.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!scrollContainer) return;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      scrollAmount += 320;
      if (scrollAmount >= maxScroll) scrollAmount = 0;

      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    const interval = setInterval(scroll, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-slate-800 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bgc3.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            About Us
          </h1>
        </div>
      </section>

   <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 pt-24 pb-20 gap-10 overflow-hidden">

  {/* Diagonal background layer */}
  <svg
    className="absolute top-0 left-0 w-full h-full pointer-events-none -z-20"
    preserveAspectRatio="none"
    viewBox="0 0 100 100"
  >
    <polygon fill="#E0F7FA" points="0,100 100,0 100,100" />
  </svg>

  
   

  {/* Dotted Pattern Overlay */}
  <svg className="absolute top-6 left-8 w-28 h-28 opacity-10 z-0" viewBox="0 0 100 100" fill="none">
    <defs>
      <pattern id="dots-splash" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="#06b6d4" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#dots-splash)" />
  </svg>

  {/* Decorative Stars (subtle twinkle) */}
  <div className="absolute top-20 right-20 z-0 animate-pulse">
    <svg width="30" height="30" fill="none" className="text-indigo-300">
      <path d="M15 0 L18 12 L30 15 L18 18 L15 30 L12 18 L0 15 L12 12 Z" fill="currentColor" />
    </svg>
  </div>

  {/* Glassmorphic Gradient Ring */}
  <div className="absolute right-10 bottom-[-50px] w-[200px] h-[200px] bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full blur-3xl opacity-30 z-0"></div>

  {/* Diagonal stripes top right */}
  <svg
    className="absolute top-0 right-0 w-40 opacity-10 rotate-45"
    viewBox="0 0 100 100"
    fill="none"
  >
    <defs>
      <pattern id="lines" patternUnits="userSpaceOnUse" width="10" height="10">
        <path d="M0,0 L10,10" stroke="#94a3b8" strokeWidth="2" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#lines)" />
  </svg>

  {/* Curved Wave Top Right */}
  <svg
    className="absolute top-[-50px] right-0 w-72 h-32 z-0"
    viewBox="0 0 600 200"
    fill="none"
  >
    <path
      d="M0 100 C150 0, 450 200, 600 100"
      stroke="#e0f2fe"
      strokeWidth="4"
      fill="none"
    />
  </svg>
   
  {/* TEXT CONTENT */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="flex-1 text-center md:text-left relative z-10 " 
  >
    <p className="text-teal-600 uppercase font-semibold mb-2 text-sm tracking-widest">
      Delivering Excellence
    </p>
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 text-gray-900">
      Tailored Customer Engagement Services for Modern Businesses
    </h1>
    <p className="text-gray-600 text-lg mb-6 max-w-xl mx-auto md:mx-0">
      At <span className="font-bold text-gray-900">BERG INFOTECH LLP</span>, we empower companies of all sizes with ethical, results-driven outsourcing solutions. We’re your trusted partner in transforming customer interactions and scaling success.
    </p>
    <a
      href="#about-section"
      className="inline-block bg-teal-600 hover:bg-gradient-to-r from-teal-600 to-indigo-600 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
    >
      More About Us
    </a>
  </motion.div>

  {/* VIDEO DISPLAY */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="flex-1 w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] relative z-10"
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover rounded-xl shadow-2xl"
    >
      <source src="/vedio1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </motion.div>
</section>

  <section
  id="about-section"
  className="relative bg-gradient-to-br from-[#0a2540] to-[#0f3a64] py-24 px-6 lg:px-24 text-center text-white overflow-hidden"
>
  {/* Top Wave Transition */}
  <svg className="absolute top-0 left-0 w-full rotate-180 z-0" viewBox="0 0 1440 100" preserveAspectRatio="none">
    <path fill="#0a2540" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" />
  </svg>

  {/* Top Decorative Blob */}
  <svg className="absolute top-12 left-[-60px] w-[200px] opacity-10 z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="#60a5fa" d="M51.6,-59.1C66.3,-45.7,76.4,-22.9,76.4,-0.5C76.4,21.8,66.2,43.7,51.5,56.8C36.9,69.9,18.4,74.3,-2.1,76.1C-22.6,77.9,-45.2,77.1,-61.3,64.6C-77.4,52.2,-87,28.1,-83.4,6.8C-79.8,-14.6,-63,-29.1,-47.6,-42.2C-32.1,-55.2,-16.1,-66.8,3,-69.2C22.2,-71.6,44.4,-64.9,51.6,-59.1Z" transform="translate(100 100)" />
  </svg>

  {/* Floating Sparkle Dots */}
  <svg className="absolute top-1/3 left-2/3 w-24 h-24 opacity-10 animate-pulse z-0" viewBox="0 0 100 100" fill="none">
    <circle cx="10" cy="10" r="2" fill="white" />
    <circle cx="30" cy="20" r="1.5" fill="white" />
    <circle cx="50" cy="5" r="1" fill="white" />
    <circle cx="70" cy="25" r="1.5" fill="white" />
    <circle cx="90" cy="15" r="2" fill="white" />
  </svg>

  {/* Dot Grid Pattern (Bottom Right) */}
  <svg className="absolute bottom-10 right-10 w-40 h-40 opacity-10 z-0" viewBox="0 0 100 100" fill="none">
    <defs>
      <pattern id="dotPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="white" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#dotPattern)" />
  </svg>

  {/* Company Info Content */}
  <div className="relative z-10 max-w-5xl mx-auto">
    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
      Who We Are
    </h3>
    <p className="text-lg md:text-xl text-slate-100 font-light leading-relaxed">
      At <span className="font-semibold text-white">BERG INFOTECH LLP</span>, we redefine the way modern businesses engage with their customers. 
      Our dynamic outsourcing solutions fuel innovation, enhance client experiences, and streamline operations to unlock sustainable growth.
    </p>
    <p className="mt-6 text-lg md:text-xl text-slate-100 font-light leading-relaxed">
      Whether it's inbound support, outbound support, data management, backend, customer support excellence  our global team delivers consistent, measurable results tailored to your industry’s needs.
    </p>
  </div>

  {/* Bottom Wave Divider */}
  <svg
    className="absolute bottom-0 left-0 w-full h-24 md:h-32 -z-10 rotate-180"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#fff"
      d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,106.7C672,107,768,117,864,106.7C960,96,1056,64,1152,53.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    />
  </svg>
</section>


     <section
  className="relative py-20 px-6 lg:px-24 overflow-hidden bg-white"
  style={{
    backgroundImage: `url('https://www.svgbackgrounds.com/wp-content/uploads/2021/06/subtle-prism.svg')`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-indigo-50/60 to-white/80 z-0"></div>

 
  {/* Floating Sparkle Dots */}
  <svg className="absolute top-1/3 left-2/3 w-24 h-24 opacity-10 animate-pulse z-0" viewBox="0 0 100 100" fill="none">
    <circle cx="10" cy="10" r="2" fill="white" />
    <circle cx="30" cy="20" r="1.5" fill="white" />
    <circle cx="50" cy="5" r="1" fill="white" />
    <circle cx="70" cy="25" r="1.5" fill="white" />
    <circle cx="90" cy="15" r="2" fill="white" />
  </svg>

  {/* Dot Grid Pattern (Bottom Right) */}
  <svg className="absolute bottom-10 right-10 w-40 h-40 opacity-10 z-0" viewBox="0 0 100 100" fill="none">
    <defs>
      <pattern id="dotPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="white" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#dotPattern)" />
  </svg>

  {/* Content */}
  <section className="py-4 px-4 relative">
  <div className="relative z-10 ">
    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-slate-900">
      Our Mission
    </h2>

    <div
      ref={scrollRef}
      className="flex space-x-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory px-2 no-scrollbar"
    >
      {missionItems.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="min-w-[250px] lg:min-w-[300px] bg-white border border-indigo-100 rounded-2xl shadow-md p-6 snap-center transition-all duration-300 hover:bg-gradient-to-br from-indigo-100 to-white hover:shadow-xl hover:border-indigo-300"
        >
          <div className="mb-3">{item.icon}</div>
          <h4 className="text-xl font-semibold text-indigo-600 mb-2">
            {item.title}
          </h4>
          <p className="text-slate-700">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Bottom Wave SVG Divider */}
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#f9fafb"
      fillOpacity="1"
      d="M0,64L60,80C120,96,240,128,360,133.3C480,139,600,117,720,90.7C840,64,960,32,1080,26.7C1200,21,1320,43,1380,53.3L1440,64V160H1380C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160H0Z"
    />
  </svg>
</section>
</section>
 <section className="relative bg-gradient-to-br from-[#0a2540] to-[#0f3a64] py-24 px-6 lg:px-24 overflow-hidden">

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

  <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    
    {/* Vision Text & Steps */}
    <div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white text-center lg:text-left mb-10"
      >
        Our Vision
      </motion.h2>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="p-6 bg-gradient-to-tr from-white/90 to-indigo-50/90 backdrop-blur-sm border border-white/30 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:bg-indigo-100/90"
          >
            <h4 className="text-lg font-semibold text-indigo-800 mb-1">
              {step.title}
            </h4>
            <p className="text-slate-700 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Vision Image */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full relative before:absolute before:inset-0 before:rounded-3xl before:bg-white/10 before:blur-xl before:z-[-1]"
    >
      <img
        src={images[currentIndex]}
        alt="Vision"
        className="w-full rounded-3xl shadow-2xl border border-white/30 transition-all duration-500"
      />
    </motion.div>
  </div>

  {/* Bottom Wave Divider */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
    <svg
      className="relative block w-[calc(100%+1.3px)] h-[100px]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
    >
      <path
        d="M0,0V46.29c47.32,22.07,104.84,29,158,17.68,70-15.42,136-57.63,207-57.7,70.48-.07,135.71,41.64,206,53.73C646.57,74,715.11,53.6,784,41.41c70.79-12.42,142.67-4.63,213,6.09V0Z"
        fill="#0a2540"
      />
    </svg>
  </div>
</section>
</div>
  );
}
