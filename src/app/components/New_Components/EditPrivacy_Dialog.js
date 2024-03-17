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

async function EditPrivacy_Dialog() {
  const updateUser = async (formData) => {
    "use server";

    const email = formData.get("emailUpd");
    const currentPassword = formData.get("currentPass");
    const newPassword = formData.get("newPass");
    const confirmPassword = formData.get("newPassConfirm");
    const passCheck = await bcrypt.compare(currentPassword, user.password);
    console.log(email, currentPassword, newPassword, confirmPassword);

    if (user && passCheck) {
      if (newPassword === confirmPassword) {
        const hashedPassword = await bcrypt.hash(newPassword, 12);

        const updPrivacy = await db.user.update({
          where: { id: user.id },
          data: {
            email: email,
            password: hashedPassword,
          },
        });
      }
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <b
          className="
          text-center bg-transparent text-white text-lg font-bold h-10 w-36 p-2 m-2 cursor-pointer
          sm:text-center sm:bg-transparent sm:text-white sm:text-lg sm:font-bold sm:h-10 sm:w-44 sm:p-2 sm:m-2 sm:cursor-pointer
          md:text-center md:bg-transparent md:text-white md:text-lg md:font-bold md:h-10 md:w-52 md:p-2 md:m-2 md:cursor-pointer
          lg:text-center lg:bg-transparent lg:text-white lg:text-xl lg:font-bold lg:h-10 lg:w-56 lg:p-2 lg:m-2 lg:cursor-pointer
          xl:text-center xl:bg-transparent xl:text-white xl:text-2xl xl:font-bold xl:h-10 xl:w-60 xl:p-2 xl:m-2 xl:cursor-pointer
          2xl:left-[1300px] 2xl:text-center 2xl:bg-transparent 2xl:text-white 2xl:text-2xl 2xl:font-bold 2xl:h-10 2xl:w-64 2xl:p-2 2xl:m-2 2xl:cursor-pointer
          "
        >
          EDIT PRIVACY
        </b>
      </DialogTrigger>
      <DialogContent className="p-16 md:max-w-[1000px]">
        <form>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="name"
                className="font-semibold text-[25px] text-left"
              >
                Email:
              </Label>
              <Input
                id="email"
                name="emailUpd"
                type="text"
                className="bg-[#837979] text-white text-[20px] col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="employeeNo"
                className="font-semibold text-[25px] text-left"
              >
                Current Password:
              </Label>
              <Input
                id="currentPassword"
                name="currentPass"
                type="password"
                className="bg-[#837979] text-white text-[20px] col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="department"
                className="font-semibold text-[25px] text-left"
              >
                New Password:
              </Label>
              <Input
                id="newPassword"
                name="newPass"
                type="password"
                className="bg-[#837979] text-white text-[20px] col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="designation"
                className="font-semibold text-[25px] text-left"
              >
                Confirm Password:
              </Label>
              <Input
                id="confirmPassword"
                name="newPassConfirm"
                type="password"
                className="bg-[#837979] text-white text-[20px] col-span-3"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Button
              type="submit"
              className="bg-[#8F8F8F] text-white text-[20px] w-[300px]"
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditPrivacy_Dialog;
