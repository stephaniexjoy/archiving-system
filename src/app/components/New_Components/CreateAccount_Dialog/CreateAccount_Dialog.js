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
import Form from "./Form"

function CreateAccount_Dialog({ sessionUser }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <b className='
                bg-transparent hover-transparent mt-0 text-xl font-bold cursor-pointer
                2xl:bg-transparent 2xl:hover-transparent 2xl:mt-2 2xl:text-3xl 2xl:font-bold 2xl:cursor-pointer
                '>CREATE ACCOUNT</b>
            </DialogTrigger>
            <DialogContent className="p-16 md:max-w-[1000px]">
                <Form sessionUser={sessionUser} />
            </DialogContent>
        </Dialog>
    )
}

export default CreateAccount_Dialog