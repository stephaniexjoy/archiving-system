import React from "react";

import { FaSearch } from "react-icons/fa";
import CreateModal from "@/app/components/Modal/CreateModal";
import DeleteModal from "@/app/components/Modal/DeleteModal";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import Archive_Dialog from "@/app/components/New_Components/Archive_Dialog";

export default async function page() {
  async function getEmptyData() {
    return Promise.resolve([]); // Returning an empty array
  }

  async function getUsers() {
    "use server";
    const res = await fetch("http://localhost:3000/api/users/fetch-users");
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return getEmptyData();
    }
    revalidatePath("/superadmin/dashboard/manageuser");
    return res.json();
  }
  const users = await getUsers();
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="bg-[#AD5606] w-full h-[12%] flex items-center justify-center">
        <img
          className="w-[27%] h-[100%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      {/* Search and Create Account Section */}
      <div className="flex flex-row mt-5 mb-5 md:h-20 px-10">
        <h1 className="text-[#5B0505] text-[45px] font-semibold md:shadow-zinc-400 mr-[2%]">
          FIND
        </h1>
        <div className="relative">
          <input
            type="search"
            name="find"
            placeholder=""
            className="text-md md:text-xl text-[#242323] bg-[#D9D9D9] w-[1600px] h-[60px] md:text-shadow-inner"
          />
        </div>
        <div className="relative bg-[#6A6A6A] p-2 h-[60px] w-auto ml-[1%]">
          <FaSearch size="50" />
        </div>
      </div>

      {/* Manage Accounts Section */}
      <div className="w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-auto">
        <h1 className="text-[55px] font-semibold text-[#5B0505] text-center">
          MANAGE ACCOUNTS
        </h1>
        <div className="container flex justify-center mx-auto">
          <div className="flex flex-col">
            <div className="w-full">
              <table
                className="divide-y divide-gray-300"
                style={{ borderCollapse: "separate", borderSpacing: "0 30px" }}
              >
                <tbody className="bg-[#837979] divide-y divide-gray-300">
                  {users.map((user) => (
                    <tr key={user.id} className="whitespace-nowrap">
                      <td className="px-6 py-4">
                        <div className="mr-[800px] text-xl font-semibold text-white">
                          {user.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/superadmin/dashboard/manageuser/edit-user/${user.id}/`}
                          className="px-8 py-1 text-base font-semibold text-white bg-[#675454] rounded-md"
                        >
                          EDIT
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/superadmin/dashboard/manageuser/view-user/${user.id}/`}
                          className="px-8 py-1 text-base font-semibold text-white bg-[#675454] rounded-md"
                        >
                          VIEW
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <Archive_Dialog userId={user.id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
