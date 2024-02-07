"use client"
import { createAccount } from "@/app/lib/actions/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"


export default function Form({ sessionUser }) {
    const { toast } = useToast()
    return (
        <>
            <form action={async formData => {
                console.log(formData)

                const create = await createAccount(formData, sessionUser)
                if (create) {
                    toast({

                        description: "Successfuly Created an Account.",

                        variant: "default",

                    })
                }
            }}>
                <div className="grid gap-4 py-3 ">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="font-semibold text-[25px] text-left">
                            Name:
                        </Label>
                        <Input name="nameInput" id="name" type="text" className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="age" className="font-semibold text-[25px] text-left">
                            Age:
                        </Label>
                        <Input name="ageInput" id="age" type="number" min={0} className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sex" className="font-semibold text-[25px] text-left">
                            Sex:
                        </Label>
                        <Input name="sexInput" id="sex" type="text" className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="role" className="font-semibold text-[25px] text-left">
                            Role:
                        </Label>
                        <select name="roleInput" id="role" className="ml-24 bg-[#837979] w-[550px] text-white text-[25px]">
                            <option value="">Select Role</option>
                            <option value="Faculty">Faculty</option>
                            <option value="Secretary">Secretary</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category" className="font-semibold text-[25px] text-left">
                            Category:
                        </Label>
                        <select name="catInput" id="category" className="ml-24 bg-[#837979] w-[550px] text-white text-[25px]">
                            <option value="">Select category</option>
                            <option value="Associate Dean">Associate Dean</option>
                            <option value="Secretary">Secretary</option>
                            <option value="Faculty">Faculty</option>
                            <option value="Unit Head">Unit Head</option>
                            <option value="Coordinator">Coordinator</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4 ">
                        <Label htmlFor="specialization" className="font-semibold text-[25px] text-left">
                            Specialization:
                        </Label>
                        <Input name="specInput" id="specialization" type="text" className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="eligibility/professionallicense" className="font-semibold text-[25px] text-left">
                            Eligibity/Professional License:
                        </Label>
                        <Input name="licInput" id="eligibility/professionallicenseeligibility/professionallicense" type="text" className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="employeeNo" className="font-semibold text-[25px] text-left">
                            Employee Number:
                        </Label>
                        <Input name="employeeNoInput" id="employeeNo" type="text" className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="font-semibold text-[25px] text-left">
                            Email:
                        </Label>
                        <Input name="emailInput" id="email" type="email" className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="font-semibold text-[25px] text-left">
                            Password:
                        </Label>
                        <Input name="passInput" id="password" type="password" className="ml-24 bg-[#837979] w-[550px] text-white text-[20px]" />
                    </div>
                </div>
                <div className="flex justify-center gap-4 gap-x-16 mt-20">
                    <Button type="submit" className="bg-[#737373]  text-white text-[20px] w-72 font-bold">CREATE</Button>
                </div>
            </form>
        </>
    )
}
