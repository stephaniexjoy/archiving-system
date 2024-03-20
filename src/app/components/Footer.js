import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#AD5606] h-[100%] w-screen">
      <div
        className="flex flex-col 
                   sm:flex sm:flex-col
                   md:flex md:flex-col
                   lg:flex lg:flex-col
                   xl:flex xl:flex-col
                   2xl:flex 2xl:flex-row"
      >
        <div
          className="flex flex-col space-y-1
                     sm:flex sm:flex-col sm:space-y-1
                     md:flex md:flex-col md:space-y-1 
                     lg:flex lg:flex-col lg:space-y-1 
                     xl:flex xl:flex-col xl:space-y-1   
                     2xl:flex 2xl:flex-col 2xl:space-y-1"
        >
          <div
            className="flex flex-row ml-4 mt-2 space-x-2
                       sm:flex sm:flex-row sm:ml-4 sm:mt-2 sm:space-x-2
                       md:flex md:flex-row md:ml-4 md:mt-2 md:space-x-2 
                       lg:flex lg:flex-row lg:ml-4 lg:mt-2 lg:space-x-2 
                       xl:flex xl:flex-row xl:ml-4 xl:mt-2 xl:space-x-2   
                      2xl:flex 2xl:flex-row 2xl:ml-3 2xl:mt-2 2xl:space-x-2"
          >
            <div
              className="flex items-start justify-start
                         sm:flex sm:items-start sm:justify-start
                         md:flex md:items-start md:justify-start
                         lg:flex lg:items-start lg:justify-start
                         xl:flex xl:items-start xl:justify-start
                         2xl:flex 2xl:items-start 2xl:justify-start"
            >
              <Image
                src="/photos/lspuLogo.png"
                alt="LSPU Logo"
                className="w-10 h-10
                           sm:w-12 sm:h-12
                           md:w-16 md:h-16
                           lg:w-24 lg:h-24
                           xl:w-28 xl:h-28
                           2xl:w-32 2xl:h-32"
                width={300}
                height={100}
              />
            </div>
            <div
              className="flex items-start justify-start
                         sm:flex sm:items-start sm:justify-start
                         md:flex md:items-start md:justify-start
                         lg:flex lg:items-start lg:justify-start
                         xl:flex xl:items-start xl:justify-start
                         2xl:flex 2xl:items-start 2xl:justify-start"
            >
              <Image
                src="/photos/ccsLogo.png"
                alt="CCS Logo"
                className="w-10 h-10
                           sm:w-12 sm:h-12
                           md:w-16 md:h-16
                           lg:w-24 lg:h-24
                           xl:w-28 xl:h-28
                           2xl:w-32 2xl:h-32"
                width={300}
                height={100}
              />
            </div>
          </div>
          <div
            className="flex flex-col ml-3 p-2
                       sm:flex sm:flex-col sm:ml-3 sm:p-2
                       md:flex md:flex-col md:ml-3 md:p-2
                       lg:flex lg:flex-row lg:ml-3 lg:p-2 lg:space-x-64
                       xl:flex xl:flex-row xl:ml-3 xl:p-2 xl:space-x-72
                       2xl:flex 2xl:flex-row 2xl:ml-3 2xl:p-2 2xl:space-x-72"
          >
            <div
              className="flex flex-col items-start justify-start
                         sm:flex sm:flex-col sm:items-start sm:justify-start
                         md:flex md:flex-col md:items-start md:justify-start
                         lg:flex lg:flex-col lg:items-start lg:justify-start
                         xl:flex xl:flex-col xl:items-start xl:justify-start
                         2xl:flex 2xl:flex-col 2xl:items-start 2xl:justify-start"
            >
              <p
                className="text-[#5B0505] text-lg font-semibold
                           sm:text-[#5B0505] sm:text-lg sm:font-semibold
                           md:text-[#5B0505] md:text-lg md:font-semibold
                           lg:text-[#5B0505] lg:text-lg lg:font-semibold
                           xl:text-[#5B0505] xl:text-lg xl:font-semibold
                           2xl:text-[#5B0505] 2xl:text-2xl 2xl:font-semibold"
              >
                CONTACT US
              </p>
              <div
                className="flex flex-col
                           sm:flex sm:flex-col
                           md:flex md:flex-col
                           lg:flex lg:flex-col
                           xl:flex xl:flex-col
                           2xl:flex 2xl:flex-col"
              >
                <div
                  className="flex items-start justify-start
                             sm:flex sm:items-start sm:justify-start
                             md:flex md:items-start md:justify-start
                             lg:flex lg:items-start lg:justify-start
                             xl:flex xl:items-start xl:justify-start
                             2xl:flex 2xl:items-start 2xl:justify-start"
                >
                  <Image
                    src="/photos/callLogo.png"
                    alt="Call Logo"
                    className="w-7 h-auto
                               sm:w-8 sm:h-auto
                               md:w-9 md:h-auto
                               lg:w-10 lg:h-auto
                               xl:w-11 xl:h-auto
                               2xl:w-12 2xl:h-auto"
                    width={300}
                    height={100}
                  />
                  <p
                    className="ml-1 text-white text-[12px] font-semibold
                               sm:ml-1 sm:text-white sm:text-[12px] sm:font-semibold
                               md:ml-1 md:text-white md:text-[14px] md:font-semibold
                               lg:ml-1 lg:text-white lg:text-[16px] lg:font-semibold
                               xl:ml-1 xl:text-white xl:text-[16px] xl:font-semibold
                               2xl:ml-1 2xl:text-white 2xl:text-[16px] 2xl:font-semibold"
                  >
                    (049) 554-3033
                  </p>
                </div>

                <div
                  className="flex items-start justify-start
                             sm:flex sm:items-start sm:justify-start
                             md:flex md:items-start md:justify-start
                             lg:flex lg:items-start lg:justify-start
                             xl:flex xl:items-start xl:justify-start
                             2xl:flex 2xl:items-start 2xl:justify-start"
                >
                  <Image
                    src="/photos/emailLogo.png"
                    alt="Email Logo"
                    className="w-7 h-auto
                               sm:w-8 sm:h-auto
                               md:w-9 md:h-auto
                               lg:w-10 lg:h-auto
                               xl:w-11 xl:h-auto
                               2xl:w-12 2xl:h-auto"
                    width={300}
                    height={100}
                  />
                  <p
                    className="ml-1 text-white text-[12px] font-semibold
                               sm:ml-1 sm:text-white sm:text-[12px] sm:font-semibold
                               md:ml-1 md:text-white md:text-[14px] md:font-semibold
                               lg:ml-1 lg:text-white lg:text-[16px] lg:font-semibold
                               xl:ml-1 xl:text-white xl:text-[16px] xl:font-semibold
                               2xl:ml-1 2xl:text-white 2xl:text-[16px] 2xl:font-semibold2xl:"
                  >
                    ccs_spc@lspu.edu.ph
                  </p>
                </div>

                <div
                  className="flex items-start justify-start
                             sm:flex sm:items-start sm:justify-start
                             md:flex md:items-start md:justify-start
                             lg:flex lg:items-start lg:justify-start
                             xl:flex xl:items-start xl:justify-start
                             2xl:flex 2xl:items-start 2xl:justify-start"
                >
                  <Image
                    src="/photos/locationLogo.png"
                    alt="Location Logo"
                    className="w-7 h-auto
                               sm:w-8 sm:h-auto
                               md:w-9 md:h-auto
                               lg:w-10 lg:h-auto
                               xl:w-11 xl:h-auto
                               2xl:w-12 2xl:h-auto"
                    width={300}
                    height={100}
                  />

                  <p
                    className="ml-1 text-white text-[12px] font-semibold
                               sm:ml-1 sm:text-white sm:text-[12px] sm:font-semibold
                               md:ml-1 md:text-white md:text-[14px] md:font-semibold
                               lg:ml-1 lg:text-white lg:text-[16px] lg:font-semibold
                               xl:ml-1 xl:text-white xl:text-[16px] xl:font-semibold
                               2xl:ml-1 2xl:text-white 2xl:text-[16px] 2xl:font-semibold2xl:"
                  >
                    Brgy. Del Remedio, San Pablo City, Philippines
                  </p>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col  
                         sm:flex sm:flex-col
                         md:flex md:flex-col
                         lg:flex lg:flex-col lg:w-1/2
                         xl:flex xl:flex-col xl:w-1/2      
                         2xl:flex 2xl:flex-col 2xl:w-1/2"
            >
              <div
                className="text-[#5B0505] text-lg font-semibold
                           sm:text-[#5B0505] sm:text-lg sm:font-semibold
                           md:text-[#5B0505] md:text-lg md:font-semibold
                           lg:text-[#5B0505] lg:text-xl lg:font-semibold
                           xl:text-[#5B0505] xl:text-xl xl:font-semibold
                           2xl:text-[#5B0505] 2xl:text-2xl 2xl:font-semibold"
              >
                ABOUT
              </div>

              <p
                className="text-white text-[12px] text-justify
                           sm:text-white sm:text-[12px] sm:text-justify
                           md:text-white md:text-[14px] md:text-justify
                           lg:text-white lg:text-[16px] lg:text-justify
                           xl:text-white xl:text-[16px] xl:text-justify
                           2xl:text-white 2xl:text-[16px] 2xl:text-justify"
              >
                The E-Archiving System endeavors to address the challenges posed
                by traditional document storage and retrieval methods, aiming to
                streamline processes, improve efficiency, and provide a
                comprehensive solution for the dynamic environment of the CCS.
                Recognizing the significance of accessible and organized data,
                our team has rallied with a shared commitment to bring forth a
                solution that not only meets the current needs of the faculty
                but also anticipates future demands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
