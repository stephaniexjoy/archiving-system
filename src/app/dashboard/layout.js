import Sidebar from "@/app/components/Sidebar";

export default function DashboardLayout({
  children // will be a page or nested layout
}) {
  return (

    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      < div className="flex" >

        <div className="flex">
          <Sidebar />
        </div>

        <div className="flex px-6 ">
          {children}
        </div>

      </div >

    </>
  );
}
