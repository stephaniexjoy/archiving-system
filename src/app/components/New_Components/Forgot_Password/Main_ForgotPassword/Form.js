"use client";
import { useToast } from "@/components/ui/use-toast";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { getUpdatedPassword } from "@/app/lib/actions/actions";
import { useRouter } from "next/navigation";

const Form = ({ userInfo }) => {
  const { toast } = useToast();
  const router = useRouter();

  return (
    <div>
      <form
        action={async (formData) => {
          const password = formData.get("password");
          const con_password = formData.get("con_password");

          if (password === con_password) {
            console.log("match");
            const setNewPassword = await getUpdatedPassword(password, userInfo);
            console.log(setNewPassword);
            if (setNewPassword) {
              toast({
                title: "Reset Password",
                description: "Successfully Updated Password",
              });
              router.push("/")
            } else {
              toast({
                title: "Reset Password",
                description: "Something Went Wrong. Please Try Again.",
                variant: "destructive",
              });
            }
          } else {
            toast({
              title: "Reset Password",
              description: "Password doesn't match.",
              variant: "destructive",
            });
          }
        }}
      >
        <Label>Your New Password</Label>
        <Input name="password" type="password" placeholder="New Password" />

        <Label className>Confirm your New Password</Label>
        <Input
          name="con_password"
          type="password"
          placeholder="Confirm New Password"
        />
        <Button className="flex justify-center items-center m-auto mt-8 mb-2 py-4 px-6" type="submit">Update Password</Button>
      </form>
    </div>
  );
};

export default Form;
