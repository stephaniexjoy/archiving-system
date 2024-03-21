import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard_Skeleton() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto">
      {/* parent div */}
      <div className="flex mt-[2%] px-10">
        {/* welcome */}
        <div className="ml-2 h-8 w-20 bg-gray-400 rounded-lg"></div>

        {/* admin */}
        <div className="-ml-20 mt-12 h-9 w-44 bg-gray-400 rounded-lg"></div>

        {/* filler */}
        <div className="ml-24 mt-4 h-[80%] w-[85%] bg-gray-300 rounded-lg"></div>
      </div>

      {/* create account */}
      <div className="bg-gray-300 h-[10%] w-[65%] p-4 rounded-lg mb-5 mt-10 ml-11">
        <Skeleton className="h-10 w-[30%] ml-96 mt-3 bg-gray-400" />
      </div>
        <div className="flex flex-row mt-3 px-10 gap-x-12">
          {/* archive materials */}
          <div className="bg-gray-300 w-[33%] h-[90%] p-4 rounded-lg mb-5">
            <Skeleton className="h-12 w-[70%] ml-24 mt-5 bg-gray-400" />
            <Skeleton className="h-32 w-[20%] ml-60 mt-5 bg-gray-400" />
          </div>
        {/* no. of faculty */}
        <div className="bg-gray-300 w-[33%] h-[90%] p-4 rounded-lg mb-5">
            <Skeleton className="h-12 w-[70%] ml-24 mt-5 bg-gray-400" />
            <Skeleton className="h-32 w-[20%] ml-60 mt-5 bg-gray-400" />
          </div>

        {/* calendar */}
        <div className="bg-gray-300 -mt-32 w-[18%] h-[130%] rounded-lg"></div>

      
      </div>
        {/* filter users */}
        <div className="bg-gray-300 w-[35%] h-12 mt-8 ml-9 rounded-lg">
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
