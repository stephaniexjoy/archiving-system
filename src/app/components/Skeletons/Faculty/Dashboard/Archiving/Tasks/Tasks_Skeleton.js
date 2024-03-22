import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Tasks_Skeleton() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col h-[90%] w-[94%] bg-gray-200 rounded-lg">
        <Skeleton className="h-14 w-40 ml-9 mt-4 bg-gray-400" />
        <Skeleton className="h-4 w-72 ml-8 mt-2 bg-gray-400" />
        <div className="h-[64%] w-[33%] ml-[63%] -mt-12 bg-gray-300 rounded-lg ">
          <Skeleton className="h-16 w-20 ml-14 mt-5 bg-gray-400" />
          <Skeleton className="h-10 w-28 ml-[72%] -mt-16 bg-gray-400" />
          <Skeleton className="h-10 w-32 ml-[37%] mt-[36%]  bg-gray-400" />
          <Skeleton className="h-16 w-44 ml-[33%] mt-[5%]  bg-gray-400" />
        </div>
        <div className="w-[40%] h-[30%] ml-8 -mt-16 bg-gray-400 rounded-lg"></div>
      </div>
    </div>
  );
}
