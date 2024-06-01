"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBook, FaHome, FaSignOutAlt } from "react-icons/fa";
import { IoMdMenu, IoMdPerson } from "react-icons/io";
import Signout_Dialog from "./New_Components/Signout_Dialog";
import Sidebar_Skeleton from "./Skeletons/Sidebar_Skeleton";

const MenuItem = ({ path, icon, label, onClick, isMinimized }) => (
  <li
    className={`flex items-center mb-2 hover:bg-[#9D9494] rounded h-10 px-2 ${
      isMinimized ? "mt-4" : "mt-4"
    }`}
  >
    <span className={onClick ? "absolute left-0" : ""}>
      <Link href={path}>{icon}</Link>
    </span>
    {!isMinimized && (
      <Link href={path} className="ml-5 mt-1 font-medium">
        {label}
      </Link>
    )}
    {onClick && !isMinimized && (
      <div className="ml-3 mt-1 font-medium" onClick={onClick}>
        {label}
        <Signout_Dialog />
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

  const userImage = session?.user.image ? (
    <Image
      className="h-20 w-20 rounded-full mx-auto mb-3"
      src={session.user.image}
      width={1000}
      height={1000}
      alt={"none"}
      priority={true}
    />
  ) : (
    <Image
      className="h-20 w-20 rounded-full mx-auto mb-3"
      src="/photos/ccsLogo.png"
      width={2201}
      height={2201}
      alt={"none"}
      priority={true}
    />
  );

  if (status === "authenticated") {
    return (
      <aside
        className={`flex place-content-center bg-[#5B0505] text-white ${
          isMinimized ? "w-[10vh]" : "w-[24vh]"
        } h-auto transition-all`}
      >
        <nav>
          <div>
            <div
              className={`mb-2 h-10 px-2 cursor-pointer ${
                isMinimized ? "rotate-180" : ""
              }`}
              onClick={handleToggleMinimize}
            >
              <IoMdMenu className="text-white text-2xl mt-2 ml-3" />
            </div>
            <div
              className={`h-10 text-center mt-4 py-2 text-base center ${
                isMinimized ? "hidden" : ""
              }`}
            >
              {userImage}
              <p>{session.user.name}</p>
            </div>
          </div>
          <ul className="mt-24">
            {session.user.position === "Faculty" && (
              <>
                <MenuItem
                  path="/dashboard"
                  icon={<FaHome className="text-white text-2xl ml-5" />}
                  label="HOME"
                  isMinimized={isMinimized}
                />
                <MenuItem
                  path="/dashboard/profile"
                  icon={<IoMdPerson className="text-white text-2xl ml-5 " />}
                  label="PROFILE"
                  isMinimized={isMinimized}
                />
                <MenuItem
                  path="/dashboard/archiving"
                  icon={<FaBook className="text-white text-2xl ml-5" />}
                  label="ARCHIVING"
                  isMinimized={isMinimized}
                />
                {/* Add more menu items as needed */}
              </>
            )}
          </ul>
          <ul className="mt-24">
            {session.user.position === "Admin" && (
              <>
                <MenuItem
                  path="/dashboard"
                  icon={<FaHome className="text-white text-2xl ml-5" />}
                  label="HOME"
                  isMinimized={isMinimized}
                />
                <MenuItem
                  path="/dashboard/manageuser"
                  icon={<IoMdPerson className="text-white text-2xl ml-5" />}
                  label="MANAGE USERS"
                  isMinimized={isMinimized}
                />
                {/* Add more menu items as needed */}
              </>
            )}
          </ul>
          <ul className="mt-24">
            {session.user.position === "Secretary" && (
              <>
                <MenuItem
                  path="/dashboard"
                  icon={<FaHome className="text-white text-2xl ml-5" />}
                  label="HOME"
                  isMinimized={isMinimized}
                />
                <MenuItem
                  path="/dashboard/profile"
                  icon={<IoMdPerson className="text-white text-2xl ml-5" />}
                  label="PROFILE"
                  isMinimized={isMinimized}
                />
                <MenuItem
                  path="/dashboard/archiving"
                  icon={<FaBook className="text-white text-2xl ml-5" />}
                  label="ARCHIVING"
                  isMinimized={isMinimized}
                />
                <MenuItem
                  path="/dashboard/viewfaculty/"
                  icon={<FaBook className="text-white text-2xl ml-5" />}
                  label="VIEW FACULTY"
                  isMinimized={isMinimized}
                />
                {/* Add more menu items as needed */}
              </>
            )}
          </ul>

          <div className="">
            <li
              className={`flex items-center mb-2 hover:bg-[#9D9494] rounded h-10 px-2 ${
                isMinimized ? "mt-4" : "mt-4"
              }`}
            >
              {/* <span className="">
                <FaSignOutAlt className="text-white text-2xl center cursor-pointer" />
                
              </span> */}

              <div className="ml-1 -mt-1 font-medium ">
                <Signout_Dialog isMinimized={isMinimized}/>
              </div>
            </li>
          </div>
        </nav>
      </aside>
    );
  }
  if (status === "loading") {
    return (
      <>
        <Sidebar_Skeleton />
      </>
    );
  }
};

export default Sidebar;
