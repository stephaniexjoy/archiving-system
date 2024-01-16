"use client"
import React, { useState } from "react";
const InstructorModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");

  const openInstructorModal = (program) => {
    setIsOpen(true);
    setDialogType(program);
  };

  const closeInstructorModal = () => {
    setIsOpen(false);
    setDialogType("");
  };
  return (
    <div>
      <button onClick={() => openInstructorModal("instructor")}>
        ADD CATEGORY
      </button>
      {isOpen && (
        <div className="modal-instructor">
          <div className="modal">
            <span className="close" onClick={closeInstructorModal}>
              &times;
            </span>
            {dialogType === "instructor" && (
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
        </div>
      )}
    </div>
  );
};

export default InstructorModal;
