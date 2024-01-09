import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
  children // will be a page or nested layout
}) {
  return (

    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      < div className="flex" >

        <div className="flex-1">
          <Sidebar />
        </div>

        <div className="flex p-6 w-full">
          {children}
        </div>

      </div >

    </>
  );
}
