import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

const UploadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");

  const openUploadModal = (material) => {
    setIsOpen(true);
    setDialogType(material);
  };

  const closeUploadModal = () => {
    setIsOpen(false);
    setDialogType("");
  };

  return (
    <div>
      <button onClick={() => openUploadModal("upload")}>
        <h1>
          {" "}
          <FaUpload
            size="30"
            style={{
              position: "static",
              top: "130px",
              left: "10px",
              cursor: "pointer",
            }}
          />
        </h1>
      </button>
      {isOpen && (
        <div className="modal-upload">
          <span className="close" onClick={closeUploadModal}>
            &times;
          </span>
          {dialogType === "upload" && (
            <div className="flex flex-col columns-2">
              <div className="flex-auto bg-[#D9D9D9] [backdrop-filter:blur(4px)] w-[600px] h-[500px] rounded-3xl">
                <div className="flex flex-row gap-x-8 ml-4 md:ml-10 md:h-20">
                  <div className="dropdown">
                    <h1 className="flex mt-5 ml-16 text-[14px] md:text-[18px] text-[#AC5600]">MATERIAL</h1>
                    <div className="mt-5 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[220px] h-[50px] cursor-pointer shadow-lg">
                      <select className="bg-[#D9BA9C]  text-black font-semibold w-[200px] cursor-pointer border-gray-300 rounded-md px-2 py-1 focus:outline-none" name="type" id="type">
                        <option value="select">--Select--</option>
                        <option value="learning materials">Learning Materials</option>
                        <option value="training and seminar">Training and Seminar</option>
                        <option value="reserch conducted">Research Conducted</option>
                        <option value="extension conducted">Extension Conducted</option>
                        <option value="educational qualification">Educational Qualification</option>
                        <option value="faculty profile">Faculty Profile</option>
                      </select>
                    </div>
                    <div>
                      <h1 className=" mt-10 ml-16 text-[14px] md:text-[18px] text-[#AC5600]">PROGRAM</h1>
                      <div className="mt-5 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[220px] h-[50px] cursor-pointer shadow-lg">
                        <select className="bg-[#D9BA9C]  text-black font-semibold w-[200px] cursor-pointer border-gray-300 rounded-md px-2 py-1 focus:outline-none" name="type" id="type">
                          <option value="select">--Select--</option>
                          <option value="Machine Learning">Machine Learning</option>
                          <option value="Programming Languages">Programming Languages</option>
                          <option value="Platform Technologie">Platform Technologies</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className=" mt-5 ml-32 text-[14px] md:text-[18px] text-[#AC5600]">TYPE</h1>
                    <div className="mt-5 ml-12 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[220px] h-[50px] cursor-pointer shadow-lg">
                      <select className="bg-[#D9BA9C]  text-black font-semibold w-[200px] cursor-pointer border-gray-300 rounded-md px-2 py-1 focus:outline-none" name="type" id="type">
                        <option value="select">--Select--</option>
                        <option value="pdf">PDF</option>
                        <option value="ppt">PPT</option>
                        <option value="docx">DOCX</option>
                      </select>
                    </div>
                    <h1 className=" mt-10 ml-24 text-[14px] md:text-[18px] text-[#AC5600]">INSTRUCTOR</h1>
                    <div className="mt-5 ml-12 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[220px] h-[50px] cursor-pointer shadow-lg">
                      <select className="bg-[#D9BA9C]  text-black font-semibold w-[200px] cursor-pointer border-gray-300 rounded-md px-2 py-1 focus:outline-none" name="type" id="type">
                        <option value="select">--Select--</option>
                        <option value="Prince Andres">Prince Andres</option>
                        <option value="John Ryan Ual">John Ryan Ual</option>
                        <option value="Marco Del Rosario">Marco Del Rosario</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <form class="flex items-center space-x-6 ml-44 mt-60">
                    <label class="block">
                      <span class="sr-only">Choose file</span>
                      <input type="file" class="block w-full text-lg text-slate-500 file:mr-4 file:py-2 file:px-4 
                      file:border-0 file:text-sm file:font-semibold file:bg-[#6A6A6A] file:text-white hover:file:bg-slate-400"/>
                    </label>
                  </form>
                </div>

                <button class="ml-52 mt-10 bg-[#8F8F8F] hover:bg-[#6A6A6A]focus:outline-none h-10 w-48 font-bold">
                  UPLOAD
                </button>

              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadModal;
