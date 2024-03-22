import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React from "react";
import Form from "./Form";

async function EditPrivacy_Dialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <b
          className="
          text-center bg-transparent text-white text-lg font-bold h-8 w-36 p-2 m-2 cursor-pointer
          sm:text-center sm:bg-transparent sm:text-white sm:text-lg sm:font-bold sm:h-10 sm:w-44 sm:p-2 sm:m-2 sm:cursor-pointer
          md:text-center md:bg-transparent md:text-white md:text-xl md:font-bold md:h-10 md:w-52 md:p-2 md:m-2 md:cursor-pointer
          lg:text-center lg:bg-transparent lg:text-white lg:text-xl lg:font-bold lg:h-10 lg:w-56 lg:p-1 lg:m-2 lg:cursor-pointer
          xl:text-center xl:bg-transparent xl:text-white xl:text-2xl xl:font-bold xl:h-10 xl:w-60 xl:p-0 xl:cursor-pointer
          2xl:left-[1300px] 2xl:text-center 2xl:bg-transparent 2xl:text-white 2xl:text-2xl 2xl:font-bold 2xl:h-10 2xl:w-64 2xl:p-2 2xl:m-2 2xl:cursor-pointer
          "
        >
          EDIT PRIVACY
        </b>
      </DialogTrigger>
      <DialogContent
        className="
        p-10 max-w-[90%] max-h-[70%] overflow-y-auto rounded-lg bg-slate-50
        sm:p-10 sm:max-w-[80%] sm:max-h-[70%] sm:overflow-y-auto sm:rounded-lg
        md:p-12 md:max-w-[70%] md:max-h-[70%] md:overflow-y-auto md:rounded-lg
        lg:p-14 lg:max-w-[70%] lg:max-h-[70%] lg:overflow-y-auto lg:rounded-lg
        xl:p-16 xl:max-w-[70%] xl:max-h-[70%] xl:overflow-y-auto xl:rounded-lg
        2xl:p-12 2xl:max-w-[50%] 2xl:max-h-[80%] 2xl:overflow-y-auto 2xl:rounded-lg
        "
      >
        <Form />
      </DialogContent>
    </Dialog>
  );
}

export default EditPrivacy_Dialog;
