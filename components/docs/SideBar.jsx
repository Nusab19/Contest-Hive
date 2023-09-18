"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const LogoUrl =
  "https://raw.githubusercontent.com/Nusab19/Nusab19/main/assets/contest-hive%202-modified%20(1).svg";

const SideBarLinks = {
  Introduction: "/docs/#introduction",
  Platforms: {
    "All Platforms": "/docs/all",
    AtCoder: "/docs/atcoder",
    CodeChef: "/docs/codechef",
    Codeforces: "/docs/codeforces",
    HackerEarth: "/docs/hackerearth",
    HackerRank: "/docs/hackerrank",
    LeetCode: "/docs/leetcode",
    Toph: "/docs/toph",
  },
};

const SideBar = () => {
  // Everything is set to false as default
  // So, mobile users don't see the sidebar when they first visit the page

  // Desktop users will see the sidebar sliding from the left at first
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(false);
  const [classForSidebar, setClassForSidebar] = useState(
    "fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform",
  ); // closed as default

  function handleResize() {
    // Close the sidebar when the screen is less than 768px

    if (window.innerWidth >= 768) {
      setDesktop(true);
      setSidebarOpen(true);
      setClassForSidebar(
        "fixed left-0 top-0 z-40 h-screen w-64 translate-x-0 transition-transform",
      );
    } else {
      setDesktop(false);
      setSidebarOpen(false);
      setClassForSidebar(
        "fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform",
      );
    }
  }
  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    // toggles the sidebar for mobile
    if (sidebarOpen) {
      setClassForSidebar(
        "fixed left-0 top-0 z-40 h-screen w-64 translate-x-0 transition-transform",
      );
    } else {
      setClassForSidebar(
        "fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform",
      );
    }

    // Bind the event listener
    window.addEventListener("resize", handleResize);

    return () => {
      // Unbind the event listener on clean up
      window.removeEventListener("resize", handleResize);
    };
  }, [sidebarOpen]);

  function handleSidebar() {
    setSidebarOpen(true);
  }

  const sidebarRef = useRef(null);
  useEffect(() => {
    // Close the sidebar when clicked outside
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        if (!isDesktop) setSidebarOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, isDesktop]);

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  function handleDropdown1() {
    setDropdownOpen1(!dropdownOpen1);
  }

  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 md:hidden"
        onClick={handleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        ref={sidebarRef}
        id="logo-sidebar"
        className={classForSidebar}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-900 px-3 py-4">
          <div className="flex flex-row">
            {isDesktop ? (
              <Link href="/">
                <Image
                  src={LogoUrl}
                  width={50}
                  height={50}
                  className="-mt-0.5 mr-3 h-10"
                  alt="Contest Hive Logo"
                />
              </Link>
            ) : (
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="mb-10 mr-3 inline-flex items-center rounded-lg bg-gray-800 pb-[7px] pl-[7px] pr-[8px] pt-[7px] text-sm text-gray-400 md:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  className="h-5 w-5 text-gray-300"
                  data-view-component="true"
                >
                  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                </svg>
              </button>
            )}

            <Link href="/" className="mb-10 mt-1">
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                Contest Hive
              </span>
            </Link>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href={SideBarLinks["Introduction"]}
                className="group flex items-center rounded-lg p-2"
              >
                <svg
                  className="ml-1 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                  />
                </svg>
                <span className="ml-3">Introduction</span>
              </Link>
            </li>
            {/* Drop list */}
            <li>
              <button
                type="button"
                className="group flex w-full items-center rounded-lg p-2 text-base text-white transition duration-75 hover:bg-gray-800"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={handleDropdown1}
              >
                <svg
                  className="ml-1 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5h6M9 8h6m-6 3h6M4.996 5h.01m-.01 3h.01m-.01 3h.01M2 1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                  />
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap text-left">
                  Platforms
                </span>
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={dropdownOpen1 ? "mt-2 space-y-2" : "hidden"}
              >
                <li>
                  <Link
                    href={SideBarLinks.Platforms["All Platforms"]}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    All Platforms
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.AtCoder}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    AtCoder
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.CodeChef}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    CodeChef
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.Codeforces}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    Codeforces
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.HackerEarth}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    HackerEarth
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.HackerRank}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    HackerRank
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.LeetCode}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    LeetCode
                  </Link>
                </li>

                <li>
                  <Link
                    href={SideBarLinks.Platforms.Toph}
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-white transition duration-75 hover:bg-gray-800"
                  >
                    Toph
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
