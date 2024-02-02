import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { uploadMaterial } from "next-auth/react"
import React from 'react'

export default function UploadMaterial_Dialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <b className='bg-transparent hover-transparent mt-2 text-3xl font-bold cursor-pointer'>UPLOAD MATERIAL</b>
            </DialogTrigger>
            <DialogContent className="md:max-w-[1025px]">
                <div className="grid gap-8 py-16 px-16 grid-cols-2">
                    <div className="grid grid-cols-1 items-center">
                        <Label htmlFor="dropdown1" className="font-semibold text-[#AD5606] text-2xl text-center">
                            MATERIAL
                        </Label>
                        <select id="dropdown1" className="bg-[#AD5606] border border-gray-300 text-white text-xl focus:ring-primary-500 focus:border-primary-500 block w-full h-[70px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option value="Option 0">-----------------Select----------------</option>
                            <option value="Option 1">Learning Material</option>
                            <option value="Option 2">Training and Seminar</option>
                            <option value="Option 3">Research Conducted</option>
                            <option value="Option 4">Extension Conducted</option>
                            <option value="Option 5">Educational Qualification</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 items-center">
                        <Label htmlFor="dropdown2" className="font-semibold text-[#AD5606] text-2xl text-center">
                            FILE TYPE
                        </Label>
                        <select id="dropdown2" className="bg-[#AD5606] border border-gray-300 text-white text-xl focus:ring-primary-500 focus:border-primary-500 block w-full h-[70px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option value="Option 0">-----------------Select----------------</option>
                            <option value="Option 1">PDF</option>
                            <option value="Option 2">PPT</option>
                            <option value="Option 3">DOCX</option>
                        </select>
                    </div>
                    <div className="mt-10 grid grid-cols-1 items-center">
                        <Label htmlFor="dropdown3" className="font-semibold text-[#AD5606] text-2xl text-center">
                            PROGRAM
                        </Label>
                        <select id="dropdown3" className="bg-[#AD5606] border border-gray-300 text-white text-xl focus:ring-primary-500 focus:border-primary-500 block w-full h-[70px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option value="Option 0">-----------------Select----------------</option>
                            <option value="Option 1">Machine Learning</option>
                            <option value="Option 2">Programming Languages</option>
                            <option value="Option 3">Platform Technologies</option>
                        </select>
                    </div>
                    <div className="mt-10 grid grid-cols-1 items-center">
                        <Label htmlFor="dropdown4" className="font-semibold text-[#AD5606] text-2xl text-center">
                            PRIVACY
                        </Label>
                        <select id="dropdown4" className="bg-[#AD5606] border border-gray-300 text-white text-xl focus:ring-primary-500 focus:border-primary-500 block w-full h-[70px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option value="Option 0">-----------------Select----------------</option>
                            <option value="Option 1">FOR ALL</option>
                            <option value="Option 2">SECRETARY ONLY</option>
                        </select>
                    </div>

                </div>
                <div className="flex flex-col items-center justify-center bg-gray w-full h-full">
                    <div className="bg-gray w-full p-4 rounded-lg">
                        <Label htmlFor="fileInput" className="font-semibold text-white text-lg text-center bg-[#6A6A6A] border border-gray-300= rounded-lg focus:ring-primary-500 focus:border-primary-500 block mx-auto w-1/2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            CHOOSE FILE
                        </Label>
                        <input
                            type="file"
                            id="fileInput"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block mx-auto w-1/2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mt-1 cursor-pointer"
                        />
                    </div>
                    <DialogFooter className="mt-4">
                        <Button type="submit" className="bg-[#8F8F8F] text-white text-[20px] w-[300px]">UPLOAD</Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    )
}
