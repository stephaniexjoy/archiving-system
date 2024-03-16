import ViewTable_Superadmin from "@/app/components/NewTable/ViewUser_Superadmin/ViewTable_Superadmin";
import Archive_Dialog from "@/app/components/New_Components/Archive_Dialog";
import { getAllUsers } from "@/app/lib/actions/actions";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default async function page() {
  const users = await getAllUsers();
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="bg-[#AD5606] w-full h-[12%] flex items-center justify-center">
        <img
          className="w-[27%] h-[100%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      {/* Manage Accounts Section */}
      <div className="w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-auto">
        <h1 className="text-[55px] font-semibold text-[#5B0505] text-center">
          MANAGE ACCOUNTS
        </h1>
        <div className="container flex justify-center mx-auto">
          {/*   <div className="flex flex-col">
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
          </div> */}
          <ViewTable_Superadmin users={users} />
        </div>
      </div>
    </div>
  );
}
