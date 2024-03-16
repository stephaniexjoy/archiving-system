import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard_Skeleton() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center ">
        <Skeleton
          className="w-[60%] h-auto
      sm:w-[40%] sm:h-[70%]
      md:w-[40%] md:h-[70%]
      lg:w-[35%] lg:h-[100%]
      xl:w-[35%] xl:h-[100%]
      2xl:w-[35%] 2xl:h-[100%]
      object-cover flex items-center justify-center"
        />
      </div>

      <div className="flex mt-[2%] px-10 w-[55%] ml-0">
        <h1 className="text-[#5B0505] text-[15px] font-semibold sm:text-sm md:text-md lg:text-lg">
          WELCOME, <br />{" "}
          <span className="text-[#5B0505] text-[20px] font-semibold -mt-4">
            FACULTY
          </span>
        </h1>
        <img
          className=" h-[40%] w-[100%] mt-[1%] ml-[30%] sm:w-[70%] sm:h-[35%] md:w-[70%] md:h-[35%] lg:w-[70%] lg:h-[50%]"
          alt="Filler"
          src="../photos/Filler.png"
        />
        <img
          className="h-[40%] w-[90px] mt-[.8%] ml-[15%] sm:w-[50%] sm:h-[35%] md:w-[60%] md:h-[40%] lg:w-[10%] lg:h-[50%]"
          alt="Notification Logo"
          src="../photos/Notificationlogo.png"
        />
      </div>

      <div className="flex flex-col items-center justify-center content-center ml-3">
        <div className="text-center bg-[#B4ABAB] text-[#5B0505] py-0 rounded-lg w-[70%] h-[100%]">
          <Skeleton className="h-4 w-[20px] py-2" />
          <Skeleton className="h-4 w-[20px] py-2" />
        </div>

        <div className=" mt-8 ml-8 w-80 h-40 lg:w-[70px] lg:h-[70px] hidden md:hidden">
          <Skeleton src="../photos/ccsLogo.png" alt="CCS Logo" />
        </div>

        <div className="text-center bg-[#B4ABAB] text-[#5B0505] mt-8 py-0 rounded-lg w-[70%] h-screen">
          <Skeleton className="h-96 mt-1 text-3xl font-semibold" />
        </div>
      </div>

      <div className="flex flex-col w-[30%] h-[100%] ml-7">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="text-center bg-[#5B0505] text-white sm:w-[300px] h-[45%] rounded-lg -mt-2">
            <Skeleton className="mt-2 text-[20px] font-semibold sm:text-3xl" />
          </div>
          <div className="text-center bg-[#5B0505] text-white  sm:w-[300px] h-[45%] rounded-lg -mt-3">
            <button className="mt-1 text-2xl font-semibold sm:text-3xl">
              <Skeleton className="mt-2 text-[20px] font-semibold sm:text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
