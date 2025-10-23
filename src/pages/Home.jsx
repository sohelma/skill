import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.skills || data);
        toast.success("Popular skills loaded successfully!");
      })
      .catch((err) => toast.error("Failed to load skills."));
  }, []);

  const topProviders = [...skills].sort((a, b) => b.rating - a.rating).slice(0, 4);

  const steps = [
    { id: 1, title: "Search Skill", description: "আপনার প্রয়োজনীয় skill খুঁজুন।", icon: "🔍" },
    { id: 2, title: "Select Provider", description: "Top rated provider বেছে নিন।", icon: "👨‍💻" },
    { id: 3, title: "Book & Pay", description: "Securely book এবং pay করুন।", icon: "💳" },
    { id: 4, title: "Get Service", description: "সেবা উপভোগ করুন।", icon: "✅" }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Popular Skills */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">Popular <span className="text-blue-600">Skills</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map(skill => (
            <div key={skill.skillId} className="border rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1 bg-white" data-aos="zoom-in">
              <img src={skill.image} alt={skill.skillName} className="w-full h-56 object-cover rounded-t-xl" />
              <div className="p-5">
                <h2 className="font-bold text-lg mb-1">{skill.skillName}</h2>
                <p className="text-gray-600 mb-1">Provider: {skill.providerName}</p>
                <p className="text-gray-600 mb-1">Price: ${skill.price}</p>
                <p className="text-yellow-600 font-medium">Rating: {skill.rating} ⭐</p>
                <Link to={`/skill/${skill.skillId}`} className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Rated Providers */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">⭐Top Rated <span className="text-blue-600">Providers</span> </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {topProviders.map(provider => (
              <div key={provider.skillId} className="border rounded-xl shadow hover:shadow-lg transition bg-white" data-aos="fade-up">
                <img src={provider.image} alt={provider.skillName} className="w-full h-56 object-cover rounded-t-xl" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{provider.providerName}</h3>
                  <p className="text-gray-600">{provider.skillName}</p>
                  <p className="text-yellow-600 font-medium my-1">Rating: {provider.rating} ⭐</p>
                  <p className="text-gray-700 mb-3">Price: ${provider.price}</p>
                  <Link to={`/skill/${provider.skillId}`} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">How <span className="text-blue-600">It Works</span> </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(step => (
            <div key={step.id} className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition" data-aos="zoom-in-up">
              <div className="text-5xl mb-3">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
