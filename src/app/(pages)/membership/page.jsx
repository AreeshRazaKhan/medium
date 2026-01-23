import Navbar from "@/components/layout/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar background="#fff" />

      <section className="border-b border-[#242424] mt-21.5 human-stories">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[70%] lg:border-r border-[#242424] py-12 px-8 md:pt-16 md:pe-20 md:pb-12 md:ps-8 flex flex-col justify-between gap-12 lg:gap-0">
            <h2 className="leading-none!">Support human stories</h2>

            <div className="flex flex-col max-w-135 gap-12">
              <p className="fs-22 text-gray leading-tight">
                Become a member to read without limits or ads, fund great
                writers, and join a global community of people who care about
                high-quality storytelling.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="btn-md btn-primary">
                  Get started
                </a>
                <a href="#" className="btn-md btn-outline">
                  View plans
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[30%] h-140 md:h-160">
            <div className="flex flex-col h-full bg-[#d0d0d0]">
              <div className="flex-1 flex items-end img-slide">
                <div className="membership-only flex items-center justify-center gap-2 btn-sm bg-[#ffc017] ms-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 64 64"
                    className="kr"
                  >
                    <path
                      fill="#242424"
                      d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                    ></path>
                  </svg>
                  <p className="fs-14">Member-only story</p>
                </div>
              </div>
              <div className="px-8 pt-6 pb-5.5 flex flex-col gap-3.5">
                <h5 className="leading-tight">
                  How Starting an Investment Firm Almost Landed Me in a Federal
                  Prison
                </h5>

                <div className="flex items-center gap-4">
                  <div className="img-wrapper rounded-full overflow-hidden">
                    <img
                      src="https://miro.medium.com/v2/resize:fill:96:96/1*pIJYAvf37_hLJXUpZs7z6w.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="fs-16">Quintessa Williams</p>
                    <p className="fs-16">
                      Author of <i>Make Sleep Your Superpower</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-membership px-8 py-80 border-b border-[#242424]">
        <div className="flex flex-col lg:flex-row justify-start gap-12">
          <div className="max-w-121.25">
            <div className=" sticky top-38">
              <h3 className="leading-none">Why membership?</h3>
            </div>
          </div>
          <div className="max-w-170 flex flex-col gap-20 md:gap-30">
            <div className="flex flex-col gap-4">
              <h4 className="leading-tight">Reward writers</h4>
              <p>
                Your membership directly supports the writers, editors,
                curators, and teams who make Medium a vibrant, inclusive home
                for human stories. A portion of your membership is allocated to
                the writers of the stories you read and interact with.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="leading-tight">Unlock every story</h4>
              <p>
                Get access to millions of original stories that spark bright
                ideas, answer big questions, and fuel bold ambitions.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="leading-tight">Enhance your reading experience</h4>
              <p>
                Immerse yourself in audio stories, read offline wherever you go,
                and connect with the Medium community on Mastodon.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="leading-tight">Elevate your writing</h4>
              <p>
                Create and contribute to publications to collaborate with other
                writers, create a custom domain for your profile, and level up
                your writing with our simple but powerful publishing tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials px-8 py-80 border-b border-[#242424]">
        <div className="flex flex-col lg:flex-row justify-start gap-12">
          <div className="max-w-121.25">
            <div className=" sticky top-38">
              <h3 className="leading-none">What members are saying</h3>
            </div>
          </div>
          <div className="max-w-170 flex flex-col gap-20 md:gap-30">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="img-wrapper overflow-hidden rounded-full">
                <img
                  src="https://miro.medium.com/v2/resize:fill:160:160/1*djKJlXxmezn6fBPzHnipnw.jpeg"
                  alt=""
                  className="w-full! h-full! object-cover"
                />
              </div>

              <div className="flex flex-col gap-4">
                <p>
                  The easy path in social media is promoting the worst content,
                  the cheapest, tackiest, lowest-effort stuff. That’s not what
                  you get on Medium. You can actually find content you can build
                  your brain with. I appreciate that, both as a reader and a
                  writer.
                </p>

                <p className="fs-16">
                  <b>Cassie Kozyrkov,</b> Chief Decision Scientist at Google and
                  Medium member
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="img-wrapper overflow-hidden rounded-full">
                <img
                  src="https://miro.medium.com/v2/resize:fill:160:160/1*djKJlXxmezn6fBPzHnipnw.jpeg"
                  alt=""
                  className="w-full! h-full! object-cover"
                />
              </div>

              <div className="flex flex-col gap-4">
                <p>
                  The easy path in social media is promoting the worst content,
                  the cheapest, tackiest, lowest-effort stuff. That’s not what
                  you get on Medium. You can actually find content you can build
                  your brain with. I appreciate that, both as a reader and a
                  writer.
                </p>

                <p className="fs-16">
                  <b>Cassie Kozyrkov,</b> Chief Decision Scientist at Google and
                  Medium member
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="img-wrapper overflow-hidden rounded-full">
                <img
                  src="https://miro.medium.com/v2/resize:fill:160:160/1*djKJlXxmezn6fBPzHnipnw.jpeg"
                  alt=""
                  className="w-full! h-full! object-cover"
                />
              </div>

              <div className="flex flex-col gap-4">
                <p>
                  The easy path in social media is promoting the worst content,
                  the cheapest, tackiest, lowest-effort stuff. That’s not what
                  you get on Medium. You can actually find content you can build
                  your brain with. I appreciate that, both as a reader and a
                  writer.
                </p>

                <p className="fs-16">
                  <b>Cassie Kozyrkov,</b> Chief Decision Scientist at Google and
                  Medium member
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="membership-plans px-8 py-80 border-b border-[#242424]">
        <div className="flex flex-col lg:flex-row justify-start gap-12">
          <div className="max-w-121.25">
            <div className=" sticky top-38">
              <h3 className="leading-none">Membership plans</h3>
            </div>
          </div>
          <div className="max-w-170 w-full">
            <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-6">
              <div className="card border border-[#e5e5e5] rounded-sm flex flex-col items-center gap-8 p-8">
                <div className="w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="none"
                    viewBox="0 0 64 64"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    className="w-full! h-full! object-cover"
                  >
                    <path
                      fill="#FFC017"
                      d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h6 className="leading-tight text-center">Medium Member</h6>
                  <p className="leading-tight text-center fs-16">
                    $5/month or $50/year
                  </p>
                </div>

                <div className="w-full">
                  <button className="btn-sm btn-green w-full">
                    Get started
                  </button>
                </div>

                <hr className="h-px w-full border-[#f2f2f2]" />

                <ul className="flex flex-col gap-4 w-full">
                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Read member-only stories</p>
                  </li>
                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Support writers you read most</p>
                  </li>

                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Listen to audio narrations</p>
                  </li>

                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Read offline with the Medium app</p>
                  </li>

                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Access our Mastodon community</p>
                  </li>

                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Connect your custom domain</p>
                  </li>

                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Create your own publications</p>
                  </li>
                </ul>
              </div>

              <div className="card border border-[#e5e5e5] rounded-sm flex flex-col items-center gap-8 p-8">
                <div className="w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="none"
                    viewBox="0 0 64 64"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    className="w-full! h-full! object-cover"
                  >
                    <path
                      fill="#FFC017"
                      d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h6 className="leading-tight text-center">Medium Member</h6>
                  <p className="leading-tight text-center fs-16">
                    $5/month or $50/year
                  </p>
                </div>

                <div className="w-full">
                  <button className="btn-sm btn-green w-full">
                    Get started
                  </button>
                </div>

                <hr className="h-px w-full border-[#f2f2f2]" />

                <ul className="flex flex-col gap-4 w-full">
                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Read member-only stories</p>
                  </li>
                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Support writers you read most</p>
                  </li>

                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Listen to audio narrations</p>
                  </li>

                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Read offline with the Medium app</p>
                  </li>

                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Access our Mastodon community</p>
                  </li>

                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Connect your custom domain</p>
                  </li>

                  <li className="flex items-center gap-2 fs-14">
                    <span className="w-4 h-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="w-full! h-full! object-contain"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          stroke="#242424"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.79 7.103 13 13 3"
                        ></path>
                      </svg>
                    </span>
                    <p>Create your own publications</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta px-8 py-80 border-b border-[#242424] bg-[#d0d0d066]">
        <div className="flex flex-col justify-center items-center gap-12">
          <h3 className="leading-none text-center">Unlock a world of wisdom</h3>
          <a href="#" className="btn-md btn-primary">
            Get started
          </a>
        </div>
      </section>
    </>
  );
};

export default page;
