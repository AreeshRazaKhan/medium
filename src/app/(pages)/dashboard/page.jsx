"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";

const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.75v10.5c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v5.5c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25v-10.5M22 9l-9.1-6.825a1.5 1.5 0 0 0-1.8 0L2 9"></path></svg>`,
  },
  {
    id: 2,
    title: "Library",
    link: "/",
    icon: `<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M6.44 6.69a1.5 1.5 0 0 1 1.06-.44h9a1.5 1.5 0 0 1 1.06.44l.354-.354-.353.353A1.5 1.5 0 0 1 18 7.75v14l-5.694-4.396-.306-.236-.306.236L6 21.75v-14c0-.398.158-.78.44-1.06Z"></path><path stroke="currentColor" stroke-linecap="round" d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"></path></svg>`,
  },
  {
    id: 3,
    title: "Profile",
    link: "/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" d="M3.5 21.5v-4.342C3.5 15.414 7.306 14 12 14s8.5 1.414 8.5 3.158V21.5"></path></svg>`,
  },
  {
    id: 4,
    title: "Stories",
    link: "/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M4.75 21.5h14.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .138.112.25.25.25Z"></path><path stroke="currentColor" stroke-linecap="round" d="M8 8.5h8M8 15.5h5M8 12h8"></path></svg>`,
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
              <main className="max-w-[calc(100% - 368px)] w-full pt-9">
                <div className="blogs-wrapper flex flex-col items-center">
                  <div className="blogs-inner max-w-170">
                    {blogslist.map((blog) => (
                      <a
                        href={`${blog.url}`}
                        key={blog.id}
                        className="flex items-start gap-14 pb-5 border-b border-[#F2F2F2] mt-8"
                      >
                        <div className="flex flex-col">
                          <div className="blog-author gap-2 flex items-center">
                            <div className="img-wrapper w-5 h-5 rounded-full overflow-hidden">
                              <img
                                src={blog.authorImage}
                                className="w-full! h-full! object-cover"
                                alt=""
                              />
                            </div>
                            <p className="text-[12px]">{blog.author}</p>
                          </div>

                          <h6 className="mt-4 font-bold!">{blog.title}</h6>
                          <p className="fs-16 text-gray mt-2">{blog.excerpt}</p>

                          <div className="flex items-center gap-4 pt-4">
                            {blog.featured == true && (
                              <div className="text-gray text-[12px] flex items-center gap-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="none"
                                  viewBox="0 0 64 64"
                                >
                                  <path
                                    fill="#FFC017"
                                    d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                                  ></path>
                                </svg>
                                <span>Featured</span>
                              </div>
                            )}

                            <button className="like flex items-center gap-1 text-[12px] text-gray cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="none"
                                aria-labelledby="clap-filled-static-desc"
                                viewBox="0 0 16 16"
                              >
                                <desc id="clap-filled-static-desc">
                                  A clap icon
                                </desc>
                                <path
                                  fill="#6B6B6B"
                                  fillRule="evenodd"
                                  d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span>{blog.likesQuantity}</span>
                            </button>

                            <button className="views flex items-center gap-1 text-[12px] text-gray cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="none"
                                aria-labelledby="clap-filled-static-desc"
                                viewBox="0 0 16 16"
                              >
                                <desc id="clap-filled-static-desc">
                                  A clap icon
                                </desc>
                                <path
                                  fill="#6B6B6B"
                                  fillRule="evenodd"
                                  d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span>{blog.views}</span>
                            </button>
                          </div>
                        </div>

                        <div className="featured-image">
                          <img src={blog.featuredImage} alt="" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </main>

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
