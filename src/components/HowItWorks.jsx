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
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8"><span className="text-indigo-600">How It</span> Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            data-aos="fade-up"
            className="text-center p-6 border rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
