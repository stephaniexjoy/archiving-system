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
import { db } from "@/app/lib/prisma_db"
import { backendClient } from "@/app/lib/edgestore-server"
import React from 'react'
import Form from "./Form"

export default async function UploadMaterial_Dialog({ sessionUser }) {

    console.log(sessionUser)

    const uploadMaterial = async (formData) => {
        "use server"

    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className='bg-transparent text-white text-xl mt-2 font-bold cursor-pointer'>UPLOAD MATERIAL</button>
            </DialogTrigger>
            <DialogContent className="md:max-w-[1000px]">
                <Form sessionUser={sessionUser} />
            </DialogContent>
        </Dialog>
    )
}
