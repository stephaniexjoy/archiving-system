import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard_Skeleton() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto">
      {/* parent div */}
      <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center py-1 ">
        <Skeleton className="h-full w-96 bg-gray-400 rounded-lg" />
      </div>

      {/* parent div */}
      <div className="flex mt-[2%] px-10 w-full">
        {/* welcome */}
        <div>
          <Skeleton className="ml-2 h-8 w-20 bg-gray-500" />
        </div>

        {/* faculty */}
        <div>
          <Skeleton className="-ml-20 mt-12 h-9 w-44 bg-gray-500" />
        </div>

        {/* filler */}
        <div>
          <Skeleton className="ml-32 mt-4 h-[80%] w-[800%] bg-gray-400" />
        </div>

        {/* notification logo */}
        <div>
          <Skeleton className="ml-[2620%] mt-4 h-[50%] w-10 bg-gray-400" />
        </div>
      </div>

      {/* parent div of archived materials, calendar, ccs logo, edit privacy, and upload material */}
      <div className="flex flex-row mt-16 px-10 gap-x-12">
        {/* archived materials */}
        <div className="bg-gray-400 w-[460px] h-[360px] py-6 rounded-lg">
          <Skeleton className="h-10 w-[95%] ml-3 mt-9 bg-gray-500" />
          <Skeleton className="h-24 w-20 ml-44 mt-14 bg-gray-500" />
        </div>

        {/* calendar */}
        <div className="bg-gray-400 w-[460px] h-[360px] rounded-lg"></div>

        {/* parent div of ccs logo, edit privacy, and upload materials */}
        <div className="flex flex-col items-center space-y-8 mb-11">
          {/* ccs logo */}
          <div className="w-32 h-32 ml-4 -mt-3 rounded-full bg-gray-400"></div>
          {/* edit privacy */}
          <div className="mt-6 bg-gray-400 w-[480px] h-[90px] p-4 mx-4 rounded-lg">
            <Skeleton className="h-10 w-48 ml-32 mt-2 bg-gray-500" />
          </div>
          {/* upload materials */}
          <div className="mt-6 bg-gray-400 w-[480px] h-[90px] p-4 mx-4 rounded-lg">
            <Skeleton className="h-10 w-[50%] ml-28 mt-2 bg-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
