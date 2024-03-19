import ViewTable_Superadmin from "@/app/components/NewTable/ViewUser_Superadmin/ViewTable_Superadmin";
import Archive_Dialog from "@/app/components/New_Components/Archive_Dialog";
import { getAllUsers } from "@/app/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default async function page() {
  const users = await getAllUsers();
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto">
      <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center">
        <img
          className="
          w-[60%] h-auto object-cover flex items-center justify-center
          sm:w-[60%] sm:h-[100%] sm:object-cover sm:flex sm:items-center sm:justify-center
          md:w-[60%] md:h-[100%] md:object-cover md:flex md:items-center md:justify-center
          lg:w-[40%] lg:h-[100%] lg:object-cover lg:flex lg:items-center lg:justify-center
          xl:w-[35%] xl:h-[100%] xl:object-cover xl:flex xl:items-center xl:justify-center
          2xl:w-[30%] 2xl:h-[100%] 2xl:object-cover 2xl:flex 2xl:items-center 2xl:justify-center
          "
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div className="
      text-[30px] mt-5 mb-3 font-semibold text-[#5B0505] text-center
      sm:text-[33px] sm:mt-5 sm:mb-3 sm:font-semibold sm:text-[#5B0505] sm:text-center
      md:text-[36px] md:mt-5 md:mb-3 md:font-semibold md:text-[#5B0505] md:text-center
      lg:text-[39px] lg:mt-5 lg:mb-3 lg:font-semibold lg:text-[#5B0505] lg:text-center
      xl:text-[42px] xl:mt-5 xl:mb-3 xl:font-semibold xl:text-[#5B0505] xl:text-center
      2xl:text-[50px] 2xl:mt-5 2xl:mb-5 2xl:font-semibold 2xl:text-[#5B0505] 2xl:text-center
      ">
        MANAGE ACCOUNTS 
      </div>
      <div className="px-5">
          <ViewTable_Superadmin users={users} />
        </div>

    </div>
  );
}
