import Footer from "@/app/components/Footer";
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

        <div className="flex">
          {children}
        </div>

      </div >
      <Footer />
    </>
  );
}
