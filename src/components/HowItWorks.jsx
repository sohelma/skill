import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    id: 1,
    title: "Search Skill",
    description: "Find the skill you want to learn from our extensive catalog.",
    icon: "🔍"
  },
  {
    id: 2,
    title: "Select Provider",
    description: "Choose a top-rated provider that fits your needs.",
    icon: "👨‍💻"
  },
  {
    id: 3,
    title: "Book & Pay",
    description: "Securely book a session and complete your payment online.",
    icon: "💳"
  },
  {
    id: 4,
    title: "Enjoy Learning",
    description: "Attend your session and enjoy learning from experts.",
    icon: "✅"
  }
];

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
<div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-12 ">
  <h2 className="text-3xl font-bold text-center mb-12">
    <span className="text-indigo-600">How It</span> Works
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {steps.map((step) => (
      <div
        key={step.id}
        data-aos="fade-up"
        className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >
        {/* icon container */}
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-300 to-pink-200 text-white text-4xl shadow-lg">
          {step.icon}
        </div>

        {/* Card*/}
        <h3 className="text-xl font-bold mb-3 text-gray-600 text-center">{step.title}</h3>
        <p className="text-gray-400 text-center leading-relaxed">{step.description}</p>

        {/*accent line */}
        <div className="h-1 w-16 bg-indigo-200 mx-auto mt-6 rounded-full opacity-50"></div>
      </div>
    ))}
  </div>
</div>


  );
};

export default HowItWorks;
