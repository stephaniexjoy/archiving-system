import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ManageUsers_Skeleton() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="h-12 w-[33%] ml-[33%] mt-9 bg-gray-400 rounded-lg"></div>

      <div className="h-12 w-[25%] ml-5 mt-11 bg-gray-300 rounded-lg py-1">
        <Skeleton className="h-10 w-24 ml-2 bg-gray-400 rounded-lg" />
      </div>

      <div className="flex flex-row h-[75%] w-[97%] ml-4 mt-7 bg-gray-300 py-1">
        <Skeleton className="h-10 w-24 ml-2 bg-gray-400 rounded-lg" />
        <Skeleton className="h-10 w-24 ml-[17%] bg-gray-400 rounded-lg" />
        <Skeleton className="h-10 w-24 ml-16 bg-gray-400 rounded-lg" />
        <Skeleton className="h-10 w-24 ml-20 bg-gray-400 rounded-lg" />
        <Skeleton className="h-10 w-24 ml-9 bg-gray-400 rounded-lg" />
        <Skeleton className="h-10 w-24 ml-8 bg-gray-400 rounded-lg" />
        <Skeleton className="h-10 w-24 ml-44 bg-gray-400 rounded-lg" />
      </div>
    </div>
  );
}
