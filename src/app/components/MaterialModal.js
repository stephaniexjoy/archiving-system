import React, { useState } from "react";
const MaterialModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");

  const openMaterialModal = (material) => {
    setIsOpen(true);
    setDialogType(material);
  };

  const closeMaterialModal = () => {
    setIsOpen(false);
    setDialogType("");
  };
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
                name=""
                placeholder=""
                className="absolute top-[85px] left-[375px] text-xl text-center text-[#242323] bg-[#B5B5B5] inline-block w-[375px] h-[37px] text-shadow-inner"
              />
              <button
                className="absolute top-[160px] left-[495px] text-center bg-[#675454]  outline-color text-orange-200 rounded w-[130px] "
                onClick={() => closeMaterialModal("material")}
              >
                {" "}
                ADD CATEGORY
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MaterialModal;
