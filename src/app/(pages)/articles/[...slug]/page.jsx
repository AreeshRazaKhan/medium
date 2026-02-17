"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import LatestArticles from "@/components/LatestArticles";
import Navbar from "@/components/layout/Navbar";

const categories = [
  // Ab 'All' ka link seedha /articles (aapka main page) par jayega
  { name: "All", slug: "all", path: "/articles/all" },
  {
    name: "Data Science",
    slug: "data-science",
    path: "/articles/data-science",
  },
  {
    name: "Self Improvement",
    slug: "self-improvement",
    path: "/articles/self-improvement",
  },
  { name: "Writing", slug: "writing", path: "/articles/writing" },
  { name: "Technology", slug: "technology", path: "/articles/technology" },
  {
    name: "Relationships",
    slug: "relationships",
    path: "/articles/relationships",
  },
  { name: "Politics", slug: "politics", path: "/articles/politics" },
  {
    name: "Cryptocurrency",
    slug: "cryptocurrency",
    path: "/articles/cryptocurrency",
  },
];

const Page = () => {
  const params = useParams();

  // params.slug ek array hai. URL /articles/tech mein ye ['tech'] hoga.
  const currentSlug = params.slug ? params.slug[0] : "";

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-[#FFC017] border-b border-[#242424] mt-14.25 py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-start gap-6">
            <h2 className="font-serif leading-[0.95] tracking-tighter">
              Stay curious.
            </h2>
            <p className="max-w-sm text-[#242424] fs-22">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <button className="btn btn-primary">Start reading</button>
          </div>
        </div>
      </section>

      {/* Dynamic Tabs */}
      <section className="py-20 latest-articles">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2.5">
              {categories.map((cat) => {
                // Agar URL ka slug aur category ka slug match karein toh active
                const isActive = currentSlug === cat.slug;

                return (
                  <Link
                    key={cat.name}
                    href={cat.path}
                    className={`btn-sm transition-all duration-200 px-4 py-2 rounded-full flex items-center justify-center ${
                      isActive
                        ? "bg-[#242424] text-white"
                        : "bg-[#F2F2F2] text-[#242424] hover:bg-[#e5e5e5]"
                    }`}
                  >
                    {cat.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Filtering Logic for Articles */}
          <LatestArticles category={currentSlug} />
        </div>
      </section>
    </>
  );
};

export default Page;
