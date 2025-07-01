import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import toast, { Toaster } from "react-hot-toast";

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    driveLink: "", // Google Drive link
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.interest ||
      !formData.driveLink
    ) {
      toast.error("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.driveLink.startsWith("https://")) {
      toast.error("Please enter a valid Google Drive link.");
      setIsSubmitting(false);
      return;
    }

    try {
      await addDoc(collection(db, "jobApplications"), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        interest: formData.interest,
        resumeUrl: formData.driveLink,
        createdAt: serverTimestamp(),
      });

      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Submission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full font-sans bg-white text-gray-800">
      <Toaster position="top-right" />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg 9.png')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Careers</h1>
        </div>
      </section>

      {/* Form Section */}
      <section className=" px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Grow with Berg Infotech
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Berg Infotech, we empower global businesses with reliable outsourcing solutions.
            Join a team that’s reshaping the future of support services.
          </p>
        </div>

        <div className="mt-16 bg-white border rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Apply Now</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Google Drive Resume Link *</label>
              <input
                type="url"
                name="driveLink"
                value={formData.driveLink}
                onChange={handleChange}
                placeholder="https://drive.google.com/..."
                className="w-full border px-4 py-2 rounded-lg"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Make sure it’s publicly accessible or viewable with the link.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Interest *</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg"
                required
              >
                <option value="" disabled>Select a role</option>
                <option value="lead-generation">Lead Generation</option>
                <option value="subject-matter-expert">Subject Matter Expert</option>
                <option value="team-lead">Team Lead</option>
                <option value="quality-analyst">Quality Analyst</option>
              </select>
            </div>
           <div className="col-span-1 md:col-span-2">
  <button
    type="submit"
    disabled={isSubmitting}
    className={`flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 ${
      isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
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
    {isSubmitting ? "Submitting..." : "Submit Application"}
  </button>
</div>

          </form>

        
        </div>
      </section>
    </div>
  );
}
