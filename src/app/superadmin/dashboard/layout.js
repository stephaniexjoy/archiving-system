import Sidebar from "@/app/components/Sidebar";
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
          <div className="flex">{children}</div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
