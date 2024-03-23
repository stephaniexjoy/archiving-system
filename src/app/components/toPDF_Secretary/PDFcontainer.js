"use client";
import React, { useRef } from "react";
import PDF from "./PDF";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PDFcontainer = ({ userId }) => {
  const rootRef = useRef(null);

  const handleSavePage = async () => {
    try {
      const rootElement = rootRef.current;
      if (!rootElement) {
        throw new Error("Root element not found");
      }

      const options = {
        scrollX: 0,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.scrollWidth,
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
      <div
        ref={rootRef}
        style={{
          width: "fit-content", // Ensure the container covers the entire width
        }}
      >
        <div id="myElementId">
          <div>
            <PDF userId={userId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PDFcontainer;
