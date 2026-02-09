import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/layout/Navbar";
import React from "react";
import TrendingArticles from "@/components/TrendingArticles";
import FeaturedArticles from "@/components/FeaturedArticles";
import CategoryArticles from "@/components/CategoryArticles";
import LatestArticles from "@/components/LatestArticles";
import EditorsPick from "@/components/EditorsPick";

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

      <section className="py-80 trending-articles">
        <div className="container mx-auto">
          <div className="flex items-center gap-2">
            <h3 className="font-medium! leading-none">Featured Articles</h3>
          </div>
          <FeaturedArticles />
        </div>
      </section>

      <section className="py-80">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Main Feed */}
            <div className="flex-[2] space-y-12">
              <CategoryArticles />
            </div>

            {/* Sidebar */}
            <div className="flex-1 sticky top-24 h-fit hidden lg:block border-l border-gray-50 pl-10">
              <div className="">
                <h2 className="mb-6 fs-16">Editor's Picks</h2>

                <EditorsPick />
              </div>

              <div className="mt-10 mb-6">
                <h2 className="mb-6 fs-16">Recommended topics</h2>

                <div className="flex flex-wrap gap-x-2 gap-y-2.5">
                  <button className="btn-sm bg-[#F2F2F2]">Data Science</button>
                  <button className="btn-sm bg-[#F2F2F2]">
                    Self Improvement
                  </button>
                  <button className="btn-sm bg-[#F2F2F2]">Writing</button>
                  <button className="btn-sm bg-[#F2F2F2]">Technology</button>
                  <button className="btn-sm bg-[#F2F2F2]">Relationships</button>
                  <button className="btn-sm bg-[#F2F2F2]">Politics</button>
                  <button className="btn-sm bg-[#F2F2F2]">
                    Cryptocurrency
                  </button>
                </div>
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
        </div>
      </section>

      <section className="py-80 latest-articles">
        <div className="container mx-auto">
          <div className="flex items-center gap-2">
            <h3 className="font-medium! leading-none">Latest Articles</h3>
          </div>
          <LatestArticles />
        </div>
      </section>
    </>
  );
}
