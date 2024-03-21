import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Profile_Skeleton() {
  return (
    <div className="flex flex-col w-screen h-screen items-center">
      <div className="h-[100%] w-[55%] bg-gray-200 mt-3">
        {/* profile pic */}
        <div className="h-56 w-56 ml-72 mt-24 bg-gray-300 rounded-full"></div>
        {/* name */}
        <div className="flex flex-row ml-14 mt-24 space-x-72">
          <Skeleton className="h-8 w-20 bg-gray-400" />
          <Skeleton className="h-10 w-20 bg-gray-400" />
        </div>
        {/* age */}
        <div className="flex flex-row ml-14 mt-3 space-x-72">
          <Skeleton className="h-8 w-20 bg-gray-400" />
          <Skeleton className="h-10 w-20 bg-gray-400" />
        </div>
        {/* sex */}
        <div className="flex flex-row ml-14 mt-3 space-x-72">
          <Skeleton className="h-8 w-20 bg-gray-400" />
          <Skeleton className="h-10 w-20 bg-gray-400" />
        </div>
        {/* employee no */}
        <div className="flex flex-row ml-14 mt-3 space-x-52">
          <Skeleton className="h-8 w-40 bg-gray-400" />
          <Skeleton className="h-10 w-40 bg-gray-400" />
        </div>
        {/* department */}
        <div className="flex flex-row ml-14 mt-3 space-x-52">
          <Skeleton className="h-8 w-40 bg-gray-400" />
          <Skeleton className="h-10 w-64 bg-gray-400" />
        </div>
        {/* designation */}
        <div className="flex flex-row ml-14 mt-3 space-x-52">
          <Skeleton className="h-8 w-40 bg-gray-400" />
          <Skeleton className="h-10 w-24 bg-gray-400" />
        </div>
        {/* institutional email */}
        <div className="flex flex-row ml-14 mt-3 space-x-36">
          <Skeleton className="h-8 w-56 bg-gray-400" />
          <Skeleton className="h-10 w-60 bg-gray-400" />
        </div>
      </div>
    </div>
  );
}
