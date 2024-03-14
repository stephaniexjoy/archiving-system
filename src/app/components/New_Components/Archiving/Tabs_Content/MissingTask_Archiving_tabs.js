"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import React from "react";
export default function MissingTask_Archiving_tabs() {
  const [options, setOptions] = useState("");

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <div className="flex flex-col mt-5 px-10">
        <h1 className="text-center text-[#5B0505] text-[45px] font-semibold md:shadow-zinc-400 mb-5">
          Missing Tasks
        </h1>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col bg-white w-[60%] p-4 rounded-md">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
              Missing:
            </label>
            <div className="w-full">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                <option value="nodue1">No Due Date 1</option>
                <option value="nodue2">No Due Date 2</option>
                <option value="nodue3">No Due Date 3</option>
              </select>
              {options === "nodue1" && (
                <div class="flex flex-row mt-4">
                  <div class="w-full p-0">
                    <Card className="w-full h-auto">
                      <CardContent>
                        <div class="flex flex-row text-xl text-black p-4 mt-4">
                          <div className="w-full flex flex-col">
                            <h1 class="text-4xl font-semibold mb-52">
                              No Due Date 1 Title
                            </h1>
                            <p class="mb-52 text-2xl">
                              No Due Date 1 Instructions.
                            </p>
                            <div>
                              <h1 class="text-lg ">Post Today</h1>
                            </div>
                          </div>
                          <div class="w-[80%] h-auto">
                            <div class="flex flex-col bg-white p-4 gap-4 drop-shadow-2xl  rounded-xl">
                              <div className="flex flex-row gap-x-56">
                                <h1 className="text-xl">Your work</h1>
                                <h1 className="text-md text-red-600">
                                  Missing
                                </h1>
                              </div>
                              <label
                                for="file-upload"
                                class="w-full h-14 border bg-white hover:bg-gray-100 text-[#AD5606] font-bold py-1 px-4 rounded my-2 cursor-pointer inline-flex items-center justify-center mt-16"
                              >
                                Add work
                                <input
                                  id="file-upload"
                                  type="file"
                                  class="hidden"
                                />
                              </label>{" "}
                              <button class="w-full h-14 border bg-[#AD5606] hover:bg-[#AD5606]-700 text-white font-bold py-1 px-4 rounded">
                                Mark as done
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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
        </div>
      </div>
    </>
  );
}
