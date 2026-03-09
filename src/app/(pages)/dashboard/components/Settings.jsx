"use client";
import React, { useState, useRef } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  // Image upload handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      <h4 className=" font-semibold! font-montserrat -tracking-[0.1rem]! mb-8">
        Settings
      </h4>

      {/* Tabs */}
      <div className="flex gap-8 border-b mb-8 text-sm">
        {["profile", "security", "notifications"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 capitalize ${
              activeTab === tab
                ? "border-b-2 border-black font-bold"
                : "text-gray-400 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content based on Tab */}

      {/* 1. PROFILE TAB */}
      {activeTab === "profile" && (
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="h-20 w-20 rounded-full bg-gray-200 overflow-hidden border border-gray-300 flex items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="h-full! w-full! object-cover"
                />
              ) : (
                <span className="font-bold text-2xl text-gray-400">UN</span>
              )}
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
            />

            <button
              onClick={() => fileInputRef.current.click()}
              className="text-sm font-bold border px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Change Photo
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">
                Full Name
              </label>
              <input
                className="w-full p-3 border rounded-xl mt-1"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">
                Username
              </label>
              <input
                className="w-full p-3 border rounded-xl mt-1"
                defaultValue="@johndoe"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">
              Bio
            </label>
            <textarea
              className="w-full p-3 border rounded-xl mt-1 h-24"
              defaultValue="Writer, Tech Enthusiast, and Gamer."
            />
          </div>
        </div>
      )}

      {/* 2. SECURITY TAB */}
      {activeTab === "security" && (
        <div className="space-y-6">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">
              Email Address
            </label>
            <input
              className="w-full p-3 border rounded-xl mt-1 bg-gray-50"
              defaultValue="john@example.com"
              disabled
            />
          </div>
          <button className="text-sm text-black font-bold hover:underline cursor-pointer">
            Reset Password
          </button>

          <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
            <h5 className="text-red-600 font-semibold! font-montserrat -tracking-[0.1rem]! ">
              Danger Zone
            </h5>
            <p className="text-xs text-red-500 mt-1 mb-3">
              Deleting your account will remove all your articles permanently.
            </p>
            <button className="text-xs bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 cursor-pointer">
              Delete Account
            </button>
          </div>
        </div>
      )}

      {/* 3. NOTIFICATIONS TAB */}
      {activeTab === "notifications" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center p-4 border rounded-xl">
            <div>
              <p className="font-bold">Email Notifications</p>
              <p className="text-xs text-gray-400">
                Receive alerts for new followers and comments.
              </p>
            </div>
            <input
              type="checkbox"
              className="h-6 w-6 accent-black cursor-pointer"
              defaultChecked
            />
          </div>
        </div>
      )}

      {/* Save Button */}
      <button className="mt-8 w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-[#1d1d1d] transition-all! cursor-pointer">
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
