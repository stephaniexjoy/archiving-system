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

function EditPrivacy_Dialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="md:left-[1300px] text-center md:text-[25px] bg-[#AD5606] text-white text-xl font-bold h-10 w-52 hover:bg-[#6A6A6A] hover:text-white p-2 m-2">EDIT PRIVACY</Button>
            </DialogTrigger>
            <DialogContent className="p- md:max-w-[1000px]">
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="font-semibold text-[25px] text-left">
                            Email:
                        </Label>
                        <Input id="email" type="text" className="bg-[#837979] text-white text-[20px] col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="employeeNo" className="font-semibold text-[25px] text-left">
                            Current Password:
                        </Label>
                        <Input id="currentPassword" type="password" className="bg-[#837979] text-white text-[20px] col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="department" className="font-semibold text-[25px] text-left">
                            New Password:
                        </Label>
                        <Input id="newPassword" type="password" className="bg-[#837979] text-white text-[20px] col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="designation" className="font-semibold text-[25px] text-left">
                            Confirm Password:
                        </Label>
                        <Input id="confirmPassword" type="password" className="bg-[#837979] text-white text-[20px] col-span-3" />
                    </div>
                </div>
                <div className="mt-6 flex justify-center">
                    <Button type="submit" className="bg-[#8F8F8F] text-white text-[20px] w-[300px]">Save</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default EditPrivacy_Dialog