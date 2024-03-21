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
              router.push("/");
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
        <label className="block mb-2">Your New Password</label>
        <input
          className="block w-full px-3 py-2 border rounded mb-4"
          name="password"
          type="password"
          placeholder="New Password"
        />

        <label className="block mb-2">Confirm your New Password</label>
        <input
          className="block w-full px-3 py-2 border rounded"
          name="con_password"
          type="password"
          placeholder="Confirm New Password"
        />
        <div className="flex justify-center">
          <Button
            className="py-3 px-6  text-white rounded-lg mb-4 mt-5"
            type="submit"
          >
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
