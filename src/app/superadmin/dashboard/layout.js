import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import Footer from "@/app/components/Footer";
export default function SuperadminDashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex flex-col">
          <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center ">
            <Image
              className="w-[60%] h-auto object-cover flex items-center justify-center
          sm:w-[60%] sm:h-[100%] sm:object-cover sm:flex sm:items-center sm:justify-center
          md:w-[60%] md:h-[100%] md:object-cover md:flex md:items-center md:justify-center
          lg:w-[40%] lg:h-[100%] lg:object-cover lg:flex lg:items-center lg:justify-center
          xl:w-[35%] xl:h-[100%] xl:object-cover xl:flex xl:items-center xl:justify-center
          2xl:w-[30%] 2xl:h-[100%] 2xl:object-cover 2xl:flex 2xl:items-center 2xl:justify-center"
              alt="E-Archiving System"
              src="/photos/E-Archiving System.png"
              width={2125}
              height={499}
            />
          </div>
          <div className="flex">{children}</div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
