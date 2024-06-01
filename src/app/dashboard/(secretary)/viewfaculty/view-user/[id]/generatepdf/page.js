import PDFcontainer from "@/app/components/toPDF_Secretary/PDFcontainer";
import React from "react";

export default function page() {
  const url = "/secretary/dashboard/viewfaculty/view-user/21/generatepdf";
  const match = url.match(/\/(\d+)\/generatepdf$/);
  const userId = match ? match[1] : null;

  console.log(userId);
  return (
    <div>
      <PDFcontainer userId={userId} />
    </div>
  );
}
