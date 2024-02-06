import React from 'react'

const Footer = () => {
    return (

        <footer className="bg-[#AD5606] w-full h-[210px] flex items-center justify-center">
            <div className="flex px-10">
                <div className="flex flex-col w-1/2">
                    <div className="flex flex-row">
                        <div className="flex items-start justify-start mt-2 mb-2">
                            <img src="/photos/lspuLogo.png" alt="First Image" className="w-12 h-auto" />
                        </div>
                        <div className="flex items-start justify-start ml-3 mt-2 mb-2">
                            <img src="/photos/ccsLogo.png" alt="Second Image" className="w-12 h-auto" />
                        </div>
                    </div>
                    <div className="w-1/2 flex items-start justify-start">
                        <p className="text-[#5B0505] text-xl font-semibold">CONTACT US</p>
                    </div>
                    <div className="w-1/2 flex items-start justify-start">
                        <img src="/photos/callLogo.png" alt="Second Image" className="w-7 h-auto" />
                        <p className="ml-3 text-white font-semibold">(049) 554-3033</p>
                    </div>
                    <div className="w-1/2 flex items-start justify-start">
                        <img src="/photos/emailLogo.png" alt="Second Image" className="w-7 h-auto mt-1" />
                        <p className="ml-3 text-white font-semibold">ccs_spc@lspu.edu.ph</p>
                    </div>
                    <div className="w-1/2 flex items-start justify-start">
                        <img src="/photos/locationLogo.png" alt="Second Image" className="w-7 h-auto" />
                        <p className="ml-3 text-white font-semibold">Brgy. Del Remedio, San Pablo City, Philippines</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col">
                    <h2 className="text-[#5B0505] text-3xl font-bold mt-3 mb-2">ABOUT</h2>
                    <p className="text-white text-[18px]">The E-Archiving System endeavors to address the challenges posed by traditional document storage and retrieval methods, aiming to streamline processes, improve efficiency, and provide a comprehensive solution for the dynamic environment of the CCS. Recognizing the significance of accessible and organized data, our team has rallied with a shared commitment to bring forth a solution that not only meets the current needs of the faculty but also anticipates future demands.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer