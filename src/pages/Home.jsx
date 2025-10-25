import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import SkillsCard from "../components/SkillCard";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";


const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data.skills || data))
      .catch((err) => console.error(err));
  }, []);

  // Top-rated providers (top 4)
  const topProviders = [...skills].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div className="space-y-16 ">
      {/* Hero Section */}
      <HeroSection />

      {/* Popular Skills */}
      <div className="px-4">
        <h2 className="text-3xl font-bold mb-6 text-center"> <span className="text-indigo-600">Popular</span> Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillsCard key={skill.skillId} skill={skill} />
          ))}
        </div>
      </div>

      {/* Top Rated Providers */}
      <div className="px-4">
        <h2 className="text-3xl font-bold mb-6 text-center"><span className="text-indigo-600">Top Rated</span> Providers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {topProviders.map((provider) => (
            <SkillsCard key={provider.skillId} skill={provider} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-4">
        <Testimonials></Testimonials>
      </div>

      {/* How It Works */}
      <div className="px-4">
        <HowItWorks></HowItWorks>
      </div>
    </div>
  );
};

export default Home;
