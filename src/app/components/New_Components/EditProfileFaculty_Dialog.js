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

import React from 'react'
import NextEditProfileFaculty_Dialog from "./NextEditProfileFaculty_Dialog"

function EditProfileFaculty_Dialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <b className='bg-transparent hover-transparent text-3xl font-bold'>EDIT</b>
            </DialogTrigger>
            <DialogContent className="p-16 md:max-w-[1600px] h-[800px]">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-4">
                        <label htmlFor="profilePictureInput">
                            <img
                                className="rounded-[50%] w-[240px] h-auto object-cover cursor-pointer"
                                alt="Profile"
                                src="/profile.jpg"
                            />
                        </label>
                        <input
                            type="file"
                            id="profilePictureInput"
                            style={{ display: 'none' }}
                        />
                        <div className="flex flex-col ml-16 gap-4">
                            <div className="flex flex-row items-center gap-4">
                                <Label htmlFor="name" className="font-semibold text-[25px] text-left">
                                    Name:
                                </Label>
                                <Input id="name" type="text" className="ml-[24%] bg-[#837979] w-[800px] font-semibold text-white text-[20px]" />
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <Label htmlFor="role" className="font-semibold text-[25px] text-left">
                                    Role:
                                </Label>
                                <select id="role" className="ml-[25.5%] bg-[#837979] w-[800px] font-semibold text-white text-[25px]">
                                    <option value="">Select Role</option>
                                    <option value="Faculty">Faculty</option>
                                    <option value="Secretary">Secretary</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <Label htmlFor="category" className="font-semibold text-[25px] text-left">
                                    Category:
                                </Label>
                                <select id="category" className="ml-[20%] bg-[#837979] w-[800px] font-semibold text-white text-[25px]">
                                    <option value="">Select category</option>
                                    <option value="Associate Dean">Associate Dean</option>
                                    <option value="Secretary">Secretary</option>
                                    <option value="Faculty">Faculty</option>
                                    <option value="Unit Head">Unit Head</option>
                                    <option value="Coordinator">Coordinator</option>
                                </select>
                            </div>
                            <div className="flex flex-row items-center">
                                <Label htmlFor="eligibility/professionallicense" className="font-semibold text-[25px] text-left">
                                    Eligibity/Professional License:
                                </Label>
                                <Input id="eligibility/professionallicenseeligibility/professionallicense" type="text" className="ml-[0.5%] bg-[#837979] w-[800px] text-white text-[20px]" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-row items-center">
                        <Label htmlFor="school" className="font-semibold text-[25px] text-left">
                            School:
                        </Label>
                        <Input id="school" type="text" className="ml-[19%] bg-[#837979] w-[1100px] text-white text-[20px]" />
                    </div>
                    <div className="mt-4 flex flex-row items-center">
                        <Label htmlFor="specialization" className="font-semibold text-[25px] text-left">
                            Specialization:
                        </Label>
                        <Input id="specialization" type="text" className="ml-[13%] bg-[#837979] w-[1100px] text-white text-[20px]" />
                    </div>
                    <div className="mt-4 flex flex-row items-center">
                        <Label htmlFor="certifications" className="font-semibold text-[25px] text-left">
                            Certifications:
                        </Label>
                        <Input id="certifications" type="text" className="ml-[13.3%] bg-[#837979] w-[1100px] text-white text-[20px]" />
                    </div>
                    <div className="mt-4 flex justify-center items-center">
                        <Label htmlFor="academicQualifications" className="font-semibold text-[30px] text-center">
                            ACADEMIC QUALIFICATIONS:
                        </Label>
                    </div>
                    <div className="mt-4 flex flex-row items-center">
                        <Label htmlFor="baccalaureateDegree" className="font-semibold text-[25px] text-left">
                            Baccalaureate  Degree:
                        </Label>
                        <Input id="baccalaureateDegree" type="text" className="ml-[6.5%] bg-[#837979] w-[470px] text-white text-[20px]" />
                        <Label htmlFor="school" className="ml-[3%] font-semibold text-[25px] text-left">
                            School:
                        </Label>
                        <Input id="school" type="text" className="ml-[1%] bg-[#837979] w-[470px] text-white text-[20px]" />
                    </div>
                    <div className="mt-4 flex flex-row items-center">
                        <Label htmlFor="mastersDegree" className="font-semibold text-[25px] text-left">
                            Master&apos;s Degree:
                        </Label>
                        <Input id="mastersDegree" type="text" className="ml-[11%] bg-[#837979] w-[470px] text-white text-[20px]" />
                        <Label htmlFor="school" className="ml-[3%] font-semibold text-[25px] text-left">
                            School:
                        </Label>
                        <Input id="school" type="text" className="ml-[1%] bg-[#837979] w-[470px] text-white text-[20px]" />
                    </div>
                    <div className="mt-4 flex flex-row items-center">
                        <Label htmlFor="doctorateDegree" className="font-semibold text-[25px] text-left">
                            Doctorate  Degree:
                        </Label>
                        <Input id="doctorateDegree" type="text" className="ml-[10%] bg-[#837979] w-[470px] text-white text-[20px]" />
                        <Label htmlFor="school" className="ml-[3%] font-semibold text-[25px] text-left">
                            School:
                        </Label>
                        <Input id="school" type="text" className="ml-[1%] bg-[#837979] w-[465px] text-white text-[20px]" />
                    </div>
                </div>
                <div className="flex justify-center gap-4 gap-x-16 mt-5">
                    <Button type="submit" className="bg-[#5B0505] text-[25px] font-semibold w-72">
                        <NextEditProfileFaculty_Dialog/>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default EditProfileFaculty_Dialog