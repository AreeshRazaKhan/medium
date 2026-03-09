// components/dashboard/Stats.jsx
"use client";
import React from "react";

const Stats = () => {
  // Dummy Data (Inhe baad mein backend se replace karenge)
  const userStats = {
    currentLevel: 10,
    badge: "Bronze",
    totalArticles: 45,
    nextLevelGoal: 100,
    totalViews: "12.4k",
    totalLikes: "850",
    avgReadTime: "3 min",
  };

  const levels = [
    {
      level: 10,
      req: 100,
      badge: "Bronze",
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
    {
      level: 5,
      req: 300,
      badge: "Silver",
      color: "text-gray-500",
      bg: "bg-gray-100",
    },
    {
      level: 2,
      req: 700,
      badge: "Gold",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      level: 1,
      req: 1000,
      badge: "Diamond",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
  ];

  const progressPercentage =
    (userStats.totalArticles / userStats.nextLevelGoal) * 100;

  return (
    <div className="animate-fadeIn space-y-8">
      {/* 1. Header & Level Card */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 p-6 border rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Current Status
              </p>
              <h4 className=" font-semibold! font-montserrat -tracking-[0.1rem]! mt-1">
                Level {userStats.currentLevel}
              </h4>
              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold ${levels[0].bg} ${levels[0].color}`}
              >
                {userStats.badge} Badge
              </span>
            </div>
            <div className="h-16 w-16 bg-white rounded-full border-4 border-orange-400 flex items-center justify-center shadow-inner">
              <span className="text-2xl">🥉</span>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-gray-600">
                Progress to Level 9
              </span>
              <span className="font-bold text-black">
                {userStats.totalArticles} / {userStats.nextLevelGoal} Articles
              </span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className="bg-orange-500 h-full transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-400 mt-3 italic">
              Write {userStats.nextLevelGoal - userStats.totalArticles} more
              articles to unlock Level 9!
            </p>
          </div>
        </div>

        {/* 2. Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-80">
          <div className="p-4 border rounded-xl bg-white flex flex-col justify-center">
            <span className="text-gray-400 text-xs font-bold uppercase">
              Total Views
            </span>
            <span className="text-2xl font-bold">{userStats.totalViews}</span>
          </div>
          <div className="p-4 border rounded-xl bg-white flex flex-col justify-center">
            <span className="text-gray-400 text-xs font-bold uppercase">
              Likes
            </span>
            <span className="text-2xl font-bold">{userStats.totalLikes}</span>
          </div>
          <div className="p-4 border rounded-xl bg-white flex flex-col justify-center">
            <span className="text-gray-400 text-xs font-bold uppercase">
              Articles
            </span>
            <span className="text-2xl font-bold">
              {userStats.totalArticles}
            </span>
          </div>
          <div className="p-4 border rounded-xl bg-white flex flex-col justify-center">
            <span className="text-gray-400 text-xs font-bold uppercase">
              Avg. Read
            </span>
            <span className="text-2xl font-bold">{userStats.avgReadTime}</span>
          </div>
        </div>
      </div>

      {/* 3. Level Rules Table */}
      <div className="border rounded-2xl overflow-hidden bg-white">
        <div className="p-5 border-b bg-gray-50">
          <h5 className=" font-semibold! font-montserrat -tracking-[0.1rem]!">
            Leveling System & Rewards
          </h5>
        </div>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-white border-b text-gray-400 uppercase text-[10px] tracking-widest">
              <th className="px-6 py-4 font-bold">Level</th>
              <th className="px-6 py-4 font-bold">Requirement</th>
              <th className="px-6 py-4 font-bold">Badge</th>
              <th className="px-6 py-4 font-bold">Perks</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {levels.map((l) => (
              <tr key={l.level} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold">Level {l.level}</td>
                <td className="px-6 py-4 text-gray-600">{l.req} Articles</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded text-[10px] font-bold ${l.bg} ${l.color}`}
                  >
                    {l.badge}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs text-gray-500">
                  {l.level === 1
                    ? "Custom Branding + Diamond Support"
                    : "Featured Boost + Profile Highlight"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stats;
