"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { db } from "@/app/lib/prisma_db"
import { useToast } from "@/components/ui/use-toast"
import { addFilter } from "@/app/lib/actions/actions"

export default function Form({ category }) {
    const { toast } = useToast()
    return (
        <>
            <form action={async formData => {


                const isAdded_Material = await addFilter(formData, category)
                if (isAdded_Material) {

                    if (isAdded_Material === "existingData") {
                        toast({

                            description: "Filter is already listed.",
                            
                            variant: "default",

                        })
                    }
                    else {
                        toast({

                            description: "You have successfully added a new Filter (Material/Course).",
                          
                            variant: "default",

                        })
                    }

                    console.log("Wieee: ", isAdded_Material)
                }




            }}>

                <div className="flex flex-col justify-center w-full max-w-md items-center space-x-2 ">
                    <Input name="categoryInput" type="text" placeholder="Enter new Material" className="font-semibold text-black border border-black mt-4" />
                    <Button type="submit" className="mt-8 bg-[#8F8F8F] px-5 font-bold">ADD CATEGORY  </Button>
                </div>
            </form>
        </>
    )
}
