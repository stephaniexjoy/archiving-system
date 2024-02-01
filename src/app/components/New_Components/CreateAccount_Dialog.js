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

function CreateAccount_Dialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <b className='bg-transparent hover-transparent mt-2 text-3xl font-bold'>CREATE ACCOUNT</b>
            </DialogTrigger>
            <DialogContent className="p-16 md:max-w-[1000px]">
                <div className="grid gap-4 py-3 ">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="font-semibold text-[25px] text-left">
                            Name:
                        </Label>
                        <Input id="name" type="text" className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="role" className="font-semibold text-[25px] text-left">
                            Role:
                        </Label>
                        <select id="role" className="ml-24 bg-[#837979] w-[550px] text-white text-[25px]">
                            <option value="Faculty">Faculty</option>
                            <option value="Secretary">Secretary</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category" className="font-semibold text-[25px] text-left">
                            Category:
                        </Label>
                        <Input id="category" type="text" className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4 ">
                        <Label htmlFor="specialization" className="font-semibold text-[25px] text-left">
                            Specialization:
                        </Label>
                        <Input id="specialization" type="text" className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="eligibility/professionallicense" className="font-semibold text-[25px] text-left">
                            Eligibity/Professional License:
                        </Label>
                        <Input id="eligibility/professionallicenseeligibility/professionallicense" type="text" className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="font-semibold text-[25px] text-left">
                            Email:
                        </Label>
                        <Input id="email" type="email" className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="font-semibold text-[25px] text-left">
                            Password:
                        </Label>
                        <Input id="password" type="password" className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                </div>
                <div className="flex justify-center gap-4 gap-x-16 mt-20">
                    <Button type="submit" className="bg-[#737373] w-72 font-bold">CREATE</Button>
                    <Button type="submit" className="bg-[#737373] w-72  font-bold">BACK</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CreateAccount_Dialog