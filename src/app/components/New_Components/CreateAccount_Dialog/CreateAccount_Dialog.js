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

function CreateAccount_Dialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <b className='bg-transparent hover-transparent mt-2 text-3xl font-bold cursor-pointer'>CREATE ACCOUNT</b>
            </DialogTrigger>
            <DialogContent className="p-16 md:max-w-[1000px]">
                <Form />
            </DialogContent>
        </Dialog>
    )
}

export default CreateAccount_Dialog