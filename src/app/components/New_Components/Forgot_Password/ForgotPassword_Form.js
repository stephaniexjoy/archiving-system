import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { forgotPassword } from "@/app/lib/actions/actions";
import { useToast } from "@/components/ui/use-toast";
const ForgotPassword_Form = () => {
  const { toast } = useToast();

  return (
    <div>
      <form
        action={async (formData) => {
          const email = formData.get("email");
          console.log(email);
          const getUserEmail = await forgotPassword(email);
          console.log(getUserEmail);

          if (getUserEmail === "Error" || getUserEmail === null) {
            toast({
              title: "Error",
              description: "Invalid Email / User Not found.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Reset Password Successfully Sent.",
              description: "Please check your email.",
              variant: "default",
            });
          }
        }}
      >
        <Label className="block text-center text-gray-600 text-xl mb-2">
          Enter Email:
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email here"
          className="w-full text-white bg-[#B5B5B5] border border-black mt-2 text-lg"
          required
        />
        <div className="flex justify-center gap-4 mt-10">
          <Button type="submit" className="bg-[#737373] w-36 font-bold">
            REQUEST
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword_Form;
