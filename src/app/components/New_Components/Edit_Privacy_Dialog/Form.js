"use client";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { userUpdateUser } from "@/app/lib/actions/actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Form() {
  const { toast } = useToast();

  return (
    <form
      action={async (formData) => {
        const isUpdated = await userUpdateUser(formData);
        console.log(isUpdated);
        if (isUpdated === "No Email Found") {
          toast({
            title: "Error Updating Profile",
            description: `${isUpdated}`,
            variant: "destructive",
          });
        } else if (isUpdated === "Password Mismatch") {
          toast({
            title: "Error Updating Profile",
            description: `${isUpdated}`,
            variant: "destructive",
          });
        } else if (isUpdated === "New Password and Confirm Password Mismatch") {
          toast({
            title: "Error Updating Profile",
            description: `${isUpdated}`,
            variant: "destructive",
          });
        } else if (isUpdated === "Successfully Updated Privacy") {
          toast({
            title: "Success",
            description: `${isUpdated}`,
            variant: "default",
          });
        }
      }}
    >
      <div
        className="
    grid gap-2 py-8 grid-cols-1
    sm:grid sm:gap-2 sm:py-8 sm:grid-cols-1
    md:grid md:gap-4 md:py-8 md:grid-cols-2
    lg:grid lg:gap-5 lg:py-8 lg:grid-cols-2
    xl:grid xl:gap-5 xl:py-8 xl:grid-cols-2
    2xl:grid 2xl:gap-6 2xl:py-8 2xl:grid-cols-2
    "
      >
        {[
          { label: "Email:", id: "email", type: "text", name: "emailUpd" },
          {
            label: "Current Password:",
            id: "currentPassword",
            type: "password",
            name: "currentPass",
          },
          {
            label: "New Password:",
            id: "newPassword",
            type: "password",
            name: "newPass",
          },
          {
            label: "Confirm Password:",
            id: "confirmPassword",
            type: "password",
            name: "newPassConfirm",
          },
        ].map((field, index) => (
          <React.Fragment key={index}>
            <Label
              htmlFor={field.id}
              className="
          font-semibold text-[15px] text-left
          sm:font-semibold sm:text-[17px] sm:text-left
          md:font-semibold md:text-[19px] md:text-left
          lg:font-semibold lg:text-[21px] lg:text-left
          xl:font-semibold xl:text-[23px] xl:text-left
          2xl:font-semibold 2xl:text-[25px] 2xl:ext-left
          "
            >
              {field.label}
            </Label>
            <Input
              id={field.id}
              name={field.name}
              type={field.type}
              className="
          bg-slate-300 text-black text-[15px]
          sm:bg-slate-300 sm:text-black sm:text-[17px]
          md:bg-slate-300 md:text-black md:text-[19px]
          lg:bg-slate-300 lg:text-black lg:text-[21px]
          xl:bg-slate-300 xl:text-black xl:text-[23px]
          2xl:bg-slate-300 2xl:text-black 2xl:text-[25px]
          "
            />
          </React.Fragment>
        ))}
      </div>
      <div
        className="
    mt-12 flex justify-center
    sm:mt-12 sm:flex sm:justify-center
    md:mt-14 md:flex md:justify-center
    lg:mt-14 lg:flex lg:justify-center
    xl:mt-16 xl:flex xl:justify-center
    2xl:mt-16 2xl:flex 2xl:justify-center
    "
      >
        <Button
          type="submit"
          className="
      bg-[#AD5606] text-white text-[15px] w-[200px]
      sm:bg-[#AD5606] sm:text-white sm:text-[17px] sm:w-[220px]
      md:bg-[#AD5606] md:text-white md:text-[19px] md:w-[250px]
      lg:bg-[#AD5606] lg:text-white lg:text-[21px] lg:w-[260px]
      xl:bg-[#AD5606] xl:text-white xl:text-[23px] xl:w-[265px]
      2xl:bg-[#AD5606] 2xl:text-white 2xl:text-[25px] 2xl:w-[270px]
      "
        >
          Save
        </Button>
      </div>
    </form>
  );
}
