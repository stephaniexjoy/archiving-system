"use client";
import { editProfile_Secretary } from "@/app/lib/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import React from "react";

export default function Form({ user }) {
  const { toast } = useToast();
  const { data: session, status, update } = useSession();

  const url =
    "https://files.edgestore.dev/kovz7t43lyztl989/publicImages/_public/5f9be7e5-b3fd-475f-86ce-eeb481696847.png";

  // Split the URL by '/' to get an array of segments
  const segments = url.split("/");

  // The last segment contains the file name
  const fileName = segments[segments.length - 1];
  console.log();

  return (
    <>
      <form
        action={async (formData) => {
          const updateData = await editProfile_Secretary(formData);
          if (updateData === "Images only supports (jpg,jpeg,png)") {
            toast({
              title: "Error Updating Profile",
              description: `${updateData}.`,
              variant: "destructive",
            });
          } else if (updateData.message === "Successful") {
            if (session) {
              await update({
                ...session,
                user: {
                  ...session.user,
                  picture: updateData.user.profile_photo_path,
                },
              });
            }
            toast({
              title: "Success",
              description: `${updateData.message}ly Updated Data.`,
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
            {
              label: "Profile Photo",
              id: "picture",
              type: "file",
            },
            {
              label: "Name",
              id: "name",
              type: "text",
              value: user.name ? user.name : "",
            },
            {
              label: "Age",
              id: "age",
              type: "text",
              value: user.age ? user.age : "",
            },
            {
              label: "Sex",
              id: "sex",
              type: "text",
              value: user.sex ? user.sex : "",
            },
            {
              label: "Designation",
              id: "designation",
              type: "text",
              value: user.designation ? user.designation : "",
            },
            /*  { label: "Employee No", id: "employeeNo", type: "text" }, */
            /*  { label: "Department", id: "department", type: "text" }, */
            /*  { label: "Institutional Email", id: "email", type: "text" }, */
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
                {field.label}:
              </Label>
              <Input
                name={`${field.id}Input`}
                id={field.id}
                type={field.type}
                defaultValue={field.value}
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
    </>
  );
}
