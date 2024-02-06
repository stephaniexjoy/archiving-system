
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-dropdown-menu"
import { useState } from "react"



function AddTask_Dialog({ sessionUser }) {

    const [isNoDueDate, setisNoDueDate] = useState(false)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <b className='bg-transparent hover-transparent text-3xl font-bold'>Add Task</b>
            </DialogTrigger>
            <DialogContent className="p-16 md:max-w-[1200px] h-auto">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col text-2xl">
                        <Label className="text-left">Title</Label>
                        <Input className="my-3" type="text" placeholder="" />
                        <Label>Instructions</Label>
                        <Input className="my-3" type="text" placeholder="" />
                        <div className="flex flex-row my-4">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                onChange={()=> {setisNoDueDate(true)}}
                                className="mx-4 text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                No Due Date?
                            </label>
                        </div>
                        {!isNoDueDate === true && (<div className="items-center justify-center">
                            <button className="bg-[#AD5606] text-white font-semibold w-[15%]">Add</button>
                        </div>)}

                    </div>
                </div>
            </DialogContent>
        </Dialog >

    )
}

export default AddTask_Dialog