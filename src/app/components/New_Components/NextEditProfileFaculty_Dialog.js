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

function NextEditProfileFaculty_Dialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <b className='bg-transparent hover-transparent text-3xl font-bold'>NEXT</b>
            </DialogTrigger>
            <DialogContent className="p-16 md:max-w-[1600px] h-[800px]">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-4">
                        <div className="flex flex-col items-center ">
                            <Label htmlFor="name" className="font-semibold text-[25px] text-left">
                                SEMINARS AND TRAININGS ATTENDED:
                            </Label>
                            <Input id="name" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                        </div>
                        <div className="flex flex-col items-center ml-36">
                            <Label htmlFor="name" className="font-semibold text-[25px] text-left">
                                SUBJECTS HANDLED (DESCRIPTIVE TITLE):
                            </Label>
                            <Input id="name" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <div className="flex flex-col items-center mt-8">
                            <Label htmlFor="name" className="font-semibold text-[25px] text-left">
                                JOB EXPERIENCE:
                            </Label>
                            <Input id="name" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                        </div>
                        <div className="flex flex-col mt-8 ml-36">
                            <Label htmlFor="name" className="font-italize text-[25px] text-left">
                                COMPLETED:
                            </Label>
                            <Input id="name" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <div className="flex flex-col items-center mt-8">
                            <Label htmlFor="name" className="font-semibold text-[25px] text-left">
                                PAST DESIGNATIONS:
                            </Label>
                            <Input id="name" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                        </div>
                        <div className="flex flex-col mt-8 ml-36">
                            <Label htmlFor="name" className="font-italize text-[25px] text-left">
                                PUBLISHED:
                            </Label>
                            <Input id="name" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <div className="flex flex-col items-center mt-8">
                            <Label htmlFor="name" className="font-semibold text-[25px] text-left">
                                EXTENSION PROJECTS:
                            </Label>
                            <Input id="name" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                        </div>
                        <div className="flex flex-col mt-8 ml-36">
                            <Label htmlFor="name" className="font-italize text-[25px] text-left">
                                PRESENTED:
                            </Label>
                            <Input id="name" type="text" className="bg-[#837979] w-[650px] h-[90px] font-semibold text-white text-[20px]" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-4 gap-x-16 mt-10">
                    <Button type="submit" className="bg-[#5B0505] text-[25px] font-semibold w-72">SAVE</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default NextEditProfileFaculty_Dialog