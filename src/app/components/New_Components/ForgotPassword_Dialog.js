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
import { Button } from "@/components/ui/button";

import { addCategory } from "next-auth/react";

import React from "react";
import ForgotPassword_Form from "./Forgot_Password/ForgotPassword_Form";

export default function ForgotPassword_Dialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <b className="border-none ml-96 mt-2 text-2xl w-auto [text-decoration:underline] inline-block text-[#FF7E7E] cursor-pointer">
          Forgot Password?
        </b>
      </DialogTrigger>
      <DialogContent className="w-full p-8">
        <DialogHeader className="space-y-6">
          <DialogTitle className="text-2xl text-[#444242] dark:text-white text-center">
            PASSWORD REQUEST
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-center w-full max-w-md items-center space-x-2 p-6">
          <ForgotPassword_Form />
        </div>
      </DialogContent>
    </Dialog>
  );
}
