import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard_Skeleton() {
  return (
    <div className="flex flex-col w-screen h-screen">
      {/* parent div */}
      <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center py-1 ">
        <Skeleton className="h-full w-96 bg-gray-400 rounded-lg" />
      </div>

      {/* parent div */}
      <div className="flex mt-[2%] px-10 w-full">
        {/* welcome */}
        <div>
          <Skeleton className="ml-2 mt-0 h-8 w-20 bg-gray-400" />
        </div>

        {/* faculty */}
        <div>
          <Skeleton className="-ml-20 mt-12 h-9 w-44 bg-gray-400" />
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

      {/* parent div */}
      <div className="flex flex-row mt-[1%] px-10 space-x-20">
        {/* archived materials */}
        <div>
          <Skeleton className="ml-1 mt-20 h-[270%] w-[10500%] bg-gray-400" />
        </div>
        {/* calendar */}
        <div>
          <Skeleton className="ml-96 mt-20 h-[270%] w-[112%] bg-gray-400" />
        </div>
        {/* parent div */}
        <div className="flex flex-col items-center space-y-8 mb-11">
          <div>
            <Skeleton className="ml-96 mt-20 h-[170%] w-[40%] bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
