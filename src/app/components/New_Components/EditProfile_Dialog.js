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

function EditProfile_Dialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <b className="
                text-center bg-transparent text-white text-lg font-bold h-10 w-36 p-2 m-2 cursor-pointer
                sm:text-center sm:bg-transparent sm:text-white sm:text-lg sm:font-bold sm:h-10 sm:w-44 sm:p-2 sm:m-2 sm:cursor-pointer
                md:text-center md:bg-transparent md:text-white md:text-lg md:font-bold md:h-10 md:w-52 md:p-2 md:m-2 md:cursor-pointer
                lg:text-center lg:bg-transparent lg:text-white lg:text-xl lg:font-bold lg:h-10 lg:w-56 lg:p-2 lg:m-2 lg:cursor-pointer
                xl:text-center xl:bg-transparent xl:text-white xl:text-2xl xl:font-bold xl:h-10 xl:w-60 xl:p-2 xl:m-2 xl:cursor-pointer
                2xl:text-center 2xl:bg-transparent 2xl:text-white 2xl:text-2xl 2xl:font-bold 2xl:h-10 2xl:w-64 2xl:p-2 2xl:m-2 2xl:cursor-pointer
                ">EDIT PROFILE</b>
            </DialogTrigger>
            <DialogContent className="p-16 md:max-w-[1000px]">
                <div className="grid gap-4 py-2">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="picture" className="font-semibold text-[25px] text-left">
                            Profile Photo:
                        </Label>
                        <Input id="picture" type="file" className="bg-[#837979] text-white text-[20px] col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="font-semibold text-[25px] text-left">
                            Name:
                        </Label>
                        <Input id="name" type="text" className="bg-[#837979] text-white text-[20px] col-span-3" />
                    </div>
                    <div className="grid grid-cols-4">
                        <div className="grid grid-cols-4 items-center gap-4 col-span-2">
                            <Label htmlFor="age" className="font-semibold text-[25px] text-left">
                                Age:
                            </Label>
                            <Input id="age" type="text" className="bg-[#837979] text-white text-[20px] col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4 col-span-2">
                            <Label htmlFor="sex" className="ml-7 font-semibold text-[25px] text-left">
                                Sex:
                            </Label>
                            <Input id="sex" type="text" className="bg-[#837979] text-white text-[20px] col-span-3" />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="employeeNo" className="font-semibold text-[25px] text-left">
                            Employee No:
                        </Label>
                        <Input id="employeeNo" type="text" className="bg-[#837979] text-white text-[20px] col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="department" className="font-semibold text-[25px] text-left">
                            Department:
                        </Label>
                        <Input id="department" type="text" className="bg-[#837979] text-white text-[20px] col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="designation" className="font-semibold text-[25px] text-left">
                            Designation:
                        </Label>
                        <Input id="designation" type="text" className="bg-[#837979] text-white text-[20px] col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="font-semibold text-[25px] text-left">
                            Institutional Email:
                        </Label>
                        <Input id="email" type="text" className="bg-[#837979] text-white text-[20px] col-span-3" />
                    </div>
                </div>
                <div className="mt-10 flex justify-center">
                    <Button type="submit" className="bg-[#8F8F8F] text-white text-[20px] w-[300px]">Save</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default EditProfile_Dialog