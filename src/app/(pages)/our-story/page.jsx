import Navbar from "@/components/layout/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar background="#242424" />
      <section className="px-8 bg-[#242424] our-story">
        <div className="mx-auto">
          <div className="lg:w-[50%]">
            <h2 className="text-white">Everyone has a story to tell</h2>
            <p className="text-white mt-18">
              Medium is a home for human stories and ideas. Here, anyone can
              share knowledge and wisdom with the world—without having to build
              a mailing list or a following first. The internet is noisy and
              chaotic; Medium is quiet yet full of insight. It’s simple,
              beautiful, collaborative, and helps you find the right readers for
              whatever you have to say.
            </p>
            <br />
            <br />
            <p className="font-28 text-white">
              Ultimately, our goal is to deepen our collective understanding of
              the world through the power of writing.
            </p>
            <br />
            <br />
            <p className="text-white">
              We believe that what you read and write matters. Words can divide
              or empower us, inspire or discourage us. In a world where the most
              sensational and surface-level stories often win, we’re building a
              system that rewards depth, nuance, and time well spent. A space
              for thoughtful conversation more than drive-by takes, and
              substance over packaging.
            </p>
            <br />
            <br />
            <p className="text-white">
              Over 100 million people connect and share their wisdom on Medium
              every month. They’re software developers, amateur novelists,
              product designers, CEOs, and anyone burning with a story they need
              to get out into the world. They write about what they’re working
              on, what’s keeping them up at night, what they’ve lived through,
              and what they’ve learned that the rest of us might want to know
              too.
            </p>
            <br />
            <br />
            <p className="text-white">
              Instead of selling ads or selling your data, we’re supported by a
              growing community of over a million Medium members who believe in
              our mission. If you’re new here, start reading. Dive deeper into
              whatever matters to you. Find a post that helps you learn
              something new, or reconsider something familiar—and then write
              your story.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#242424] links-section">
        <div>
          <ul>
            <li>
              <a
                href="#"
                className="text-white px-8 flex items-center justify-between leading-16 pt-14 pb-16 border-t border-white"
              >
                <span>Start reading</span>
                <span>→</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white px-8 flex items-center justify-between leading-16 pt-14 pb-16 border-t border-white"
              >
                <span>Start writing</span>
                <span>→</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white px-8 flex items-center justify-between leading-16 pt-14 pb-16 border-t border-white"
              >
                <span>Become a member</span>
                <span>→</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
