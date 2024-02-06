import { ScrollArea } from "@/components/ui/scroll-area"

import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"

import Form from "./Form"


async function EditProfileFaculty_Dialog({ sessionUser }) {


    return (
        <Dialog>

            <DialogTrigger asChild>
                <b className='bg-transparent hover-transparent text-3xl font-bold'>EDIT</b>
            </DialogTrigger>
            <DialogContent className="p-16 md:max-w-[1600px] h-[800px]">
                <ScrollArea className="h-[700px] w-[1500px] rounded-md border p-4">
                    <Form sessionUser={sessionUser}/>
                </ScrollArea>
            </DialogContent>
        </Dialog >

    )
}

export default EditProfileFaculty_Dialog