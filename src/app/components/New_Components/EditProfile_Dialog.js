import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React from "react";

function EditProfile_Dialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <b
          className="
          text-center bg-transparent text-white text-lg font-bold h-8 w-36 p-2 m-2 cursor-pointer
          sm:text-center sm:bg-transparent sm:text-white sm:text-lg sm:font-bold sm:h-10 sm:w-44 sm:p-2 sm:m-2 sm:cursor-pointer
          md:text-center md:bg-transparent md:text-white md:text-lg md:font-bold md:h-10 md:w-52 md:p-2 md:m-2 md:cursor-pointer
          lg:text-center lg:bg-transparent lg:text-white lg:text-xl lg:font-bold lg:h-10 lg:w-56 lg:p-2 lg:m-2 lg:cursor-pointer
          xl:text-center xl:bg-transparent xl:text-white xl:text-2xl xl:font-bold xl:h-10 xl:w-60 xl:p-2 xl:m-2 xl:cursor-pointer
          2xl:text-center 2xl:bg-transparent 2xl:text-white 2xl:text-2xl 2xl:font-bold 2xl:h-10 2xl:w-64 2xl:p-2 2xl:m-2 2xl:cursor-pointer
          "
        >
          EDIT PROFILE
        </b>
      </DialogTrigger>
      <DialogContent
        className="
        p-10 max-w-[90%] max-h-[70%] overflow-y-auto rounded-lg bg-slate-50
        sm:p-10 sm:max-w-[80%] sm:max-h-[70%] sm:overflow-y-auto sm:rounded-lg
        md:p-12 md:max-w-[70%] md:max-h-[70%] md:overflow-y-auto md:rounded-lg
        lg:p-14 lg:max-w-[70%] lg:max-h-[70%] lg:overflow-y-auto lg:rounded-lg
        xl:p-16 xl:max-w-[70%] xl:max-h-[70%] xl:overflow-y-auto xl:rounded-lg
        2xl:p-16 2xl:max-w-[50%] 2xl:max-h-[80%] 2xl:overflow-y-auto 2xl:rounded-lg 
        "
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
            { label: "Profile Photo", id: "picture", type: "file" },
            { label: "Name", id: "name", type: "text" },
            { label: "Age", id: "age", type: "text" },
            { label: "Sex", id: "sex", type: "text" },
            { label: "Employee No", id: "employeeNo", type: "text" },
            { label: "Department", id: "department", type: "text" },
            { label: "Designation", id: "designation", type: "text" },
            { label: "Institutional Email", id: "email", type: "text" },
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
                id={field.id}
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
      </DialogContent>
    </Dialog>
  );
}

export default EditProfile_Dialog;
