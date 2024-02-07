"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FileTable = ({ data }) => {
  const [currentPrivacy, setCurrentPrivacy] = useState("forall");

  if (!data) {
    data = null;
  }
  console.log(data);

  const togglePrivacy = () => {
    setCurrentPrivacy(currentPrivacy === "forall" ? "seconly" : "forall");
  };
  return (
    <>
      <button
        onClick={togglePrivacy}
        className="mt-10 bg-[#5B0505] hover:bg-[#6A6A6A] focus:outline-none h-auto w-auto font-bold text-white"
      >
        Toggle Privacy:{" "}
        {currentPrivacy === "forall" ? "For All" : "Secretary Only"}
      </button>
      <div className="flex h-auto items-center font-[Times New Roman]">
        <Table className="mt-6 table table-auto md:table-fixed w-full text-center">
          <TableHeader className='bg-[#5B0505] text-white text-xl'>
            <TableRow>
            <TableHead className='text-center py-2'>FILE</TableHead>
            <TableHead className='text-center py-2'>UPLOADED BY</TableHead>
            <TableHead className='text-center py-2'>PERMISSIONS</TableHead>
            <TableHead className='text-center py-2'>DATE AND TIME UPLOADED</TableHead>
            <TableHead className='text-center py-2'>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='bg-[#D9D9D9] text-black text-lg'>
            {data === null || !data || data.length === 0 ? (
              <TableRow>
                <TableCell colSpan="5">No files available</TableCell>
              </TableRow>
            ) : (
              data
                .filter((file) => file.fileRole === currentPrivacy)
                .map((file) => (
                  <TableRow key={file.filePath}>
                    <TableCell>
                      <a href={file.filePath}>{file.filename}</a>
                    </TableCell>
                    <TableCell>{file.uploaderName}</TableCell>
                    <TableCell>
                      {file.fileRole === "forall" ? "All" : "Secretary Only"}
                    </TableCell>
                    <TableCell>{file.uploadDate}</TableCell>
                    <TableCell>
                      <button className="bg-[#8F8F8F] hover:bg-[#6A6A6A] focus:outline-none h-10 w-48 font-bold">
                        Edit Privacy
                      </button>
                    </TableCell>
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default FileTable;

{
  /* <tr>
                    <td className='py-2'>PRINCE ANDRES</td>
                    <td>PART-TIME INSTRUCTOR</td>
                    <td>UPLOADED A FILE</td>
                    <td>December 13, 2023 (9:45)</td>
                </tr> */
}

{
  /* <tr>
                    <td className='py-2'>AL JOHN VILLAREAL</td>
                    <td>REGULAR INSTRUCTOR</td>
                    <td>DELETED A FILE</td>
                    <td>December 10, 2023 (16:30)</td>
                </tr>
                <tr>
                    <td className='py-2'>CATHERINE CASTILLO</td>
                    <td>REGULAR INSTRUCTOR</td>
                    <td>EDITED A FILE</td>
                    <td>December 7, 2023 (7:30)</td>
                </tr> */
}
