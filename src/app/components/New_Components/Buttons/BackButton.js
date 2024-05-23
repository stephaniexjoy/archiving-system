"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      className="
      bg-[#5B0505] text-[15px] text-white text-center w-[100px] h-[30px]
      sm:bg-[#5B0505] sm:text-[17px] sm:text-white sm:text-center sm:w-[130px] sm:h-[32px]
      md:bg-[#5B0505] md:text-[19px] md:text-white md:text-center md:w-[130px] md:h-[34px]
      lg:bg-[#5B0505] lg:text-[21px] lg:text-white lg:text-center lg:w-[180px] lg:h-[36px]
      xl:bg-[#5B0505] xl:text-[23px] xl:text-white xl:text-center xl:w-[220px] xl:h-[38px]
      2xl:bg-[#5B0505] 2xl:text-[25px] 2xl:text-white 2xl:text-center 2xl:w-[250px] 2xl:h-[40px]
      "
      variant="outline"
      onClick={() => {
        router.push(`/dashboard/manageuser`);
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
