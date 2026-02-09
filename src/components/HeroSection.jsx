import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="bg-[#FFC017] border-b border-[#242424] mt-21.5 py-20 px-6">
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
    </>
  );
};

export default HeroSection;
