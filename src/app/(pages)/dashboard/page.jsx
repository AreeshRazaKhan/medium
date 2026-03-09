"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MyArticles from "./components/MyArticles";
import Stats from "./components/Stats";
import BlueTick from "./components/BlueTick";
import FeaturedSlot from "./components/FeaturedSlot";
import Wallet from "./components/Wallet";
import Settings from "./components/Settings";

// Separate Components Import (Scalability ke liye)
// Inka placeholder niche renderContent mein handle kiya hai

const userFeaturedStatus = {
  isSlotActive: false, // Ye DB se aayega (True/False)
  expiryDate: "20 March, 2026",
  slotsTaken: 12, // Ye Admin Panel se count hokar aayega
};

const myArticles = [
  { id: 1, title: "How to Grow your Blog in 2026" },
  { id: 2, title: "Mastering Next.js 15" },
];

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Articles");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Tab Switching Logic
  const renderContent = () => {
    switch (activeTab) {
      case "Articles":
        return <MyArticles />;
      case "Stats":
        return <Stats />;
      case "BlueTick":
        return <BlueTick isVerified={false} expiryDate="April 8, 2026" />;
      case "Featured":
        return (
          <FeaturedSlot
            isSlotActive={userFeaturedStatus.isSlotActive}
            expiryDate={userFeaturedStatus.expiryDate}
            slotsTaken={userFeaturedStatus.slotsTaken}
            myArticles={myArticles} // <-- Yahan humne list pass kar di
          />
        );
      case "Wallet":
        return <Wallet />;
      case "Settings":
        return <Settings />;
      default:
        return <MyArticles />;
    }
  };

  const navLinks = [
    {
      id: "Articles",
      title: "My Articles",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`,
    },
    {
      id: "Stats",
      title: "My Levels & Stats",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>`,
    },
    {
      id: "BlueTick",
      title: "Buy Blue Tick",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    },
    {
      id: "Featured",
      title: "Buy Featured Slot",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>`,
    },
    {
      id: "Wallet",
      title: "Wallet / Add Funds",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>`,
    },
    {
      id: "Settings",
      title: "Profile Settings",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
    },
  ];

  return (
    <section className="bg-white h-screen overflow-hidden">
      <Navbar onMenuClick={toggleSidebar} />

      <div className="flex pt-14.5">
        {/* SIDEBAR */}
        <aside
          className={`${isSidebarOpen ? "w-64" : "w-0"} transition-all duration-300 border-r border-gray-100 overflow-hidden`}
        >
          <div className="sticky top-0 h-[calc(100vh-57px)] flex flex-col bg-white">
            <div className="pt-8 px-4 flex flex-col justify-between h-full pb-6">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => setActiveTab(link.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium cursor-pointer ${
                        activeTab === link.id
                          ? "bg-black text-white shadow-md"
                          : "text-gray-600 hover:bg-gray-50 hover:text-black"
                      }`}
                    >
                      <div
                        dangerouslySetInnerHTML={{ __html: link.icon }}
                        className={
                          activeTab === link.id ? "text-white" : "text-gray-400"
                        }
                      />
                      <span>{link.title}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Logout Button at bottom */}
              <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-black rounded-lg transition-all text-sm font-medium mt-auto cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* MAIN DYNAMIC AREA */}
        <main className="flex-1 bg-white h-[calc(100vh-57px)] overflow-auto">
          <div className="max-w-5xl mx-auto px-8 py-10">{renderContent()}</div>
        </main>
      </div>
    </section>
  );
};

export default DashboardPage;
