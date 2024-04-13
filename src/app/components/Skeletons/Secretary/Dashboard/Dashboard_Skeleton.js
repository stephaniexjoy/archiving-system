import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard_Skeleton() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto">
      {/* parent div */}
      <div className="flex mt-[2%] px-10">
        {/* welcome */}
        <div className="ml-2 h-8 w-20 bg-gray-400 rounded-lg"></div>

        {/* faculty */}
        <div className="-ml-20 mt-12 h-9 w-44 bg-gray-400 rounded-lg"></div>

        {/* filler */}
        <div className="ml-24 mt-4 h-[80%] w-[71%] bg-gray-300 rounded-lg"></div>

        {/* notification logo */}
        <div className="ml-4 mt-4 h-20 w-20 bg-gray-300 rounded-lg"></div>
      </div>

      {/* parent div */}
      <div className=" flex flex-row ml-7 mt-[2%] gap-x-11">
        {/* archived materials */}
        <div className="bg-gray-300 mt-5 w-[19%] h-[320px] rounded-lg">
          <Skeleton className="h-16 w-48 ml-12 mt-10 bg-gray-400" />
          <Skeleton className="mt-14 ml-24 h-24 w-20 bg-gray-400" />
        </div>

        {/* no. of faculty */}
        <div className=" bg-gray-300 mt-5 w-[19%] h-[320px] rounded-lg">
          <Skeleton className=" h-16 w-48 ml-10 mt-10 bg-gray-400" />
          <Skeleton className=" h-24 w-20 ml-24 mt-14 bg-gray-400" />
        </div>

        {/* parent div of create account, view materials, view faculty */}
        <div className="flex flex-col items-center ml-28  mt-6">
          {/* create account */}
          <div className=" bg-gray-300 w-[500%] h-[90px] p-4 rounded-lg">
            <Skeleton className="h-12 w-[100%] ml-1 mt-1 bg-gray-400" />
          </div>
          {/* view materials */}
          <div className="mt-6 bg-gray-300 w-[500%] h-[90px] p-4 :mx-4 rounded-lg">
            <Skeleton className="h-10 w-[100%] mt-2 bg-gray-400" />
          </div>
          {/* view faculty */}
          <div className="mt-6 bg-gray-300 w-[500%] h-[90px] p-4 mx-4 rounded-lg">
            <Skeleton className="h-10 w-[100%] mt-2 bg-gray-400" />
          </div>
        </div>

        {/* calendar */}
        <div className="w-[19%] h-[320px] ml-28 mt-5 rounded-lg bg-gray-300"></div>
        {/* ccs logo */}
        <div className="w-40 h-40 -ml-7 mt-32 rounded-full bg-gray-300"></div>
      </div>
      {/* filter users */}
      <div className="bg-gray-300 w-[35%] h-12 mt-14 ml-9 rounded-lg">
        <Skeleton className="h-8 w-24 ml-2 mt-2 bg-gray-400" />
      </div>
      <div className="bg-gray-300 w-[94%] h-44 mt-3 ml-9">
        <Skeleton className="h-8 w-24 ml-2 mt-2 bg-gray-400" />
        <Skeleton className="h-8 w-24 ml-[20%] -mt-8 bg-gray-400" />
        <Skeleton className="h-8 w-24 ml-[35%] -mt-8 bg-gray-400" />
        <Skeleton className="h-8 w-24 ml-[73%] -mt-8 bg-gray-400" />
      </div>
    </div>
  );
}
