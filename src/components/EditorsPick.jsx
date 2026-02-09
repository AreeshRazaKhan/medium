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

const EditorsPick = () => {
  return (
    <>
      <div className="">
        {blogslist.slice(0, 3).map((blog) => (
          <a href={blog.url} key={blog.id} className="pb-5 flex flex-col">
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
            <h3 className="fs-16 font-bold! leading-5">{blog.title}</h3>
          </a>
        ))}
      </div>
    </>
  );
};

export default EditorsPick;
