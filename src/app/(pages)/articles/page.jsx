import React from "react";
import Navbar from "../dashboard/components/Navbar";
import EditorsPick from "@/components/EditorsPick";
import ArticleUI from "@/components/ui/ArticleUI";

const blogslist = [
  {
    id: 1,
    featured: true,
    title: "Rank 1st page on google with cutting-edge AIO and AEO",
    excerpt:
      "Sometimes the bravest thing you do isn’t leaving people, it’s finally telling yourself the truth about them.",
    featuredImage:
      "https://www.seoclerk.com/pics/t/000/004/987/fc431d5ad85018822c8abc4b2d59ee47.gif",
    url: "#",
    author: "ajlancer",
    authorImage:
      "https://www.seoclerk.com/images/membersprofilepic/thumbs/519520x5EJa1727612454.png",
    likesQuantity: "1,034",
    views: "1k",
  },
  {
    id: 2,
    featured: true,
    title: "Rank 1st page on google with cutting-edge AIO and AEO",
    excerpt:
      "Sometimes the bravest thing you do isn’t leaving people, it’s finally telling yourself the truth about them.",
    featuredImage:
      "https://www.seoclerk.com/pics/t/000/004/987/fc431d5ad85018822c8abc4b2d59ee47.gif",
    url: "#",
    author: "ajlancer",
    authorImage:
      "https://www.seoclerk.com/images/membersprofilepic/thumbs/519520x5EJa1727612454.png",
    likesQuantity: "1,034",
    views: "1k",
  },
  {
    id: 3,
    featured: true,
    title: "Rank 1st page on google with cutting-edge AIO and AEO",
    excerpt:
      "Sometimes the bravest thing you do isn’t leaving people, it’s finally telling yourself the truth about them.",
    featuredImage:
      "https://www.seoclerk.com/pics/t/000/004/987/fc431d5ad85018822c8abc4b2d59ee47.gif",
    url: "#",
    author: "ajlancer",
    authorImage:
      "https://www.seoclerk.com/images/membersprofilepic/thumbs/519520x5EJa1727612454.png",
    likesQuantity: "1,034",
    views: "1k",
  },
  {
    id: 4,
    featured: false,
    title: "Rank 1st page on google with cutting-edge AIO and AEO",
    excerpt:
      "Sometimes the bravest thing you do isn’t leaving people, it’s finally telling yourself the truth about them.",
    featuredImage:
      "https://www.seoclerk.com/pics/t/000/004/987/fc431d5ad85018822c8abc4b2d59ee47.gif",
    url: "#",
    author: "ajlancer",
    authorImage:
      "https://www.seoclerk.com/images/membersprofilepic/thumbs/519520x5EJa1727612454.png",
    likesQuantity: "1,034",
    views: "1k",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
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

      <section className="py-80">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Main Feed */}
            <div className="flex-[2] space-y-12">
              <div className="blogs-wrapper flex flex-col items-center">
                <div className="blogs-inner">
                  {blogslist.map((blog, index) => (
                    <ArticleUI
                      key={blog.id}
                      blog={blog}
                      isFirst={index === 0}
                    />
                  ))}
                </div>
              </div>
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
    </>
  );
};

export default page;
