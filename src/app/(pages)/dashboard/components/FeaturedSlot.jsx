"use client";
import React, { useState } from "react";

const FeaturedSlot = ({
  isSlotActive,
  expiryDate,
  slotsTaken = 12,
  myArticles,
}) => {
  const [selectedArticle, setSelectedArticle] = useState("");
  const totalSlots = 30;
  const remainingSlots = totalSlots - slotsTaken;

  if (isSlotActive) {
    return (
      <div className="max-w-2xl mx-auto animate-fadeIn text-center p-10 border border-orange-200 rounded-3xl bg-orange-50">
        <div className="text-5xl mb-4">🚀</div>
        <h4 className="font-semibold! font-montserrat -tracking-[0.1rem]! text-orange-900 mb-2">
          Slot Active!
        </h4>
        <p className="text-orange-700">Your article is currently featured.</p>
        <div className="mt-6 bg-white p-4 rounded-xl border border-orange-100 font-bold">
          {expiryDate}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      <div className="text-center mb-10">
        <h4 className="font-semibold! font-montserrat -tracking-[0.1rem]! mb-2">
          Feature Your Article
        </h4>
        <p className="text-gray-500">
          Only {remainingSlots} slots remaining this month.
        </p>
      </div>

      {/* Select Article Section */}
      <div className="bg-white border p-6 rounded-2xl mb-8 shadow-sm">
        <label className="block text-sm font-bold mb-3 text-gray-700">
          Select Article to Feature
        </label>
        <select
          className="w-full p-4 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-black"
          value={selectedArticle}
          onChange={(e) => setSelectedArticle(e.target.value)}
        >
          <option value="">Choose an article from your library...</option>
          {myArticles.map((art) => (
            <option key={art.id} value={art.id}>
              {art.title}
            </option>
          ))}
        </select>
      </div>

      <div className="border rounded-3xl p-8 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h5 className="font-semibold! font-montserrat -tracking-[0.1rem]!">
            Total Payable
          </h5>
          <span className="text-3xl font-black">$10</span>
        </div>
        <button
          disabled={!selectedArticle}
          className={`w-full py-4 rounded-xl font-bold transition-all! cursor-pointer ${
            selectedArticle
              ? "bg-black text-white hover:bg-[#1d1d1d]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {selectedArticle
            ? "Reserve My Slot - $10"
            : "Select an article first"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedSlot;
