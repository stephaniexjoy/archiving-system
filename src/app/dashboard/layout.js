import Sidebar from "@/app/components/Sidebar";
import Footer from "../components/Footer";

export default function DashboardLayout({
  children // will be a page or nested layout
}) {
  return (

    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      < div className="flex" >

        <div className="flex">
          <Sidebar />
          <div className="flex grow justify-center items-center content-center ">
            {children}
          </div>
          <div className="flex grow justify-center items-center content-center">
            <div className='flex flex-col w-screen h-screen'>
              <Footer />
            </div>
          </div>
        </div>





      </div >

    </>
  );
}
