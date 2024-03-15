import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#AD5606] px-4 md:px-10">
      <div className="flex flex-row md:flex-row">
        <div className="flex flex-col md:flex-col w-full md:w-1/2">
          <div className="flex flex-row md:flex-row">
            <div className="flex items-start justify-start mb-4 md:mb-0 mr-0 md:mr-4">
              <img src="/photos/lspuLogo.png" alt="LSPU Logo" className="w-12 h-auto" />
            </div>
            <div className="flex items-start justify-start mb-4 md:mb-0">
              <img src="/photos/ccsLogo.png" alt="CCS Logo" className="w-12 h-auto" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-1/2">
            <div className="w-full md:w-1/2 flex items-start justify-start">
              <p className="text-[#5B0505] text-lg font-semibold mr-2">CONTACT US</p>
              <div className="flex flex-col">
                <div className="flex items-start justify-start mb-2">
                  <img src="/photos/callLogo.png" alt="Call Logo" className="w-7 h-auto" />
                  <p className="ml-3 text-white font-semibold">(049) 554-3033</p>
                </div>
                <div className="flex items-start justify-start mb-2">
                  <img src="/photos/emailLogo.png" alt="Email Logo" className="w-7 h-auto" />
                  <p className="ml-3 text-white font-semibold">ccs_spc@lspu.edu.ph</p>
                </div>
                <div className="flex items-start justify-start">
                  <img src="/photos/locationLogo.png" alt="Location Logo" className="w-7 h-auto" />
                  <p className="ml-3 text-white font-semibold">Brgy. Del Remedio, San Pablo City, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <div className="text-[#5B0505] text-3xl font-bold mb-2">ABOUT</div>
          <p className="text-white text-sm md:text-base mb-4">
            The E-Archiving System endeavors to address the challenges posed by traditional document storage and retrieval methods, aiming to streamline processes, improve efficiency, and provide a comprehensive solution for the dynamic environment of the CCS. Recognizing the significance of accessible and organized data, our team has rallied with a shared commitment to bring forth a solution that not only meets the current needs of the faculty but also anticipates future demands.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;