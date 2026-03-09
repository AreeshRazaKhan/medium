import Link from "next/link";

// components/dashboard/MyArticles.jsx
export default function MyArticles() {
  const articles = [
    {
      id: 1,
      title: "SEO Tips for 2026",
      status: "Published",
      views: 1200,
      date: "05 Mar",
    },
    {
      id: 2,
      title: "Next.js vs Laravel",
      status: "Pending",
      views: 0,
      date: "07 Mar",
    },
  ];

  return (
    <div className="max-w-4xl animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h4 className=" font-semibold! font-montserrat -tracking-[0.1rem]!">
          My Stories
        </h4>
        <Link
          href={"articles/write"}
          className="bg-black text-white px-5 py-3 rounded-full text-sm cursor-pointer"
        >
          Write New
        </Link>
      </div>

      <div className="flex gap-4 border-b mb-6 text-sm text-gray-500">
        <button className="border-b-2 border-black pb-2 text-black font-medium">
          Published
        </button>
        <button className="pb-2">
          Drafts ({articles.filter((a) => a.status === "Draft").length})
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {articles.map((art) => (
          <div
            key={art.id}
            className="group flex flex-col md:flex-row  gap-5 p-2 rounded-2xl hover:bg-gray-50/50 transition-all duration-300"
          >
            {/* 1. Thumbnail Placeholder */}
            <div className="w-full md:w-40 h-32 bg-gray-100 rounded-xl overflow-hidden shrink-0 border border-gray-100 shadow-inner">
              {art.image ? (
                <img
                  src={art.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              )}
            </div>

            {/* 2. Content Area */}
            <div className="flex flex-col   flex-1  gap-0">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                  <span>{art.date}</span>

                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                    {art.views}
                  </span>
                </div>

                {/* Inline Actions */}
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-white hover:shadow-sm rounded-full text-gray-400 hover:text-black cursor-pointer">
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-white hover:shadow-sm rounded-full text-gray-400 hover:text-red-500 cursor-pointer">
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <h5 className="font-bold!  text-gray-900 leading-snug cursor-pointer">
                  {art.title}
                </h5>
                <p className="text-sm text-gray-500 line-clamp-1 mt-1 leading-relaxed">
                  {art.excerpt ||
                    "This is a short preview of your article content to fill the space..."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
