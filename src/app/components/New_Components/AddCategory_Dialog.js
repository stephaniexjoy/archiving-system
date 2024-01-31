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
import { Button } from "@/components/ui/button"

import { addCategory } from "next-auth/react"

import React from 'react'

export default function AddCategory_Dialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="border-none mt-1 ml-16 text-center bg-[#675454] text-orange-200 outline-color rounded shadow-lg w-[130px]">Add Category</Button>
            </DialogTrigger>
            <DialogContent>
                <div className="flex flex-col justify-center w-full max-w-md items-center space-x-2 p-6">
                    <Input type="text" placeholder="" className="bg-[#B5B5B5] border border-black mt-10"/>
                    <Button type="submit" className="mt-12 bg-[#8F8F8F] px-5 font-bold">ADD CATEGORY  </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
