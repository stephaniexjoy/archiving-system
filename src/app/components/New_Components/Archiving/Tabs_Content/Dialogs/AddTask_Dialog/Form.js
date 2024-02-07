import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { useState } from "react";
import { addTasks } from "@/app/lib/actions/actions";
import { useToast } from "@/components/ui/use-toast";


export default function Form() {
    const { toast } = useToast()
    const [date, setDate] = useState(null);

    const [isNoDueDate, setisNoDueDate] = useState(false);
    return (
        <>
            <form action={async formData => {
                const add_Tasks = await addTasks(formData, date)

                if (add_Tasks) {

                    toast({

                        description: "Successfully added task.",

                        variant: "default",

                    })

                }

            }}>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col text-3xl">
                        <Label className="text-left font-semibold">Title</Label>
                        <Input name="titleInput" className="my-3 h-16 text-lg" type="text" placeholder="" />
                        <Label className="text-left font-semibold">Instructions</Label>
                        <textarea
                            name="instructionInput"
                            className="my-3 h-48 text-lg border rounded-lg resize-none"
                            type="text"
                            placeholder=""
                        />
                        <div className="flex flex-row my-4">
                            <input
                                name="isNoDueDateBox"
                                type="checkbox"
                                onChange={(e) => setisNoDueDate(e.target.checked)}
                                checked={isNoDueDate}
                            />
                            <label
                                htmlFor="terms"
                                onChange={(e) => {
                                    setisNoDueDate(e.target.checked);
                                }}
                                className="mx-4 text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                No Due Date?
                            </label>
                        </div>
                        {!isNoDueDate && (

                            <div className="flex flex-col justify-start">
                                <Popover >
                                    <PopoverTrigger asChild>
                                        <Button

                                            variant={"outline"}
                                            className={cn(
                                                "my-6 w-[310px] justify-start text-left font-normal",
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

                                <input name="time" type="time" className=" my-6  w-[310px] border border-black text-2xl rounded-lg cursor-pointer" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="flex justify-center items-center w-[25%] h-12 text-black font-semibold  bg-[#AD5606] rounded-lg">
                        <Button type="submit" className="text-2xl rounded-lg" variant="primary">
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}
