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
                <b className="md:left-[1300px] text-center bg-transparent text-white text-3xl font-bold h-10 w-64 p-2 m-2 cursor-pointer">EDIT PROFILE</b>
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