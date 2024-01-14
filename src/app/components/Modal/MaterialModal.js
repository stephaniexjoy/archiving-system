"use client"

import React, { useState } from "react";
import axios from "axios";


const MaterialModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");

  const [addMaterial, setAddMaterial] = useState("")

  const openMaterialModal = (material) => {
    setIsOpen(true);
    setDialogType(material);
  };

  const closeMaterialModal = () => {
    setIsOpen(false);
    setDialogType("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(addMaterial)
      const response = await axios.post('/api/forModals/add/add-new-material', { addMaterial });
      // Assuming your API returns a success message
      console.log(response.data.message);
      // Perform any additional actions or show a success message to the user
    } catch (error) {
      // Handle error responses from the API
      console.error(error);
      // Show an error message to the user
    }
  }
  return (
    <div>
      <button onClick={() => openMaterialModal("material")}>
        ADD CATEGORY
      </button>

      {isOpen && (
        <div className="modal-material">
          {dialogType === "material" && (
            <div>
              <div className="absolute top-[60px] left-[355px] bg-[#D9D9D9] [backdrop-filter:blur(4px)] w-[420px] h-[170px] rounded-3xl" />
              <span className="close " onClick={closeMaterialModal}>
                &times;
              </span>
              <input
                type="text"
                name="material"
                placeholder="Add Material"
                className="absolute top-[85px] left-[375px] text-xl text-center text-[#242323] bg-[#B5B5B5] inline-block w-[375px] h-[37px] text-shadow-inner"
                value={addMaterial}
                onChange={(e) => { setAddMaterial(e.target.value) }}
              />
              <button
                className="absolute top-[160px] left-[495px] text-center bg-[#675454]  outline-color text-orange-200 rounded w-[130px] "
                onClick={handleSubmit}
              >
                {" "}
                ADD CATEGORY
              </button>
            </div>
          )}
        </div>
      )
      }
    </div >
  );
};

export default MaterialModal;
