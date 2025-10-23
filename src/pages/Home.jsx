import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data.skills || data))
      .catch((err) => console.error(err));
  }, []);

  // Filter top rated providers (rating ≥ 4.8)
  const topRated = skills.filter((s) => s.rating >= 4.8);

  return (
    <div className="bg-gray-50">
      {/* ✅ Hero Section */}
      <HeroSection />

      {/* ✅ Popular Skills Section */}
      <section className="py-12 px-6 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Popular <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.skillId}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 border border-gray-100"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-3">{skill.skillName}</h3>
              <p className="text-gray-600">Provider: {skill.providerName}</p>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-700">
                <span>💰 ${skill.price}</span>
                <span>⭐ {skill.rating}</span>
              </div>
              <Link
                to={`/skill/${skill.skillId}`}
                className="mt-4 inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Top Rated Providers Section */}
      {/* ✅ Top Rated Providers Section */}
<section className="py-16 bg-gradient-to-b from-blue-50 to-white px-6 lg:px-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
    Top Rated <span className="text-blue-600">Providers</span>
  </h2>

  <div className="flex flex-wrap justify-center gap-8">
    {topRated.map((provider) => (
      <div
        key={provider.skillId}
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 border border-gray-100 text-center w-72"
      >
        <img
          src={provider.image}
          alt={provider.skillName}
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100"
        />
        <h3 className="text-lg font-semibold">{provider.providerName}</h3>
        <p className="text-sm text-gray-600">{provider.skillName}</p>
        <p className="text-yellow-500 font-medium mt-1">⭐ {provider.rating}</p>
      </div>
    ))}
  </div>
</section>


      {/* ✅ How It Works Section */}
      <section className="py-20 bg-blue-600 text-white text-center px-6 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse Skills</h3>
            <p className="text-blue-100 max-w-xs">
              Explore a wide range of skills and choose what suits your passion and career.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect With Provider</h3>
            <p className="text-blue-100 max-w-xs">
              Learn directly from experienced instructors and professionals.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
            <p className="text-blue-100 max-w-xs">
              Join the session, practice, and upgrade your skills anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t bg-white">
        © {new Date().getFullYear()} Skill App — All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
