import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const ForgotPassword_Form = () => {
  return (
    <div>
      <form
        action={async (formData) => {
          const email = formData.get("email");
          console.log(email);
        }}
      >
        <label className="block text-center text-gray-600 text-xl mb-2">
          Enter Email:
        </label>
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
