
import React from 'react'
import { FaSearch } from "react-icons/fa";
import CreateModal from "@/app/components/Modal/CreateModal";
import DeleteModal from "@/app/components/Modal/DeleteModal";
import { revalidatePath } from "next/cache";
import Link from "next/link";

async function page() {
  async function getEmptyData() {
    return Promise.resolve([]);
  }

  async function getUsers() {
    "use server"
    const res = await fetch('http://localhost:3000/api/users/fetch-users',)
    if (!res.ok) {
      return getEmptyData()
    }
    revalidatePath('/secretary/dashboard/viewfaculty/')
    return res.json()
  }
  const users = await getUsers()
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="bg-[#5B0505] w-full h-[12%] flex items-center justify-center">
        <img
          className="w-[27%] h-[100%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div className="bg-[#AD5606] flex flex-row mt-0 mb-5 md:h-20">
        <h1 className="text-[#DABB9C] mt-2 w-auto text-[45px] font-semibold md:shadow-zinc-400 ml-[3%]">
          FIND
        </h1>
        <div className="flex items-center">
          <input
            type="search"
            name="find"
            placeholder=""
            className="mt-1 ml-2 mr-3 text-md text-[#242323] bg-[#D9D9D9] w-[1300px] h-[60px] md:text-shadow-inner"
          />
          <div className="mt-1 ml-4 text-white bg-[#6A6A6A] p-2 h-[60px] w-auto">
            <FaSearch size="50" />
          </div>
        </div>
        <div className="mt-3 bg-[#6A6A6A] p-2 h-[60px] w-[100px] ml-[1%]">
          <button className="mt-2 ml-1 text-white text-[20px]">
            CREATE
          </button>
        </div>
        <div className="mt-3 bg-[#6A6A6A] p-2 h-[60px] w-[70px] ml-[1%]">
          <img
            className="h-auto w-auto mt-0 ml-0 object-cover"
            alt="Notification Logo"
            src="/photos/Notificationlogo.png"
          />
        </div>
      </div>

      <div className=" text-[50px] mt-5 mb-5 font-semibold text-[#5B0505] text-center ">
        VIEW FACULTY
      </div>
      <div>
        <div className="container flex justify-center mx-auto">
          <div className="flex flex-col">
            <div className="w-full">
              <table className="w-[1300px] divide-y divide-gray-300" style={{ borderCollapse: 'separate', borderSpacing: '0 30px' }}>
                <tbody className="bg-[#837979] divide-y divide-gray-300">
                  {users.map((user) => (
                    <tr key={user.id} className="whitespace-nowrap">
                      <td className="px-3 py-4">
                        <div className="mr-[700px] text-xl font-semibold text-white">
                          {user.name}
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td className="px-1 py-4">
                        <Link href={`/secretary/dashboard/viewfaculty/view-user/${user.id}/`} className="px-4 py-1 text-base font-semibold text-white bg-[#675454] rounded-md">VIEW</Link>
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

export default page