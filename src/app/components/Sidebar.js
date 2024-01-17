"use client"
import React, { useState } from "react";
import { Modal } from 'flowbite-react';
import Link from "next/link";
import { FaHome, FaBook, FaSignOutAlt } from "react-icons/fa";
import { IoMdPerson, IoMdMenu } from "react-icons/io";
import Image from "next/image";
import LogoutModal from "./Modal/LogoutModal";
import { useSession } from "next-auth/react";

const MenuItem = ({ path, icon, label, onClick, isMinimized }) => (
  <li className={`flex items-center mb-2 hover:bg-[#9D9494] h-10 py-2 ${isMinimized ? "mt-4" : "mt-4"}`}>
    <span className={onClick ? "absolute left-0" : ""}>
      <Link href={path}>
        {icon}
      </Link>
    </span>
    {!isMinimized && (
      <Link href={path} className="ml-5 mt-1 font-medium">
        {label}
      </Link>
    )}
    {onClick && !isMinimized && (
      <div className="ml-5 mt-1 font-medium" onClick={onClick}>
        {label}
        {onClick && <LogoutModal />}
      </div>
    )}
  </li>
);

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const { data: session, status } = useSession();

  const handleToggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (status === "authenticated") {
    return (
      <aside className={`flex place-content-center bg-[#D9D9D9] text-black ${isMinimized ? "w-[10vh]" : "w-[24vh]"} h-full transition-all`}>
        <nav>
          <div>
            <div className={`mb-2 h-10 py-2 cursor-pointer ${isMinimized ? "rotate-180" : ""}`} onClick={handleToggleMinimize}>
              <IoMdMenu className="text-black text-2xl ml-5" />
            </div>
            <div className={`h-10 text-center mt-4 py-2 text-base ${isMinimized ? "hidden" : ""}`}>
              <Image className="h-20 w-20 rounded-full mx-auto mb-3" src="/photos/ccs.png" width={200} height={200} alt="User" />
              <p>{session.user.name}</p>
            </div>
          </div>
          <ul className="mt-24">
            {session.user.position === "Faculty" && (
              <>
                <MenuItem path="/dashboard" icon={<FaHome className="text-black text-2xl ml-5" />} label="HOME" isMinimized={isMinimized} />
                <MenuItem path="/dashboard/profile" icon={<IoMdPerson className="text-black text-2xl ml-5" />} label="PROFILE" isMinimized={isMinimized} />
                <MenuItem path="/dashboard/archiving" icon={<FaBook className="text-black text-2xl ml-5" />} label="ARCHIVING" isMinimized={isMinimized} />
                {/* Add more menu items as needed */}
              </>
            )}
          </ul>
          <ul className="mt-24">
            {session.user.position === "Superadmin" && (
              <>
                <MenuItem path="/superadmin/dashboard" icon={<FaHome className="text-black text-2xl ml-12" />} label="HOME" />
                <MenuItem path="/superadmin/dashboard/manageuser" icon={<IoMdPerson className="text-black text-2xl ml-5" />} label="MANAGE USERS" />
                {/* Add more menu items as needed */}
              </>
            )}
          </ul>
          <ul className="mt-24">
            {session.user.position === "Secretary" && (
              <>
                <MenuItem path="/secretary/dashboard" icon={<FaHome className="text-black text-2xl ml-12" />} label="HOME" />
                <MenuItem path="/secretary/dashboard/profile" icon={<IoMdPerson className="text-black text-2xl ml-5" />} label="PROFILE" />
                <MenuItem path="/secretary/dashboard/archiving" icon={<FaBook className="text-black text-2xl ml-5" />} label="ARCHIVING" isMinimized={isMinimized} />
                <MenuItem path="/secretary/dashboard/view-faculty" icon={<FaBook className="text-black text-2xl ml-5" />} label="VIEW FACULTY" isMinimized={isMinimized} />

                {/* Add more menu items as needed */}
              </>
            )}
          </ul>
          <div className="">

            <li className={`flex items-center mb-2 hover:bg-[#9D9494] h-10 py-2 ${isMinimized ? "mt-4" : "mt-4"}`}>

              <span className="">
                <FaSignOutAlt className="text-black text-2xl ml-5" />
              </span>
              {!isMinimized && (
                <div className="ml-5 mt-1 font-medium">

                  <LogoutModal />
                </div>
              )}
            </li>
          </div>

        </nav>
      </aside >
    );
  }

  if (status === "loading") {
    return <div>loading...</div>;
  }
};

export default Sidebar;