import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Archiving_Skeleton() {
  return (
    <div className="flex flex-col w-screen h-screen">
      {/* tasks */}
      <div className="flex justify-center items-center">
        <div className="flex flex-row bg-gray-300 h-10 w-[38%] -ml-8 space-x-5 py-1 rounded-lg">
          <Skeleton className="h-8 w-20 ml-2 bg-gray-400" />
          <Skeleton className="h-8 w-36 bg-gray-400" />
          <Skeleton className="h-8 w-36 bg-gray-400" />
          <Skeleton className="h-8 w-36 bg-gray-400" />
        </div>
      </div>

      {/* filter */}
      <div className="h-10 w-[50%] ml-12 mt-36 bg-gray-300 rounded-lg py-1">
        <Skeleton className="h-8 w-32 ml-2 bg-gray-400" />
      </div>

      {/* drop downs */}
      <div className="flex flex-row mt-2 space-x-6">
        <div className="bg-gray-300 w-[15%] h-10 ml-12 mt-2 rounded-lg py-1">
          <Skeleton className="h-8 w-36 ml-10 bg-gray-400" />
        </div>
        <div className="bg-gray-300 w-[15%] h-10 mt-2 rounded-lg py-1">
          <Skeleton className="h-8 w-36 ml-10 bg-gray-400" />
        </div>
        <div className="bg-gray-300 w-[15%] h-10 mt-2 rounded-lg py-1">
          <Skeleton className="h-8 w-36 ml-10 bg-gray-400" />
        </div>
        <div className="bg-gray-300 w-[15%] h-10 mt-2 rounded-lg py-1">
          <Skeleton className="h-8 w-36 ml-10 bg-gray-400" />
        </div>
        <div className="bg-gray-300 w-[15%] h-10 mt-2 rounded-lg py-1">
          <Skeleton className="h-8 w-36 ml-10 bg-gray-400" />
        </div>
        <div className="bg-gray-300 w-[10%] h-10 mt-2 rounded-lg py-1">
          <Skeleton className="h-8 w-36 ml-1 bg-gray-400" />
        </div>
      </div>

      {/* table */}
      <div className="flex flex-row bg-gray-300 w-[94%] h-[65%] mt-2 ml-12 py-1">
        <Skeleton className="h-8 w-28 ml-2 bg-gray-400" />
        <Skeleton className="h-8 w-28 ml-[20%] bg-gray-400" />
        <Skeleton className="h-8 w-28 ml-14 bg-gray-400" />
        <Skeleton className="h-8 w-24 ml-10 bg-gray-400" />
        <Skeleton className="h-8 w-16 ml-40 bg-gray-400" />
        <Skeleton className="h-8 w-32 ml-12 bg-gray-400" />
        <Skeleton className="h-8 w-16 ml-28 bg-gray-400" />
      </div>
    </div>
  );
}
