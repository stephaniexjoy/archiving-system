"use client"
import React from "react";
import PDF from "./PDF";

const PDFcontainer = () => {
  const handleSavePage = async () => {
    try {
      const rootElement = rootRef.current;
      if (!rootElement) {
        throw new Error("Root element not found");
      }

      const options = {
        scrollX: 0,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
        scale: 1, // Set the scale to 1 to capture the entire page content
      };

      const canvas = await html2canvas(rootElement, options);

      const imgData = canvas.toDataURL("image/png");

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const pdf = new jsPDF("p", "mm", [imgWidth, imgHeight]); // Set the page size to match the image size
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      const pdfBuffer = pdf.output("arraybuffer");
      const pdfBlob = new Blob([pdfBuffer], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSavePage}
      >
        Save as PDF
      </button>
      <div id="myElementId">
        <div>
          <PDF />
        </div>
      </div>
    </>
  );
};

export default PDFcontainer;
