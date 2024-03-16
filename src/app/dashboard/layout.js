import Sidebar from "@/app/components/Sidebar";
import Footer from "../components/Footer";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <div className="flex">
        <div className="flex">
          <Sidebar />
        </div>

        <div className="flex">{children}</div>
      </div>
      <Footer />
    </>
  );
}
