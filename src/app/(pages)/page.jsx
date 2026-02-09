import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/layout/Navbar";
import React from "react";
import TrendingArticles from "@/components/TrendingArticles";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <section className="py-80 trending-articles">
        <div className="container mx-auto">
          <div className="flex items-center gap-2">
            <h3 className="font-medium! leading-none">Trending Articles</h3>
          </div>
          <TrendingArticles />
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-16 py-12">
        {/* Main Feed */}
        <div className="flex-[2] space-y-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <article
              key={i}
              className="flex justify-between items-start gap-8 cursor-pointer group"
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                  <span className="text-[14px] font-medium">
                    John Doe{" "}
                    <span className="text-gray-400 font-normal">in</span>{" "}
                    Programming
                  </span>
                </div>
                {/* Article Title Fix - 20px font */}
                <h2 className="text-[20px] font-bold font-serif mb-1 leading-snug group-hover:opacity-60 transition">
                  How to build a scalable architecture in 2026
                </h2>
                {/* Body Text Fix - 16px font */}
                <p className="text-gray-500 line-clamp-2 font-serif text-[16px] leading-relaxed mb-4">
                  A deep dive into why micro-frontends and serverless functions
                  are dominating the modern landscape...
                </p>
                <div className="flex items-center gap-4 text-[13px] text-gray-500">
                  <span>Feb 9</span>
                  <span>12 min read</span>
                  <span className="bg-gray-100 px-2.5 py-1 rounded-full text-zinc-600">
                    JavaScript
                  </span>
                </div>
              </div>
              {/* Image Placeholder */}
              <div className="w-[112px] h-[112px] md:w-[160px] md:h-[120px] bg-gray-50 rounded overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-zinc-100 border border-zinc-200" />
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <div className="flex-1 sticky top-24 h-fit hidden lg:block border-l border-gray-50 pl-10">
          <h3 className="font-bold text-[14px] mb-4">
            Discover more of what matters to you
          </h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Tech", "News", "Sports", "Food", "Design"].map((c) => (
              <button
                key={c}
                className="px-4 py-1.5 border border-gray-200 rounded-full text-[14px] text-zinc-600 hover:border-zinc-400 transition"
              >
                {c}
              </button>
            ))}
          </div>

          <footer className="pt-10 flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-gray-500 border-t border-gray-100">
            <a href="#" className="hover:text-black">
              Help
            </a>
            <a href="#" className="hover:text-black">
              About
            </a>
            <a href="#" className="hover:text-black">
              Careers
            </a>
            <a href="#" className="hover:text-black">
              Privacy
            </a>
            <a href="#" className="hover:text-black">
              Terms
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
