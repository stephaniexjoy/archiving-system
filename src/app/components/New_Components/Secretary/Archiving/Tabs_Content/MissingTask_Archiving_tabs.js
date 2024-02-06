import React from 'react'

export default function MissingTask_Archiving_tabs() {
    return (
        <>
            <div className="flex flex-col mt-5 px-10">
                <h1 className="text-center text-[#5B0505] text-[45px] font-semibold md:shadow-zinc-400 mb-5">
                    Missing Tasks
                </h1>
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col bg-white w-[60%] p-4 rounded-md">
                        <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
                            No Due Date:
                        </label>
                        <div className="w-full">
                            <select
                                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                                name="taskType"
                                id="taskType"
                            >
                                <option value="select"></option>
                                <option value="nodue1">No Due Date 1</option>
                                <option value="nodue2">No Due Date 2</option>
                                <option value="nodue3">No Due Date 3</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white w-[60%] p-4 rounded-md">
                        <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
                            This week:
                        </label>
                        <div className="w-full">
                            <select
                                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                                name="taskType"
                                id="taskType"
                            >
                                <option value="select"></option>
                                <option value="thisweek1">This week 1</option>
                                <option value="thisweek2">This week 2</option>
                                <option value="thisweek3">This week 3</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white w-[60%] p-4 rounded-md">
                        <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
                            Next week:
                        </label>
                        <div className="w-full">
                            <select
                                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                                name="taskType"
                                id="taskType"
                            >
                                <option value="select"></option>
                                <option value="nextweek1">Next week 1</option>
                                <option value="nextweek2">Next week 2</option>
                                <option value="nextweek3">Next week 3</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white w-[60%] p-4 rounded-md">
                        <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
                            Later:
                        </label>
                        <div className="w-full">
                            <select
                                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                                name="taskType"
                                id="taskType"
                            >
                                <option value="select"></option>
                                <option value="later1">Later 1</option>
                                <option value="later2">Later 2</option>
                                <option value="later3">Later 3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
