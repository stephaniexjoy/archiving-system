import Sidebar from "@/app/components/Sidebar";
import Footer from "../components/Footer";

export default function DashboardLayout({
  children // will be a page or nested layout
}) {
  return (
    <>

    <div className="flex">
      <div className="flex flex-col min-h-screen">
        {/* Include shared UI here e.g. a header or sidebar */}
        <div className="flex ">
          <Sidebar className="flex" />
          <main className=" ">{children}</main>
        </div>
        <Footer />
      </div>
      </div>
    </>
  );
}
