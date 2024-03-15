"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import ForgotPassword_Dialog from "./New_Components/ForgotPassword_Dialog";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const Login = () => {
  const { toast } = useToast(); // Get the toast function

  /* const loginUser = async (formData) => {
        "use server";
        console.log('hi')
        const email = formData.get("email")
        const password = formData.get("password")
    
        const responseData = await fetch('http://localhost:3000/api/users/sign-in-user',
        {
            method: 'POST'
        })
    } */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted with email:", email);

    try {
      const result = await signIn("credentials", {
        email: email,
        password: password,
        callbackUrl: "/dashboard",
        redirect: false,
      });

      console.log("Sign in result:", result);

      if (result?.status === 401) {
        toast({
          description: "Invalid username or password.",
          type: "error",
          variant: "destructive",
        });
      } else {
        router.push("/dashboard");
        toast({
          description: "Login Successful.",
          type: "success",
          variant: "default",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="bg-[#5B0505] flex h-auto">
      <div className="w-auto h-auto bg-white">
        <img
          className=" w-auto h-auto object-cover"
          alt="CCS Logo Half"
          src="../photos/ccsLogoHalf.png"
          style={{ opacity: "100%" }}
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-white w-screen h-auto py-4 ">
        <div className="bg-white items-center rounded-3xl w-[75%] h-full py-10 mt-5 sm:py-20 shadow-[0_0_15px_15px_rgba(0,_0,_0,_0.65)]">
          <img
            className="-mt-8 ml-[9%] mb-[2%] w-[85%] h-auto object-cover"
            alt="E-Archiving System Maroon"
            src="../photos/E-Archiving System Maroon.png"
          />
          <div className="text-center bg-[#AD5606] w-[100%] h-[9%]">
            <h1 className="text-center text-2xl text-white font-semibold py-2 sm:text-3xl">
              LOGIN
            </h1>
          </div>
          <div className="mx-auto mb-[5%] mt-[7%] bg-white w-[70%] h-[77px] md:md:h-20 border border-black">
            <div className="flex">
              <h1>
                <FaUserAlt
                  className="mt-3 ml-5"
                  size="50"
                  color="#000000"
                  opacity="26%"
                />
              </h1>
              <input
                type="text"
                name="email"
                placeholder="USERNAME"
                className="mt-5 ml-8 text-xl border-none
                            text-black  w-[83%] h-[37px] text-shadow-inner sm:text-2xl"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="mx-auto bg-white w-[70%] h-[77px] md:h-20 border border-slate-300">
            <div className="mt-4 flex">
              <h1>
                <FaLock
                  className="ml-5"
                  size="50"
                  color="#000000"
                  opacity="26%"
                  style={{ top: "675px", left: "870px" }}
                />
              </h1>
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                className=" text-xl border-none text-black w-[83%] h-[37px] text-shadow-inner sm:text-2xl"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <b className="mr-[15%] text-[#5B0505]">
              <ForgotPassword_Dialog />
            </b>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-[7%] bg-[#5B0505] rounded-3xl text-[25px] font-bold text-white text-center inline-block w-[300px] h-[50px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              onClick={handleSubmit}
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
