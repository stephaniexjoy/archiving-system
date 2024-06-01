import { Skeleton } from "@/components/ui/skeleton";

export default function Sidebar_Skeleton() {
  return (
    <aside className="flex place-content-center bg-[#5B0505] text-white w-[24vh] h-full">
      <nav>
        <div>
          <div className="mb-2 h-10 py-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full ml-5" />
          </div>
          <div className="h-10 text-center mt-4 py-2">
            <Skeleton className="my-2 h-20 w-20 rounded-full" />

            <Skeleton className="h-4 w-[20px] py-2" />
          </div>
        </div>
        <ul className="mt-24">
          {/* Skeleton for menu items */}
          {[1, 2, 3].map((item) => (
            <li key={item} className="flex items-center mb-2 h-10 py-2">
              <Skeleton className="w-8 h-8 bg-gray-300 rounded-full ml-5" />
              <Skeleton className="w-20 h-4 bg-gray-300 rounded ml-5 mt-1" />
            </li>
          ))}
        </ul>
        <div className="">
          <li className="flex items-center mb-2 h-10 py-2">
            <Skeleton className="w-8 h-8 bg-gray-300 rounded-full ml-5" />
            <Skeleton className="w-20 h-4 bg-gray-300 rounded ml-5 mt-1" />
          </li>
        </div>
      </nav>
    </aside>
  );
}
