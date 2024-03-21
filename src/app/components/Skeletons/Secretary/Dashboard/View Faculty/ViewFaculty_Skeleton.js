import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export default function ViewFaculty_Skeleton() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="h-12 w-[23%] ml-[38%] mt-9 bg-gray-400 rounded-lg"></div>

      <div className="h-12 w-[50%] ml-4 mt-11 bg-gray-300 rounded-lg py-1">
        <Skeleton className="h-10 w-24 ml-2 bg-gray-400 rounded-lg" />
      </div>

      <div className="flex flex-row h-[75%] w-[97%] ml-4 mt-7 bg-gray-300 py-1">
        <Skeleton className="h-10 w-24 ml-2 bg-gray-400 rounded-lg" />
        <Skeleton className="h-10 w-24 ml-[24%] bg-gray-400 rounded-lg" />
        <Skeleton className="h-10 w-24 ml-32 bg-gray-400 rounded-lg" />
        <Skeleton className="h-10 w-24 ml-36 bg-gray-400 rounded-lg" />
        <Skeleton className="h-10 w-24 ml-20 bg-gray-400 rounded-lg" />
        <Skeleton className="h-10 w-24 ml-16 bg-gray-400 rounded-lg" />
      </div>
    </div>
  );
}
