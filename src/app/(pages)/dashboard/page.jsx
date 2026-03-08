"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";

const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" d="M4.5 10.75v10.5c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v5.5c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25v-10.5M22 9l-9.1-6.825a1.5 1.5 0 0 0-1.8 0L2 9"></path></svg>`,
  },
  {
    id: 2,
    title: "Library",
    link: "/",
    icon: `<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M6.44 6.69a1.5 1.5 0 0 1 1.06-.44h9a1.5 1.5 0 0 1 1.06.44l.354-.354-.353.353A1.5 1.5 0 0 1 18 7.75v14l-5.694-4.396-.306-.236-.306.236L6 21.75v-14c0-.398.158-.78.44-1.06Z"></path><path stroke="currentColor" strokeLinecap="round" d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"></path></svg>`,
  },
  {
    id: 3,
    title: "Profile",
    link: "/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle><path stroke="currentColor" strokeLinecap="round" d="M3.5 21.5v-4.342C3.5 15.414 7.306 14 12 14s8.5 1.414 8.5 3.158V21.5"></path></svg>`,
  },
  {
    id: 4,
    title: "Stories",
    link: "/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M4.75 21.5h14.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .138.112.25.25.25Z"></path><path stroke="currentColor" strokeLinecap="round" d="M8 8.5h8M8 15.5h5M8 12h8"></path></svg>`,
  },
  {
    id: 5,
    title: "Stats",
    link: "/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M2.75 19h4.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25ZM9.75 19h4.5a.25.25 0 0 0 .25-.25V8.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25ZM16.75 19h4.5a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25Z"></path></svg>`,
  },
];

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // 2. Toggle karne ka function
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <section>
        <Navbar onMenuClick={toggleSidebar} />
        <div className="flex">
          <aside
            className={`${isSidebarOpen ? "w-60" : "w-0 "} transition-all duration-300 `}
          >
            <div className="sticky top-14.25 h-[calc(100vh-57px)] overflow-hidden border-r border-[#f2f2f2] flex flex-col w-full bg-white">
              <div className="pt-10">
                <ul className="flex flex-col gap-5">
                  {navLinks.map((navLink) => (
                    <li key={navLink.id}>
                      <a
                        href={navLink.link}
                        className="ps-6 flex items-center gap-4 leading-4 sidebar-nav"
                      >
                        <div
                          className="w-6 h-6 icon-wrapper"
                          dangerouslySetInnerHTML={{ __html: navLink.icon }}
                        />
                        <span>{navLink.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="w-full">
            <div className="flex justify-evenly max-w-334 mx-auto">
              <main className="max-w-[calc(100% - 368px)] w-full pt-9"></main>

              <div className="max-w-92 w-full ps-10 pe-6 border-s border-[#F2F2F2]">
                <div className="sticky top-14.25">
                  <div className="mt-10">
                    <h2 className="mb-6 fs-16">Staff Picks</h2>

                    {blogslist.slice(0, 3).map((blog) => (
                      <a
                        href={blog.url}
                        key={blog.id}
                        className="pb-5 flex flex-col"
                      >
                        <div className="blog-author gap-2 flex items-center mb-3">
                          <div className="img-wrapper w-5 h-5 rounded-full overflow-hidden ">
                            <img
                              src={blog.authorImage}
                              className="w-full! h-full! object-cover"
                              alt=""
                            />
                          </div>
                          <p className="text-[12px]">{blog.author}</p>
                        </div>
                        <h3 className="fs-16 font-bold! leading-5">
                          {blog.title}
                        </h3>
                      </a>
                    ))}
                  </div>

                  <div className="mt-10">
                    <h2 className="mb-6 fs-16">Recommended topics</h2>

                    <div className="flex flex-wrap gap-x-2 gap-y-2.5">
                      <button className="btn-sm bg-[#F2F2F2]">
                        Data Science
                      </button>
                      <button className="btn-sm bg-[#F2F2F2]">
                        Self Improvement
                      </button>
                      <button className="btn-sm bg-[#F2F2F2]">Writing</button>
                      <button className="btn-sm bg-[#F2F2F2]">
                        Technology
                      </button>
                      <button className="btn-sm bg-[#F2F2F2]">
                        Relationships
                      </button>
                      <button className="btn-sm bg-[#F2F2F2]">Politics</button>
                      <button className="btn-sm bg-[#F2F2F2]">
                        Cryptocurrency
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
