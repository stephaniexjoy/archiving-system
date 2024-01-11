import React from 'react';

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-screen items-center py-0.5">
        <img
          className="w-[570px] h-[150px] object-cover"
          alt=""
          src="../photos/E-Archiving System.png"
        />
        <div className="bg-[#AD5606] w-screen h-screen mt-20">
          <div className="mt-20">
            <div className="mt-3 flex grid-cols-3 space-x-40 place-content-stretch justify-center h-16 md:h-20 font-bold font-[Times New Roman]">
              <div className="text-center">
                <p className="mt-11 text-8xl text-[#F1B177] ">36</p>
                <p className="mt-5 text-2xl">ARCHIVED MATERIALS</p>
              </div>
              <div className="text-left mt-20">
                <p className="mt-5 text-2xl">Name:</p>
                <p className="mt-5 text-2xl">Position:</p>
                <p className="mt-5 text-2xl">Designation:</p>
                <p className="mt-5 text-2xl">Eligibility/Personal License:</p>
              </div>
              <div className="text-center">
                <p className="mt-20 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-2xl text-[#A89F9F] inline-block w-[500px] h-[35px]  text-shadow-inner"
                  />
                </p>
                <p className=" mt-5 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-2xl text-[#A89F9F] inline-block w-[500px] h-[35px] text-shadow-inner"
                  />
                </p>

                <p className=" mt-5 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-3xl text-[#A89F9F] inline-block w-[500px] h-[35px]  text-shadow-inner"
                  />
                </p>

                <p className=" mt-5 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-3xl text-[#A89F9F] inline-block w-[500px] h-[35px]  text-shadow-inner"
                  />
                </p>
              </div>
            </div>
            <div className="mt-40 flex grid-cols-3 space-x-40 place-content-stretch justify-center h-16 md:h-20 font-bold font-[Times New Roman]">
              <div className="left-center top-100px">
                <p className="mt-20 text-2xl">School:</p>
                <p className="mt-5 text-2xl">Specialization:</p>
                <p className="mt-5 text-2xl">Certification:</p>
              </div>

              <div className="left-center mt-30 top-100">
                <p className="mt-20 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-2xl text-[#A89F9F] inline-block w-[500px] h-[35px]  text-shadow-inner"
                  />
                </p>
                <p className=" mt-5 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-2xl text-[#A89F9F] inline-block w-[500px] h-[35px] text-shadow-inner"
                  />
                </p>

                <p className=" mt-5 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-3xl text-[#A89F9F] inline-block w-[500px] h-[35px]  text-shadow-inner"
                  />
                </p>

                <p className=" mt-5 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-3xl text-[#A89F9F] inline-block w-[500px] h-[35px]  text-shadow-inner"
                  />
                </p>
              </div>
              <h1>ACADEMIC QUALIFICATIONS</h1>
            </div>
            <div className="mt-25 flex grid-cols-4 space-x-40 place-content-stretch justify-center h-16 md:h-20 font-bold font-[Times New Roman]">
              <div className="text-left top-100px">
                <p className="mt-5 text-2xl ">Name:</p>
                <p className="mt-5 text-2xl">Position:</p>
                <p className="mt-5 text-2xl">Designation:</p>
              </div>
              <div className="text-center top-100px">
                <p className="mt-20 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-2xl text-[#050404] inline-block w-[500px] h-[35px]  text-shadow-inner"
                  />
                </p>
                <p className=" mt-5 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-2xl text-[#A89F9F] inline-block w-[500px] h-[35px] text-shadow-inner"
                  />
                </p>
                <p className=" mt-5 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-3xl text-[#A89F9F] inline-block w-[500px] h-[35px]  text-shadow-inner"
                  />
                </p>
              </div>
              <div className="text-left top-100px">
                <p className="mt-5 text-2xl">Name:</p>
                <p className="mt-5 text-2xl">Position:</p>
                <p className="mt-5 text-2xl">Designation:</p>
              </div>
              <div className="text-center top-100px">
                <p className="mt-20 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-2xl text-[#A89F9F] inline-block w-[500px] h-[35px]  text-shadow-inner"
                  />
                </p>
                <p className=" mt-5 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-2xl text-[#A89F9F] inline-block w-[500px] h-[35px] text-shadow-inner"
                  />
                </p>

                <p className=" mt-5 text-2xl text-[#F1B177]">
                  <input
                    type="text"
                    className="text-3xl text-[#A89F9F] inline-block w-[500px] h-[35px]  text-shadow-inner"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

     
