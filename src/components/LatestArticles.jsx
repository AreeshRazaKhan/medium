import React from "react";
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

const LatestArticles = () => {
  return (
    <>
      <div className="mt-8">
        <div className="grid grid-cols-2 gap-x-10 gap-y-10">
          {blogslist.map((blog) => (
            <a
              key={blog.id}
              href={`${blog.url}`}
              className="flex flex-col gap-5"
            >
              <div className="featured-image aspect-video w-full">
                <img
                  src={blog.featuredImage}
                  className="w-full! h-full! object-cover"
                  alt=""
                />
              </div>
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
                      viewBox="0 0 16 16"
                    >
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
                      viewBox="0 0 16 16"
                    >
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
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestArticles;
