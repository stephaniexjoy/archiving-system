"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      className="mt-20 bg-[#737373] text-[15px] text-white text-center w-[100px] h-[30px] rounded-lg hover:bg-gray-400"
      variant="outline"
      onClick={() => {
        router.push(`/superadmin/dashboard/manageuser`);
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
