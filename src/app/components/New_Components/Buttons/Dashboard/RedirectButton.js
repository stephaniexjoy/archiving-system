"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const RedirectButton = () => {
  const router = useRouter();
  return (
    <button
      className="bg-[#737373] text-[15px] text-white text-center bg-transparent  text-xl  font-bold cursor-pointer
      sm:bg-transparent sm:text-white sm:text-xl sm:mt-2 sm:w-full sm:font-bold sm:cursor-pointer
      md:bg-transparent md:text-white md:text-xl md:mt-2 md:w-full md:font-bold md:cursor-pointer
      lg:bg-transparent lg:text-white lg:text-xl lg:mt-2 lg:w-full lg:font-bold lg:cursor-pointer
      xl:bg-transparent xl:text-white xl:text-2xl xl:mt-2 xl:w-full xl:font-bold xl:cursor-pointer
      2xl:text-center 2xl:bg-transparent 2xl:text-white 2xl:text-2xl 2xl:font-bold 2xl:cursor-pointerr w-full h-full rounded-lg "
      onClick={() => {
        router.push(`/dashboard/archiving`);
      }}
    >
      UPLOAD MATERIAL
    </button>
  );
};

export default RedirectButton;
