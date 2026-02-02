import React from "react";

const Navbar = ({ onMenuClick }) => {
  return (
    <>
      <header className="border-b border-[#F2F2F2] sticky top-0 bg-white dashboard-header">
        <div className="flex items-center justify-between ps-4 pe-6 h-14.25">
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="flex items-center justify-center w-10 h-10 cursor-pointer close-sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="text-[#6B6B6B]"
              >
                <path
                  fill="currentColor"
                  d="M20.6 17.51a.5.5 0 0 1 0 .98l-.1.01h-17a.5.5 0 0 1 0-1h17zm0-6a.5.5 0 0 1 0 .98l-.1.01h-17a.5.5 0 0 1 0-1h17zm0-6a.5.5 0 0 1 0 .98l-.1.01h-17a.5.5 0 0 1 0-1h17z"
                ></path>
              </svg>
            </button>

            <div className="logo-wrapper max-w-28.5 ms-2">
              <img src="/images/logo.svg" alt="" />
            </div>

            <div className="ms-6 bg-[#F9F9F9] w-60 rounded-[20px] ps-3 pe-5 py-2 flex items-center gap-3 searchbar">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-[#000000cc]"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                placeholder="Search"
                className="border-0 w-full input-search"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 extra-func">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"
                ></path>
                <path
                  stroke="currentColor"
                  d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"
                ></path>
              </svg>
              <span>Write</span>
            </a>

            <a href="#" className="flex items-center gap-2 extra-func">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  d="M15 18.5a3 3 0 1 1-6 0"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  d="M5.5 10.532V9a6.5 6.5 0 0 1 13 0v1.532c0 1.42.564 2.782 1.568 3.786l.032.032c.256.256.4.604.4.966v2.934a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.934c0-.363.144-.71.4-.966l.032-.032A5.35 5.35 0 0 0 5.5 10.532Z"
                ></path>
              </svg>
            </a>

            <button className="profile-button w-8 h-8 rounded-full overflow-hidden">
              <img
                src="https://miro.medium.com/v2/resize:fill:64:64/0*-Y5QPcqh2qODsh53"
                alt=""
                className="w-full! h-full! object-cover"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
