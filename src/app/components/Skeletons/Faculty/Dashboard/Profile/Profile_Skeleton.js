import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Profile_Skeleton = () => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto bg-slate-50">
      {/* parent div */}
      <div className="max-w-[90%] my-6">
        {/* parent div  */}
        <div className="flex flex-row">
          {/* profile */}
          <div className="mt-20 ml-40">
            <Skeleton className="h-32 w-32 bg-gray-300 rounded-full" />
          </div>
          <div className="ml-40 mt-9 space-y-2">
            <Skeleton className="h-8 w-40 bg-gray-400" />
            <Skeleton className="h-8 w-52 bg-gray-400" />
            <Skeleton className="h-8 w-96 bg-gray-400" />
            <Skeleton className="h-8 w-24 bg-gray-400" />
          </div>
          <div className="ml-40 mt-20 space-y-2">
            <Skeleton className="h-8 w-60 bg-gray-400" />
            <Skeleton className="h-8 w-60 mt-2 bg-gray-400" />
            <Skeleton className="h-8 w-60 mt-2 bg-gray-400" />
          </div>
        </div>
        {/* academic qualification */}
        <div className="flex bg-gray-300 w-[95%] h-[30px] mt-4 ml-24 items-center justify-center">
          <Skeleton className="h-5 w-80 bg-gray-400" />
        </div>
        {/* parent div */}
        <div className="flex flex-col ml-40 mt-4 space-y-11 ">
          <div className="flex flex-row space-x-[29%]">
            <Skeleton className="h-8 w-72 bg-gray-400" />
            <Skeleton className="h-8 w-24 bg-gray-400" />
          </div>
          <div className="flex flex-row space-x-[435px]">
            <Skeleton className="h-8 w-52 bg-gray-400" />
            <Skeleton className="h-8 w-24 bg-gray-400" />
          </div>
          <div className="flex flex-row space-x-[435px]">
            <Skeleton className="h-8 w-52 bg-gray-400" />
            <Skeleton className="h-8 w-24 bg-gray-400" />
          </div>
          {/* parent div of seminars and job experience */}
          <div className="flex flex-row space-x-24">
            {/* seminars and training attended */}
            <div className="flex bg-gray-300 w-[50%] h-[30px] -mt-6 -ml-16 items-center justify-center">
              <Skeleton className="h-5 w-80 bg-gray-400" />
            </div>
            {/* job experience */}
            <div className="flex bg-gray-300 w-[50%] h-[30px] -mt-6 -ml-16 items-center justify-center">
              <Skeleton className="h-5 w-80 bg-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex bg-gray-300 w-[95%] h-[30px] mt-40 ml-24 items-center justify-center">
          <Skeleton className="h-5 w-96 bg-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Profile_Skeleton;
