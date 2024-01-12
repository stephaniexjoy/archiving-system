"use client"
import React, { useState } from "react";
import axios from "axios";

const ProgramModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");

  const [addProgram, setAddProgram] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation and submit the data
    try {
      console.log(addProgram)
      const response = await axios.post('/api/forModals/add/add-new-program', { addProgram });
      // Assuming your API returns a success message
      console.log(response.data.message);
      // Perform any additional actions or show a success message to the user
    } catch (error) {
      // Handle error responses from the API
      console.error(error);
      // Show an error message to the user
    }
  }

  const openProgramModal = (program) => {
    setIsOpen(true);
    setDialogType(program);
  };

  const closeProgramModal = () => {
    setIsOpen(false);
    setDialogType("");
  };
  return (
    <div>
      <button onClick={() => openProgramModal("program")}>ADD CATEGORY</button>
      {isOpen && (
        <div className="modal-program">
          <div className="modal">
            <span className="close" onClick={closeProgramModal}>
              &times;
            </span>
            {dialogType === "program" && (
              <div>
                <div className="absolute top-[-40px] left-[-355px] bg-[#D9D9D9] [backdrop-filter:blur(4px)] w-[400px] h-[170px] rounded-3xl" />
                <input
                  type="text"
                  name="program"
                  placeholder="Add New Program"
                  className="absolute top-[1px] left-[-330px] text-xl text-center text-[#242323] bg-[#B5B5B5] inline-block w-[350px] h-[37px] text-shadow-inner"
                  value={addProgram}
                  onChange={(e) => { setAddProgram(e.target.value) }}
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

export default ProgramModal;
