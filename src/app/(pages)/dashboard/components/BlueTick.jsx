"use client";
import React from "react";

const BlueTick = ({ isVerified, expiryDate }) => {
  // 1. Agar User Verified Hai (Success State)
  if (isVerified) {
    return (
      <div className="max-w-2xl mx-auto animate-fadeIn bg-green-50 border border-green-200 rounded-3xl p-10 text-center">
        <div className="text-6xl mb-6">✅</div>
        <h4 className=" font-semibold! font-montserrat -tracking-[0.1rem]! text-green-900 mb-2">
          You are Verified!
        </h4>
        <p className="text-green-700 mb-8">
          Your account is currently boosted with priority ranking and premium
          visibility.
        </p>

        <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm inline-block">
          <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">
            Subscription Valid Until
          </p>
          <p className="text-xl font-black text-black">{expiryDate || "N/A"}</p>
        </div>

        <div className="mt-8">
          <button className="text-sm text-green-700 underline hover:text-green-900">
            Manage Subscription
          </button>
        </div>
      </div>
    );
  }

  // 2. Agar User Verified Nahi Hai (Purchase State)
  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      <div className="text-center mb-10">
        <h4 className=" font-semibold! font-montserrat -tracking-[0.1rem]! mb-2">
          Get Verified
        </h4>
        <p className="text-gray-500">
          Boost your credibility and reach with the exclusive Blue Tick.
        </p>
      </div>

      <div className="border border-blue-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-center mb-8">
          <h5 className="font-semibold! font-montserrat -tracking-[0.1rem]! flex items-center gap-2">
            Premium Verification
          </h5>
          <div className="text-right">
            <span className="text-3xl font-black">$3</span>
            <span className="text-gray-400">/month</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          {[
            "Official Blue Tick next to your name",
            "Priority ranking in homepage feeds",
            "Article approval within 1 hour",
            "Premium badge on all your posts",
            "Increased reader visibility & trust",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <span className="text-blue-500 font-bold">✔</span> {item}
            </li>
          ))}
        </ul>

        <button className="w-full py-4 bg-black text-white rounded-xl font-bold  transition-all! active:scale-[0.98] cursor-pointer">
          Pay $3 to Activate Now
        </button>
      </div>
    </div>
  );
};

export default BlueTick;
