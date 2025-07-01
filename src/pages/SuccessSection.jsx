// File: SuccessSection.jsx

import React from "react";
import { ArrowBigRight, ArrowBigDown } from "lucide-react";

export default function SuccessSection() {
  return (
    <section className="relative bg-yellow-200 overflow-hidden py-20 px-6 md:px-16">
      {/* Decorative curve or pattern */}
      <div className="absolute inset-0 top-[-10%] bg-yellow-200 rounded-b-[50%] h-[150%] z-[-1]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight relative">
            <span className="underline decoration-[3px] decoration-black">Your</span> success is{" "}
            <span className="underline decoration-[3px] decoration-black">our</span> mission
            {/* Decorative arrows */}
            <span className="absolute top-[-20px] left-24 rotate-[-20deg] text-2xl">↑</span>
            <span className="absolute top-[-10px] right-16 rotate-[15deg] text-2xl">↓</span>
          </h2>

          <p className="text-black text-lg mt-6">
            You deserve better outcomes, insights, and conversations. You deserve to work with the
            best proactive teams that embrace complexity, adapt to ambiguity, and flex to your needs
            with just 24 hours notice.
          </p>

          <p className="text-black text-lg mt-4">
            Whether you’re a disruptive startup or an iconic brand, with Hugo you get more than
            outsourcing – you get what you deserve.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition">
            Take Hugo for a spin
          </button>
        </div>

        {/* RIGHT INFOGRAPHIC CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-6 relative w-full max-w-md mx-auto">
          {/* Process Steps */}
          <div className="flex justify-between items-center text-center mb-6">
            <div>
              <div className="bg-yellow-400 w-14 h-14 rounded-full flex items-center justify-center font-bold">
                Select
              </div>
              <p className="mt-2 text-sm">Team</p>
            </div>
            <div>
              <div className="bg-yellow-400 w-14 h-14 rounded-full flex items-center justify-center font-bold">
                Launch
              </div>
              <p className="mt-2 text-sm">2 Weeks</p>
            </div>
            <div>
              <div className="bg-yellow-400 w-14 h-14 rounded-full flex items-center justify-center font-bold">
                Iterate
              </div>
              <p className="mt-2 text-sm">Refine</p>
            </div>
          </div>

          {/* Profile & Stats */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/profile1.png"
              alt="User"
              className="w-14 h-14 rounded-full object-cover border"
            />
            <div>
              <p className="text-sm font-medium">Accuracy Score</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-green-500 h-2 rounded-full w-[80%]" />
              </div>
              <p className="text-xs text-green-600 mt-1">+10%</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="/clock-icon.png"
              alt="Clock"
              className="w-8 h-8 object-contain"
            />
            <div>
              <p className="text-sm font-medium">Ticket Response Time</p>
              <p className="text-xs text-gray-500">08 min 34 sec</p>
              <p className="text-xs text-red-600">-31%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
