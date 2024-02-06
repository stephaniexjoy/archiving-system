"use client"
import React from 'react'
import { useState } from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import AddTask_Dialog from './Dialogs/AddTask_Dialog';

export default function AssignedTask_Archiving_tabs({ position }) {

  const [options, setOptions] = useState("");


  return (
    <>
      <div className="flex flex-col mt-5 px-10">
        <h1 className="text-center text-[#5B0505] text-[45px] font-semibold md:shadow-zinc-400 mb-5">
          Assigned Tasks

        </h1>
        {!position === "Faculty" && (
          <div className='flex items-center justify-center'>
            <button className='bg-[#AD5606] text-white text-center items-center w-[15%] h-12 border border-black text-xl rounded-lg'>
              <AddTask_Dialog />
            </button>
          </div>
        )}

        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col bg-white w-[60%] p-4 rounded-md">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
              No Due Date:
            </label>
            <div className="w-full">
              <select onChange={(e) => setOptions(e.target.value)}
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
                <div className='border border-black text-xl text-black p-4 mt-4'>
                  <h1 className="text-2xl font-semibold mb-2">No Due Date 1 Title</h1>
                  <p className="mb-4 text-lg">No Dute Date 1 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "nodue2" && (
                <div className='border border-black text-xl text-black p-4 mt-4'>
                  <h1 className="text-2xl font-semibold mb-2">No Due Date 2 Title</h1>
                  <p className="mb-4 text-lg">No Dute Date 2 Instructions.</p>

                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "nodue3" && (
                <div className='border border-black text-xl text-black p-4 mt-4'>
                  <h1 className="text-2xl font-semibold mb-2">No Due Date 3 Title</h1>
                  <p className="mb-4 text-lg">No Dute Date 3 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col bg-white w-[60%] p-4 rounded-md">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
              This week:
            </label>
            <div className="w-full">
              <select onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                <option value="thisweek1">This week 1</option>
                <option value="thisweek2">This week 2</option>
                <option value="thisweek3">This week 3</option>
              </select>
              {options === "thisweek1" && (
                <div className='border border-black text-xl text-black p-4 mt-4'>
                  <h1 className="text-2xl font-semibold mb-2">This week 1 Title</h1>
                  <p className="mb-4 text-lg">This week 1 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "thisweek2" && (
                <div className='border border-black text-xl text-black p-4 mt-4'>
                  <h1 className="text-2xl font-semibold mb-2">This week 2 Title</h1>
                  <p className="mb-4 text-lg">This week 2 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "thisweek3" && (
                <div className='border border-black text-xl text-black p-4 mt-4'>
                  <h1 className="text-2xl font-semibold mb-2">This wwek 3 Title</h1>
                  <p className="mb-4 text-lg">This week 3 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>

                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col bg-white w-[60%] p-4 rounded-md">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
              Next week:
            </label>
            <div className="w-full">
              <select onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                <option value="nextweek1">Next week 1</option>
                <option value="nextweek2">Next week 2</option>
                <option value="nextweek3">Next week 3</option>
              </select>
              {options === "nextweek1" && (
                <div className='border border-black text-xl text-black p-4 mt-4'>
                  <h1 className="text-2xl font-semibold mb-2">Next week 1 Title</h1>
                  <p className="mb-4 text-lg">Next week 1 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "nextweek2" && (
                <div className='border border-black text-xl text-black p-4 mt-4'>
                  <h1 className="text-2xl font-semibold mb-2">Next week 2 Title</h1>
                  <p className="mb-4 text-lg">Next week 2 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "nextweek3" && (
                <div className='border border-black text-xl text-black p-4 mt-4'>
                  <h1 className="text-2xl font-semibold mb-2">Next week 3 Title</h1>
                  <p className="mb-4 text-lg">Next week 3 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col bg-white w-[60%] p-4 rounded-md">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
              Later:
            </label>
            <div className="w-full">
              <select onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                <option value="later1">Later 1</option>
                <option value="later2">Later 2</option>
                <option value="later3">Later 3</option>
              </select>
              {options === "later1" && (
                <div className='border border-black text-xl text-black p-4 mt-4'>
                  <h1 className="text-2xl font-semibold mb-2">Later 1 Title</h1>
                  <p className="mb-4 text-lg">Later 1 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "later2" && (
                <div className='border border-black text-xl text-black p-4 mt-4'>
                  <h1 className="text-2xl font-semibold mb-2">Later 2 Title</h1>
                  <p className="mb-4 text-lg">Later 2 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "later3" && (
                <div className='border border-black text-xl text-black p-4 mt-4'>
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
  )
}
