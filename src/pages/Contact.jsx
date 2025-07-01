import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { db } from '../firebase'; // adjust path as needed
import toast, { Toaster } from "react-hot-toast";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message: ", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full font-sans bg-white text-gray-800">
      <Toaster position="top-right" reverseOrder={false} />

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg11.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-20 bg-gradient-to-b from-white to-gray-100">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

          <div className="flex items-start space-x-4">
            <MapPin className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Office Location</h3>
              <p>
                WZ-409C, T/F Plot#1 Janak Park,<br />Hari Nagar, New Delhi-110064
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="text-green-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Give Us A Call</h3>
              <p>+91 9899582618</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="text-red-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Send Us A Message</h3>
              <p>info@berginfotech.co.in</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl rounded-2xl p-8 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-700">Send Us a Message</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              aria-label="Your Name"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact Number"
              pattern="[0-9]{10}"
              maxLength={10}
              required
              aria-label="Contact Number"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            aria-label="Email"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            aria-label="Subject"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your Message"
            required
            aria-label="Message"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-600 text-white px-6 py-3 w-40 rounded-xl shadow-md transition-all ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >

             {isSubmitting && (
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    )}
    {isSubmitting ? "Submitting..." : "Submit"}
  </button></motion.form>
</section>
           
      {/* Google Map */}
      <div className="w-full h-[400px] mt-10">
        <iframe
          title="Berg Infotech Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0901239981144!2d77.10746767596382!3d28.627060884328326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0316547a17b1%3A0xf1178a370fe3515f!2sBerg%20Infotech%20LLP!5e0!3m2!1sen!2sin!4v1751079156671!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
