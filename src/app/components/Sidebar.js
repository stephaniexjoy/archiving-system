"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoMdPerson, IoMdMenu } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleToggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <aside
      className={`flex place-content-center bg-[#D9D9D9] text-black ${isMinimized ? "w-[10vh]" : "w-[24vh]"
        } h-full transition-all`}>
      <nav>
        <div>
          <div
            className={`mb-2 h-10 py-2 cursor-pointer" cursor-pointer ${isMinimized ? "rotate-180" : ""
              }`}
            onClick={handleToggleMinimize}
          >
            <IoMdMenu className="text-black text-2xl ml-5" />
          </div>
          <div
            className={`h-10 text-center mt-4 py-2 text-base ${isMinimized ? "hidden" : ""
              }`}
          >
            <img
              className="h-20 w-20 rounded-full mb-3 ml-5"
              src="/profile.jpg"
              alt="User"
            />
            <p className="-ml-7">USER'S NAME</p>
          </div>
        </div>

        <ul>
          <li
            className={`relative flex items-center mb-2 hover:bg-[#9D9494] h-10 py-2 ${isMinimized ? "mt-4" : "mt-24"
              }`}

          >
            <span className="absolute">
              <Link href="/dashboard" >
                <FaHome className="text-black text-2xl -ml-12" />
              </Link>
            </span>
            {!isMinimized && (
              <Link href="/dashboard" className="ml-5 mt-1 font-medium">
                HOME
              </Link>
            )}
          </li>

          <li
            className={` mb-2 hover:bg-[#9D9494] h-10 py-2 ${isMinimized ? "mt-4" : "mt-4"
              }`}

          >
            <span className="absolute left-0">
              <Link href="/dashboard/profile" >
                <IoMdPerson className="text-black text-2xl ml-5" />
              </Link>
            </span>
            {!isMinimized && (
              <Link href="/dashboard/profile" className="ml-5 mt-1 font-medium">
                PROFILE
              </Link>
            )}
          </li>

          <li
            className={`mb-2 hover:bg-[#9D9494] h-10 py-2 ${isMinimized ? "mt-4" : "mt-4"
              }`}

          >
            <span className="absolute left-0">
              <Link href="/dashboard/archiving">
                <FaBook className="text-black text-2xl ml-5" />
              </Link>
            </span>
            {!isMinimized && (
              <Link href="/dashboard/archiving" className="ml-5 mt-1 font-medium">
                ARCHIVING
              </Link>
            )}
          </li>

          <li
            className={`mb-2 hover:bg-[#9D9494] h-10 py-2 ${isMinimized ? "mt-4" : "mt-4"
              }`}
            onClick={() => signOut()}
          >
            <span className="absolute left-0">
              <FaSignOutAlt className="text-black text-2xl ml-5" />
            </span>
            {!isMinimized && (
              <Link href="#" className="ml-5 mt-1 font-medium">
                SIGN OUT
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
