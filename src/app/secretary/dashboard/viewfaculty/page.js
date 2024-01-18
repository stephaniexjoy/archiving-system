
import React from 'react'
import { FaSearch } from "react-icons/fa";
import CreateModal from "@/app/components/Modal/CreateModal";
import DeleteModal from "@/app/components/Modal/DeleteModal";
import { revalidatePath } from "next/cache";
import Link from "next/link";



async function page() {
  async function getEmptyData() {
    return Promise.resolve([]); // Returning an empty array
  }

  async function getUsers() {
    "use server"
    const res = await fetch('http://localhost:3000/api/users/fetch-users',)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return getEmptyData()
    }
    revalidatePath('/secretary/dashboard/viewfaculty/')
    return res.json()
  }
  const users = await getUsers()
  return (
    <div className="ml-72 flex flex-col w-auto h-screen">
      <div className="flex flex-col w-auto h-screen items-center py-10">
        <img
          className="ml-10 w-full md:w-[850px] h-[150px] object-cover"
          alt=""
          src="/photos/E-Archiving System.png"
        />

        <div className="border items-center bg-[#AD5606] w-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-auto mt-10 p-16 rounded-lg shadow-lg">
          <div className="flex flex-row gap-x-5 items-center md:ml-48 mb-5 mt-5 md:h-20">
            <h1 className="inline-block md:text-[45px] opacity-60 -ml-36 font-semibold md:shadow-zinc-400">
              FIND
            </h1>
            <input
              type="search"
              name="find"
              placeholder=""
              className="top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[50px] items-center md:text-shadow-inner"
            />
            <div>
              <h1>
                <FaSearch size="40" style={{ top: "100px", left: "10px" }} />
              </h1>
            </div>

            <div>
              <CreateModal />
            </div>
          </div>
          <div className="bg-[#DABB9C] py-10 border w-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-auto mt-10 p-16 rounded-lg shadow-lg">
            <h1 className=" text-[35px] mb-5 font-semibold text-orange-900 text-center ">
              VIEW FACULTY
            </h1>
            <div>
              <div className="container flex justify-center mx-auto">
                <div className="flex flex-col">
                  <div className="w-full">
                    <div className="border-b border-gray-200 shadow">
                      <table className="divide-y divide-gray-300" style={{ borderCollapse: 'separate', borderSpacing: '0 30px' }}>
                        <tbody className="bg-[#837979] divide-y divide-gray-300">
                          {users.map((user) => (
                            <tr key={user.id} className="whitespace-nowrap">
                              <td className="px-6 py-4">
                                <div className="mr-[500px] text-xl font-semibold text-white">
                                  {user.name}
                                </div>
                              </td>
                              <td></td>
                              <td></td>

                              <td className="px-6 py-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default page