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
              position: "absolute",
              top: "130px",
              left: "1305px",
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
            <div>
              <div className="absolute top-[-40px] left-[-355px] bg-[#D9D9D9] [backdrop-filter:blur(4px)] w-[400px] h-[170px] rounded-3xl" />
              <input
                type="add"
                name=""
                placeholder=""
                className="absolute top-[1px] left-[-330px] text-xl text-center text-[#242323] bg-[#B5B5B5] inline-block w-[350px] h-[37px] text-shadow-inner"
              />
              <div className="absolute top-[65px] left-[-230px]  hover:bg-zinc-400  bg-[#474543] outline-color shadow-2xl rounded w-[150px] " />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadModal;
