"use client";
import React from "react";
import { useState } from "react";

export default function ArchivedTask_Archiving_tabs() {
  const [options, setOptions] = useState("");

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <div
        className="
        flex flex-col mt-16 px-4 space h-auto overflow-y-auto
        sm:flex sm:flex-col sm:mt-16 sm:px-10 sm:space sm:h-auto sm:overflow-y-auto
        md:flex md:flex-col md:mt-16 md:px-10 md:space md:h-auto md:overflow-y-auto
        lg:flex lg:flex-col lg:mt-16 lg:px-10 lg:space lg:h-auto lg:overflow-y-auto
        xl:flex xl:flex-col xl:mt-16 xl:px-10 xl:space xl:h-auto xl:overflow-y-auto
        2xl:flex 2xl:flex-col 2xl:mt-16 2xl:px-10 2xl:space 2xl:h-auto 2xl:overflow-y-auto
        "
      >
        <h1 className="text-center text-[#5B0505] text-[28px]  sm:text-[32px] md:text-[36px] lg:text-[45px] font-bold md:shadow-zinc-400 mb-5 ">
          Archived Tasks
        </h1>
        <div className="flex flex-col items-center w-full h-full overflow-y-auto">
          <div
            className="
            flex flex-col w-[100%] p-0 rounded-md 
            sm:w-[90%]
            md:w-[80%] 
            lg:w-[80%]
            xl:w-[70%]  
            2xl:w-[60%] 
            "
          >
            <label className="w-full text-[#5B0505] text-xl text-start font-semibold mr-4">
              No Due Date:
            </label>
            <div className="w-full space-y-2">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer h-[40px] shadow-lg rounded-sm px-1 py-1 border border-orange-900"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                <option value="nodue1">No Due Date 1</option>
                <option value="nodue2">No Due Date 2</option>
                <option value="nodue3">No Due Date 3</option>
              </select>
              {options === "nodue1" && (
                <div class="flex flex-row">
                  <div class="w-full p-0">
                    <div class="flex flex-row border border-black text-xl text-black p-4 mt-4">
                      <div className="w-full flex flex-col">
                        <h1 class="text-2xl font-semibold mb-12">
                          No Due Date 1 Title
                        </h1>
                        <p class="mb-16 text-lg">No Due Date 1 Instructions.</p>
                        <div>
                          <h1 class="text-sm mb-0">Post Today</h1>
                        </div>
                      </div>
                      <div class="w-[60%]">
                        <div class="flex flex-col bg-white p-4 gap-4 drop-shadow-2xl  rounded-xl">
                          <div className="flex flex-row gap-x-48">
                            <h1 className="text-md">Your work</h1>
                            <h1 className="text-sm">Archived</h1>
                          </div>
                          <label
                            for="file-upload"
                            class="w-full h-10 border bg-white hover:bg-gray-100 text-[#AD5606] font-bold py-1 px-4 rounded my-2 cursor-not-allowed inline-flex items-center justify-center pointer-events-none"
                          >
                            Add work
                            <input
                              id="file-upload"
                              type="file"
                              class="hidden"
                              disabled
                            />
                          </label>
                          <button class="w-full h-10 border bg-[#AD5606] hover:bg-[#AD5606]-700 text-white font-bold py-1 px-4 rounded">
                            Unsubmit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {options === "nodue2" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    No Due Date 2 Title
                  </h1>
                  <p className="mb-4 text-lg">No Dute Date 2 Instructions.</p>

                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "nodue3" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    No Due Date 3 Title
                  </h1>
                  <p className="mb-4 text-lg">No Dute Date 3 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
            </div>
          </div>


          <div
            className="
            flex flex-col w-[100%] p-0 rounded-md mt-8
            sm:w-[90%]
            md:w-[80%] 
            lg:w-[80%]
            xl:w-[70%]  
            2xl:w-[60%] 
            "
          >
            <label className="w-full text-[#5B0505] text-xl text-start font-semibold mr-4">
              This week:
            </label>
            <div className="w-full">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1 border border-orange-900"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                <option value="thisweek1">This week 1</option>
                <option value="thisweek2">This week 2</option>
                <option value="thisweek3">This week 3</option>
              </select>
              {options === "thisweek1" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    This week 1 Title
                  </h1>
                  <p className="mb-4 text-lg">This week 1 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "thisweek2" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    This week 2 Title
                  </h1>
                  <p className="mb-4 text-lg">This week 2 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "thisweek3" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    This week 3 Title
                  </h1>
                  <p className="mb-4 text-lg">This week 3 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className="
            flex flex-col w-[100%] p-0 rounded-md mt-8
            sm:w-[90%]
            md:w-[80%] 
            lg:w-[80%]
            xl:w-[70%]  
            2xl:w-[60%] 
            "
          >            
            <label className="w-full text-[#5B0505] text-xl text-start font-semibold mr-4">
              Next week:
            </label>
            <div className="w-full">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1 border border-orange-900"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                <option value="nextweek1">Next week 1</option>
                <option value="nextweek2">Next week 2</option>
                <option value="nextweek3">Next week 3</option>
              </select>
              {options === "nextweek1" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    Next week 1 Title
                  </h1>
                  <p className="mb-4 text-lg">Next week 1 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "nextweek2" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    Next week 2 Title
                  </h1>
                  <p className="mb-4 text-lg">Next week 2 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "nextweek3" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    Next week 3 Title
                  </h1>
                  <p className="mb-4 text-lg">Next week 3 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className="
            flex flex-col w-[100%] p-0 rounded-md mt-8
            sm:w-[90%]
            md:w-[80%] 
            lg:w-[80%]
            xl:w-[70%]  
            2xl:w-[60%] 
            "
          >            
            <label className="w-full text-[#5B0505] text-xl text-start font-semibold mr-4">
              Later:
            </label>
            <div className="w-full">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1 border border-orange-900"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                <option value="later1">Later 1</option>
                <option value="later2">Later 2</option>
                <option value="later3">Later 3</option>
              </select>
              {options === "later1" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">Later 1 Title</h1>
                  <p className="mb-4 text-lg">Later 1 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "later2" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">Later 2 Title</h1>
                  <p className="mb-4 text-lg">Later 2 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "later3" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">Later 3 Title</h1>
                  <p className="mb-4 text-lg">Later 3 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
