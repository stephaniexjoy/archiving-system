"use client";
import { createAccount } from "@/app/lib/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import React from "react";

export default function Form({ sessionUser }) {
  const { toast } = useToast();
  return (
    <>
      <form
        action={async (formData) => {
          console.log(formData);

          const create = await createAccount(formData);
          if (create) {
            if (create === "Existing User") {
              toast({
                description: "User already Exist.",

                variant: "default",
              });
            } else {
              toast({
                description: "Successfuly Created an Account.",

                variant: "default",
              });
            }
          }
        }}
      >
        <div
          className="
          grid grid-cols-1 gap-1 py-3 px-0          
          sm:grid sm:grid-cols-1 sm:gap-1 sm:py-3 sm:px-0 
          md:grid md:grid-cols-1 md:gap-1 md:py-3 md:px-0 md:mt-0
          lg:grid lg:grid-cols-2 lg:gap-4 lg:py-3 lg:px-0 lg:mt-0
          xl:grid xl:grid-cols-2 xl:gap-4 xl:py-3 xl:px-0 
          2xl:grid 2xl:grid-cols-2 2xl:gap-4 2xl:py-3 2xl:px-0 

          "
        >
          {[
            { label: "Name", type: "text", id: "name" },
            { label: "age", type: "number", id: "age" },
            { label: "sex", type: "text", id: "sex" },
            {
              label: "Role",
              type: "select",
              id: "role",
              options: ["Select Role", "Faculty", "Secretary", "Admin"],
            },
            {
              label: "Category",
              type: "select",
              id: "cat",
              options: [
                "Select Category",
                "Associate Dean",
                "Secretary",
                "Faculty",
                "Unit Head",
                "Coordinator",
              ],
            },
            { label: "Specialization", type: "text", id: "spec" },
            {
              label: "Eligibility/Professional License",
              type: "text",
              id: "lic",
            },
            { label: "Employee Number", type: "text", id: "employeeNo" },
            { label: "Email", type: "email", id: "email", name: "emailInput" },
            {
              label: "Password",
              type: "password",
              id: "pass",
              name: "passInput",
            },
          ].map((field, index) => (
            <React.Fragment key={index}>
              <Label
                className="
                font-semibold text-[15px] text-left
                sm:font-semibold sm:text-[17px] sm:text-left
                md:font-semibold md:text-[19px] md:text-left
                lg:font-semibold lg:text-[21px] lg:text-left
                xl:font-semibold xl:text-[23px] xl:text-left
                2xl:font-semibold 2xl:text-[25px] 2xl:text-left"
              >
                {field.label}:
              </Label>
              {field.type === "select" ? (
                <select
                  name={`${field.id}Input`}
                  id={field.id}
                  className="
                  ml-0 bg-slate-300 w-[345px] text-black text-[15px]
                  sm:ml-0 sm:bg-slate-300 sm:w-[335px] sm:text-black sm:text-[17px]
                  md:ml-0 md:bg-slate-300 md:w-[375px] md:text-black md:text-[19px]
                  lg:ml-0 lg:bg-slate-300 lg:w-[265px] lg:text-black lg:text-[21px]
                  xl:ml-0 xl:bg-slate-300 xl:w-[330px] xl:text-black xl:text-[23px]
                  2xl:ml-12 2xlbg-slate-300 2xl:w-[370px] 2xl:text-black 2xl:text-[25px]
                  "
                >
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <Input
                  name={`${field.id}Input`}
                  id={field.id}
                  type={field.type}
                  className="
                  ml-0 bg-slate-300 w-[345px] text-black text-[15px]
                  sm:ml-0 sm:bg-slate-300 sm:w-[335px] sm:text-black sm:text-[17px]
                  md:ml-0 md:bg-slate-300 md:w-[375px] md:text-black md:text-[19px]
                  lg:ml-0 lg:bg-slate-300 lg:w-[265px] lg:text-black lg:text-[21px]
                  xl:ml-0 xl:bg-slate-300 xl:w-[330px] xl:text-black xl:text-[23px]
                  2xl:ml-12 2xl:bg-slate-300 2xl:w-[370px] 2xl:text-black 2xl:text-[25px]
                  "
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div
          className="
          flex justify-center gap-4 gap-x-16 mt-4
          sm:flex sm:justify-center sm:gap-4 sm:gap-x-16 sm:mt-4
          md:flex md:justify-center md:gap-4 md:gap-x-16 md:mt-8
          lg:flex lg:justify-center lg:gap-4 lg:gap-x-16 lg:mt-12
          xl:flex xl:justify-center xl:gap-4 xl:gap-x-16 xl:mt-16
          2xl:flex 2xl:justify-center 2xl:gap-4 2xl:gap-x-16 2xl:mt-20
          "
        >
          <Button
            type="submit"
            className="
            bg-[#AD5606] text-white text-[15px] w-32 font-bold
            sm:bg-[#AD5606] sm:text-white sm:text-[17px] sm:w-36 sm:font-bold
            md:bg-[#AD5606] md:text-white md:text-[19px] md:w-48 md:font-bold
            lg:bg-[#AD5606] lg:text-white lg:text-[21px] lg:w-56 lg:font-bold
            xl:bg-[#AD5606] xl:text-white xl:text-[23px] xl:w-64 xl:font-bold
            2xl:bg-[#AD5606] 2xl:text-white 2xl:text-[25px] 2xl:w-72 2xl:font-bold
            "
          >
            CREATE
          </Button>
        </div>
      </form>
    </>
  );
}
