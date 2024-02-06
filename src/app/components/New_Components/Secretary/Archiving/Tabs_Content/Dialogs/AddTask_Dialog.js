
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-dropdown-menu"
import { useState } from "react"
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"



function AddTask_Dialog({ sessionUser }) {
    const [date, setDate] = React.useState(null);

    const [isNoDueDate, setisNoDueDate] = useState(false)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <b className='bg-transparent hover-transparent text-3xl font-bold'>Add Task</b>
            </DialogTrigger>
            <DialogContent className="p-16 md:max-w-[1200px] h-auto">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col text-3xl">
                        <Label className="text-left font-semibold">Title</Label>
                        <Input className="my-3 h-16 text-lg" type="text" placeholder="" />
                        <Label className="text-left font-semibold">Instructions</Label>
                        <Input className="my-3 h-48 text-lg" type="text" placeholder="" />
                        <div className="flex flex-row my-4">
                            <input
                                type="checkbox"
                                onChange={(e) => setisNoDueDate(e.target.checked)}
                                checked={isNoDueDate}
                            />
                            <label
                                htmlFor="terms"
                                onChange={(e) => { setisNoDueDate(e.target.checked) }}
                                className="mx-4 text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                No Due Date?
                            </label>
                        </div>
                        {!isNoDueDate && (
                            <div className="items-center justify-center">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "my-6 w-[380px] justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-6 w-6" />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="text-lg w-auto p-4">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        )}

                    </div>
                </div>
            </DialogContent>
        </Dialog >

    )
}

export default AddTask_Dialog