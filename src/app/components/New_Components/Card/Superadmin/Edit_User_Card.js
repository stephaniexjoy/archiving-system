"use client";
import React from "react";

import Image from "next/image";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BackButton from "@/app/components/New_Components/Buttons/BackButton";
import { db } from "@/app/lib/prisma_db";
import { adminUpdateUser } from "@/app/lib/actions/actions";
import { useToast } from "@/components/ui/use-toast";

export default function Edit_User_Card({ user }) {
  const { toast } = useToast();
  return (
    <Card
      className="
  flex w-[100%] h-auto mt-4 items-center justify-center bg-slate-50 
  sm:flex sm:w-[80%] sm:h-auto sm:mt-4 sm:items-center sm:justify-center
  md:flex md:w-[80%] md:h-auto md:mt-4 md:items-center md:justify-center
  lg:flex lg:w-[70%] lg:h-auto lg:mt-4 lg:items-center lg:justify-center
  xl:flex xl:w-[70%] xl:h-auto xl:mt-4 xl:items-center xl:justify-center
  2xl:flex 2xl:w-[60%] 2xl:mt-10 2xl:items-center 2xl:justify-center
  "
    >
      <CardContent>
        <div className="flex flex-col w-auto h-auto items-center justify-center">
          <h1
            className="
          text-[30px] mt-5 mb-3 font-semibold text-[#5B0505] text-center
          sm:text-[33px] sm:mt-5 sm:mb-3 sm:font-semibold sm:text-[#5B0505] sm:text-center
          md:text-[36px] md:mt-5 md:mb-3 md:font-semibold md:text-[#5B0505] md:text-center
          lg:text-[39px] lg:mt-5 lg:mb-3 lg:font-semibold lg:text-[#5B0505] lg:text-center
          xl:text-[42px] xl:mt-5 xl:mb-3 xl:font-semibold xl:text-[#5B0505] xl:text-center
          2xl:text-[50px] 2xl:mt-5 2xl:mb-5 2xl:font-semibold 2xl:text-[#5B0505] 2xl:text-center
          "
          >
            {user.name}
          </h1>

          <form
            className="flex items-center justify-center"
            action={async (formData) => {
              const updateData = await adminUpdateUser(formData, user.id);

              console.log(updateData);
              if (updateData === "Password does not match") {
                toast({
                  description: "Password does not match.",
                  variant: "destructive",
                });
              } else if (updateData) {
                toast({
                  description: "Successfully Updated this Profile.",
                  variant: "default",
                });
              } else {
                toast({
                  description: "Error updating this profile.",
                  variant: "destructive",
                });
              }
            }}
          >
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-2">
                <HiPencilAlt size={45} className="text-gray-500 opacity-26" />
                <select
                  className="w-[250px] h-10 text-[20px] text-[#5B0505] bg-transparent rounded-lg border-2 outline-[#737373]"
                  name="position"
                  id="position"
                >
                  <option value={user.position}>{user.position}</option>
                  <option value="Associate Dean">Associate Dean</option>
                  <option value="Secretary">Secretary</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Unit Head">Unit Head</option>
                  <option value="Coordinator">Coordinator</option>
                </select>
              </div>

              <div className="flex flex-row items-center gap-2">
                <FaUserAlt size={45} className="text-gray-500 opacity-26" />
                <input
                  type="email"
                  name="email"
                  placeholder={user.email}
                  className="w-[250px] text-[20px] text-[#5B0505] bg-transparent border-2 outline-[#737373] py-1 rounded-lg"
                />
              </div>

              <div className="flex flex-row items-center gap-2">
                <FaLock size={45} className="text-gray-500 opacity-26" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-[250px] text-[20px] text-[#5B0505] bg-transparent border-2 outline-[#737373] rounded-lg"
                />
              </div>

              <div className="flex flex-row items-center gap-2">
                <FaLock size={45} className="text-gray-500 opacity-26" />
                <input
                  type="password"
                  name="passwordconfirm"
                  placeholder="Confirm Password"
                  className="w-[250px] text-[20px] text-[#5B0505] bg-transparent border-2 outline-[#737373] rounded-lg"
                />
              </div>

              <div className="flex flex-row justify-center space-x-8">
                <BackButton />
                <button
                  type="submit"
                  className="mt-20 bg-[#737373] text-[15px] text-white text-center w-[100px] h-[30px] rounded-lg hover:bg-gray-400"
                >
                  CONFIRM
                </button>
              </div>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
