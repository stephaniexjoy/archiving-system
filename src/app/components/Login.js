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
      <div
        className="
      sm:w-[0%] sm:h-auto sm:bg-white
      md:w-[0%] md:h-auto md:bg-white
      lg:w-[0%] lg:h-auto lg:bg-white
      xl:w-[0%] xl:h-auto xl:bg-white
      2xl:w-[40%] 2xl:h-auto 2xl:bg-white"
      >
        <img
          className="w-auto h-auto object-cover opacity-100"
          alt="CCS Logo Half"
          src="../photos/ccsLogoHalf.png"
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-white w-screen h-auto py-4 ">
        <div
          className="
        bg-white items-center rounded-3xl w-[80%] h-full py-10 mt-5 shadow-[0_0_15px_15px_rgba(0,_0,_0,_0.65)]
        sm:bg-white sm:items-center sm:rounded-xl sm:w-[80%] sm:h-full sm:mt-5 sm:py-20 sm:shadow-[0_0_10px_10px_rgba(0,_0,_0,_0.35)]
        md:bg-white md:items-center md:rounded-xl md:w-[80%] md:h-full md:mt-5 md:py-20 md:shadow-[0_0_10px_10px_rgba(0,_0,_0,_0.35}]
        lg:bg-white lg:items-center lg:rounded-xl lg:w-[80%] lg:h-full lg:mt-5 lg:py-20 lg:shadow-[0_0_10px_10px_rgba(0,_0,_0,_0.35}]
        xl:bg-white xl:items-center xl:rounded-xl xl:w-[80%] xl:h-full xl:mt-5 xl:py-20 xl:shadow-[0_0_10px_10px_rgba(0,_0,_0,_0.35}]
        2xl:bg-white 2xl:items-center 2xl:rounded-xl 2xl:w-[80%] 2xl:h-full 2xl:mt-5 2xl:py-20 2xl:shadow-[0_0_10px_10px_rgba(0,_0,_0,_0.35}]"
        >
          <img
            className="-mt-8 ml-[9%] mb-[2%] w-[85%] h-auto object-cover"
            alt="E-Archiving System Maroon"
            src="../photos/E-Archiving System Maroon.png"
          />
          <div className="text-center bg-[#AD5606] w-[100%] h-[9%]">
            <h1
              className="
            text-center text-2xl text-white font-semibold py-2
            sm:text-center sm:text-xl sm:text-white sm:font-semibold sm:py-2
            md:text-center md:text-2xl md:text-white md:font-semibold md:py-2
            lg:text-center lg:text-3xl lg:text-white lg:font-semibold lg:py-2
            xl:text-center xl:text-4xl xl:text-white xl:font-semibold xl:py-2
            2xl:text-center 2xl:text-4xl 2xl:text-white 2xl:font-semibold 2xl:py-2
            "
            >
              LOGIN
            </h1>
          </div>
          <div
            className="
          mx-auto mb-[5%] mt-[7%] bg-white w-[70%] h-[77px] md:md:h-20 border border-black
          sm:mx-auto sm:mb-[5%] sm:mt-[7%] sm:bg-white sm:w-[80%] sm:h-[77px] sm:border-black
          md:mx-auto md:mb-[5%] md:mt-[7%] md:bg-white md:w-[80%] md:h-[80px] md:border-black
          lg:mx-auto lg:mb-[5%] lg:mt-[7%] lg:bg-white lg:w-[80%] lg:h-[83px] lg:border-black
          xl:mx-auto xl:mb-[5%] xl:mt-[7%] xl:bg-white xl:w-[80%] xl:h-[86px] xl:border-black
          2xl:mx-auto 2xl:mb-[5%] 2xl:mt-[7%] 2xl:bg-white 2xl:w-[80%] 2xl:h-[86px] 2xl:border-black"
          >
            <div className="flex">
              <h1>
                <FaUserAlt className="mt-4 ml-5 text-50 w-10 h-10 text-black opacity-25" />
              </h1>
              <input
                type="text"
                name="email"
                placeholder="USERNAME"
                className="
                mt-5 ml-8 text-xl border-none text-black w-[83%] h-[37px] text-shadow-inner 
                sm:mt-5 sm:ml-8 sm:text-md sm:border-none sm:text-black sm:w-[80%] sm:h-[37px] sm:text-shadow-inner
                md:mt-5 md:ml-8 md:text-md md:border-none md:text-black md:w-[80%] md:h-[37px] md:text-shadow-inner
                lg:mt-5 lg:ml-8 lg:text-md lg:border-none lg:text-black lg:w-[80%] lg:h-[37px] lg:text-shadow-inner
                xl:mt-5 xl:ml-8 xl:text-md xl:border-none xl:text-black xl:w-[80%] xl:h-[37px] xl:text-shadow-inner
                2xl:mt-5 2xl:ml-8 2xl:text-md 2xl:border-none 2xl:text-black 2xl:w-[80%] 2xl:h-[37px] 2xl:text-shadow-inner"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div
            className="
          mx-auto bg-white w-[70%] h-[77px] border border-slate-300
          sm:mx-auto sm:bg-white sm:w-[80%] sm:h-[77px] sm:border-slate-300
          md:mx-auto md:bg-white md:w-[80%] md:h-[80px] md:border-slate-300
          lg:mx-auto lg:bg-white lg:w-[80%] lg:h-[83px] lg:border-slate-300
          xl:mx-auto xl:bg-white xl:w-[80%] xl:h-[86px] xl:border-slate-300
          2xl:mx-auto 2xl:bg-white 2xl:w-[80%] 2xl:h-[86px] 2xl:border-slate-300"
          >
            <div className="mt-4 flex">
              <h1>
                <FaLock className="ml-5 text-50 w-10 h-10 text-black opacity-25" />
              </h1>
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="
                text-xl border-none text-black w-[83%] h-[37px] text-shadow-inner
                sm:mt-1 sm:ml-8 sm:text-md sm:border-none sm:text-black sm:w-[73%] sm:h-[37px] sm:text-shadow-inner
                md:mt-1 md:ml-8 md:text-md md:border-none md:text-black md:w-[73%] md:h-[37px] md:text-shadow-inner
                lg:mt-1 lg:ml-8 lg:text-md lg:border-none lg:text-black lg:w-[73%] lg:h-[37px] lg:text-shadow-inner
                xl:mt-1 xl:ml-8 xl:text-md xlborder-none xl:text-black xl:w-[73%] xl:h-[37px] xl:text-shadow-inner
                2xl:mt-1 2xl:ml-8 2xl:text-md 2xlborder-none 2xl:text-black 2xl:w-[73%] 2xl:h-[37px] 2xl:text-shadow-inner"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <ForgotPassword_Dialog />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="
              mt-[7%] bg-[#5B0505] rounded-3xl text-[25px] font-bold text-white text-center inline-block w-[300px] h-[50px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]
              sm:mt-[7%] sm:bg-[#5B0505] sm:rounded-3xl sm:text-[20px] sm:font-bold sm:text-white sm:text-center sm:inline-block sm:w-[180px] sm:h-[40px] sm:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]
              md:mt-[7%] md:bg-[#5B0505] md:rounded-3xl md:text-[20px] md:font-bold md:text-white md:text-center md:inline-block md:w-[200px] md:h-[45px] md:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]
              lg:mt-[7%] lg:bg-[#5B0505] lg:rounded-3xl lg:text-[20px] lg:font-bold lg:text-white lg:text-center lg:inline-block lg:w-[220px] lg:h-[50px] lg:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]
              xl:mt-[7%] xl:bg-[#5B0505] xl:rounded-3xl xl:text-[20px] xl:font-bold xl:text-white xl:text-center xl:inline-block xl:w-[240px] xl:h-[55px] xl:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]
              2xl:mt-[7%] 2xl:bg-[#5B0505] 2xl:rounded-3xl 2xl:text-[20px] 2xl:font-bold 2xl:text-white 2xl:text-center 2xl:inline-block 2xl:w-[240px] 2xl:h-[55px] 2xl:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
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
