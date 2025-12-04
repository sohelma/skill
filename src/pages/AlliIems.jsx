// src/pages/AllItems.jsx
import React, { useEffect, useState } from "react";
import SkillsCard from "../components/SkillCard";

const AllItems = () => {
  const [skills, setSkills] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // asc / desc
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error loading skills.json:", err));
  }, []);

  // Price অনুযায়ী Sorting
  const sortedSkills = [...skills].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  // Category অনুযায়ী Filtering
  const filteredSkills =
    filterCategory === "all"
      ? sortedSkills
      : sortedSkills.filter((skill) => skill.category === filterCategory);

  // Unique Categories
  const categories = ["all", ...new Set(skills.map((skill) => skill.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Items</h1>

      {/* Filter & Sort */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        <div>
          <label className="mr-2 font-semibold">Sort by Price:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border px-3 py-1 rounded"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div>
          <label className="mr-2 font-semibold">Filter by Category:</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border px-3 py-1 rounded"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredSkills.map((skill) => (
          <SkillsCard key={skill.skillId} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default AllItems;
