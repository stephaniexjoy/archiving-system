import Sidebar from "@/app/components/Sidebar";
import Footer from "../components/Footer";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="flex ">
        <Sidebar className="flex" />
        <main className=" ">{children}</main>
      </div>
      <Footer />
    </>
  );
}
