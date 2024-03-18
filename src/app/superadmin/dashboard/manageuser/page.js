import ViewTable_Superadmin from "@/app/components/NewTable/ViewUser_Superadmin/ViewTable_Superadmin";
import Archive_Dialog from "@/app/components/New_Components/Archive_Dialog";
import { getAllUsers } from "@/app/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default async function page() {
  const users = await getAllUsers();
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="bg-[#AD5606] w-full h-[12%] flex items-center justify-center">
        <Image
          className="w-[27%] h-[100%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
          width={300}
          height={100}
        />
      </div>

      {/* Manage Accounts Section */}
      <div className="w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-auto">
        <h1 className="text-[55px] font-semibold text-[#5B0505] text-center">
          MANAGE ACCOUNTS
        </h1>
        <div className="container flex justify-center mx-auto">
          <ViewTable_Superadmin users={users} />
        </div>
      </div>
    </div>
  );
}
