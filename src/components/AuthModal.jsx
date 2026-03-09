"use client";
import React, { useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'register'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-black transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-10">
          <h4 className=" font-semibold! -tracking-[0.1rem]! text-center mb-2 font-onest">
            {authMode === "login" ? "Welcome Back" : "Join Us"}
          </h4>
          <p className="text-gray-500 text-center mb-8 text-sm">
            {authMode === "login"
              ? "Enter your details to access your account"
              : "Create an account to start writing and earning"}
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {authMode === "register" && (
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl mt-1 focus:ring-2 focus:ring-black outline-none transition-all"
                />
              </div>
            )}

            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl mt-1 focus:ring-2 focus:ring-black outline-none transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl mt-1 focus:ring-2 focus:ring-black outline-none transition-all"
              />
            </div>

            <button className="w-full py-4 bg-black text-white rounded-2xl font-bold mt-4 hover:bg-[#1d1d1d] cursor-pointer transition-all! shadow-lg shadow-black/10">
              {authMode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            {authMode === "login" ? (
              <p>
                Don't have an account?{" "}
                <button
                  onClick={() => setAuthMode("register")}
                  className="font-bold text-black underline cursor-pointer"
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => setAuthMode("login")}
                  className="font-bold text-black underline"
                >
                  Log In
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
