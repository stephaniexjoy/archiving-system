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

async function EditPrivacy_Dialog() {
    const updateUser = async (formData) => {
        "use server"

        const email = formData.get("emailUpd")
        const currentPassword = formData.get("currentPass")
        const newPassword = formData.get("newPass")
        const confirmPassword = formData.get("newPassConfirm")
        const passCheck = await bcrypt.compare(currentPassword, user.password)
        console.log(email, currentPassword, newPassword, confirmPassword)

        if (user && passCheck) {
            if (newPassword === confirmPassword) {
                const hashedPassword = await bcrypt.hash(newPassword, 12);

                const updPrivacy = await db.user.update({
                    where: { id: user.id },
                    data: {
                        email: email,
                        password: hashedPassword

                    }
                })

            }
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <b className="
                left-[1300px] text-center bg-transparent text-white text-xl font-bold h-10 w-44 p-2 m-2 cursor-pointer
                2xl:left-[1300px] 2xl:text-center 2xl:bg-transparent 2xl:text-white 2xl:text-3xl 2xl:font-bold 2xl:h-12 2xl:w-64 2xl:p-2 2xl:m-2 2xl:cursor-pointer
                ">EDIT PRIVACY</b>
            </DialogTrigger>
            <DialogContent className="p- md:max-w-[1000px]">
                <form>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="font-semibold text-[25px] text-left">
                                Email:
                            </Label>
                            <Input id="email" name="emailUpd" type="text" className="bg-[#837979] text-white text-[20px] col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="employeeNo" className="font-semibold text-[25px] text-left">
                                Current Password:
                            </Label>
                            <Input id="currentPassword" name="currentPass" type="password" className="bg-[#837979] text-white text-[20px] col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="department" className="font-semibold text-[25px] text-left">
                                New Password:
                            </Label>
                            <Input id="newPassword" name="newPass" type="password" className="bg-[#837979] text-white text-[20px] col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="designation" className="font-semibold text-[25px] text-left">
                                Confirm Password:
                            </Label>
                            <Input id="confirmPassword" name="newPassConfirm" type="password" className="bg-[#837979] text-white text-[20px] col-span-3" />
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Button type="submit" className="bg-[#8F8F8F] text-white text-[20px] w-[300px]">Save</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default EditPrivacy_Dialog