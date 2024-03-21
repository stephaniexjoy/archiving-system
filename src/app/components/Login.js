"use client";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import ForgotPassword_Dialog from "./New_Components/ForgotPassword_Dialog";
import Image from "next/image";

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
          variant: "destructive",
        });
      } else {
        router.push("/dashboard");
        toast({
          description: "Login Successful.",
          variant: "default",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="bg-slate-200 relative flex items-center justify-center flex-row h-auto overflow-hidden">
      <div
        className="
        w-[0%] h-auto
        sm:w-[0%] sm:h-auto
        md:w-[0%] md:h-auto
        lg:w-[0%] lg:h-auto
        xl:w-[50%] xl:h-auto
        2xl:w-[40%] 2xl:h-auto bg-slate-200 rounded-[10%]
        "
      >
        <Image
          className="w-screen h-screen object-cover opacity-100"
          alt="CCS Logo Half"
          src="/photos/ccsLogoHalf.png"
          width={481}
          height={935}
          priority={true}
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-slate-200 w-screen h-auto py-4 ">
        <div
          className="
        bg-white items-center rounded-3xl w-[80%] h-full py-10 mt-5 shadow-[0_0_10px_10px_rgba(0,_0,_0,_0.35)]
        sm:bg-white sm:items-center sm:rounded-xl sm:w-[80%] sm:h-full sm:mt-5 sm:py-10 sm:shadow-[0_0_10px_10px_rgba(0,_0,_0,_0.35)]
        md:bg-white md:items-center md:rounded-xl md:w-[80%] md:h-full md:mt-5 md:py-11 md:shadow-[0_0_10px_10px_rgba(0,_0,_0,_0.35}]
        lg:bg-white lg:items-center lg:rounded-xl lg:w-[80%] lg:h-full lg:mt-5 lg:py-12 lg:shadow-[0_0_10px_10px_rgba(0,_0,_0,_0.35}]
        xl:bg-white xl:items-center xl:rounded-xl xl:w-[80%] xl:h-full xl:mt-5 xl:py-14 xl:shadow-[0_0_10px_10px_rgba(0,_0,_0,_0.35}]
        2xl:bg-white 2xl:items-center 2xl:rounded-xl 2xl:w-[80%] 2xl:h-full 2xl:mt-5 2xl:py-16 2xl:shadow-[0_0_10px_10px_rgba(0,_0,_0,_0.35}]"
        >
          <Image
            className="-mt-8 ml-[9%] mb-[2%] w-[85%] h-auto object-cover"
            alt="E-Archiving System Maroon"
            src="/photos/E-Archiving System Maroon.png"
            width={1000}
            height={256}
          />
          <div
            className="
          text-center bg-[#AD5606] w-[100%] h-[13%]
          sm:text-center sm:bg-[#AD5606] sm:w-[100%] sm:h-[13%]
          md:text-center md:bg-[#AD5606] md:w-[100%] md:h-[13%]
          lg:text-center lg:bg-[#AD5606] lg:w-[100%] lg:h-[11%]
          xl:text-center xl:bg-[#AD5606] xl:w-[100%] xl:h-[10%]
          2xl:text-center 2xl:bg-[#AD5606] 2xl:w-[100%] 2xl:h-[9%]"
          >
            <h1
              className="
            text-center text-2xl text-white font-semibold py-2
            sm:text-center sm:text-3xl sm:text-white sm:font-semibold sm:py-3
            md:text-center md:text-4xl md:text-white md:font-semibold md:py-3
            lg:text-center lg:text-5xl lg:text-white lg:font-semibold lg:py-4
            xl:text-center xl:text-5xl xl:text-white xl:font-semibold xl:py-3 
            2xl:text-center 2xl:text-6xl 2xl:text-white 2xl:font-semibold 2xl:py-2
            "
            >
              LOGIN
            </h1>
          </div>
          <div
            className="
          mx-auto mb-[5%] mt-[7%] bg-white w-[85%] h-[77px] md:md:h-20 border border-black
          sm:mx-auto sm:mb-[5%] sm:mt-[7%] sm:bg-white sm:w-[80%] sm:h-[77px] sm:border-black
          md:mx-auto md:mb-[5%] md:mt-[7%] md:bg-white md:w-[80%] md:h-[80px] md:border-black
          lg:mx-auto lg:mb-[5%] lg:mt-[7%] lg:bg-white lg:w-[80%] lg:h-[83px] lg:border-black
          xl:mx-auto xl:mb-[5%] xl:mt-[7%] xl:bg-white xl:w-[80%] xl:h-[86px] xl:border-black
          2xl:mx-auto 2xl:mb-[5%] 2xl:mt-[7%] 2xl:bg-white 2xl:w-[80%] 2xl:h-[86px] 2xl:border-black"
          >
            <div className="flex">
              <h1>
                <FaUserAlt
                  className="
                mt-6 ml-4 text-50 w-7 h-7 text-black opacity-25
                sm:mt-6 sm:ml-4 sm:text-50 sm:w-7 sm:h-7 sm:text-black sm:opacity-25
                md:mt-6 md:ml-4 md:text-50 md:w-8 md:h-8 md:text-black md:opacity-25
                lg:mt-6 lg:ml-4 lg:text-50 lg:w-8 lg:h-8 lg:text-black lg:opacity-25
                xl:mt-6 xl:ml-4 xl:text-50 xl:w-9 xl:h-9 xl:text-black xl:opacity-25
                2xl:mt-6 2xl:ml-4 2xl:text-50 2xl:w-9 2xl:h-9 2xl:text-black 2xl:opacity-25 
                "
                />
              </h1>
              <input
                type="text"
                name="email"
                placeholder="USERNAME"
                className="
                mt-6 ml-4 text-xl border-none  text-black w-[73%] h-[37px] text-shadow-inner
                sm:mt-6 sm:ml-4 sm:text-xl sm:border-none sm:text-black sm:w-[73%] sm:h-[37px] sm:text-shadow-inner
                md:mt-6 md:ml-8 md:text-2xl md:border-none md:text-black md:w-[73%] md:h-[37px] md:text-shadow-inner
                lg:mt-6 lg:ml-8 lg:text-2xl lg:border-none lg:text-black lg:w-[73%] lg:h-[37px] lg:text-shadow-inner
                xl:mt-6 xl:ml-16 xl:text-3xl xlborder-none xl:text-black xl:w-[73%] xl:h-[37px] xl:text-shadow-inner
                2xl:mt-6 2xl:ml-16 2xl:text-3xl 2xl:border-none 2xl:text-black 2xl:w-[73%] 2xl:h-[37px] 2xl:text-shadow-inner"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div
            className="
          mx-auto bg-white w-[85%] h-[77px] border border-black
          sm:mx-auto sm:bg-white sm:w-[80%] sm:h-[77px] sm:border-black
          md:mx-auto md:bg-white md:w-[80%] md:h-[80px] md:border-black
          lg:mx-auto lg:bg-white lg:w-[80%] lg:h-[83px] lg:border-black
          xl:mx-auto xl:bg-white xl:w-[80%] xl:h-[86px] xl:border-black
          2xl:mx-auto 2xl:bg-white 2xl:w-[80%] 2xl:h-[86px] 2xl:border-black"
          >
            <div className="mt-4 flex">
              <h1>
                <FaLock
                  className="
                mt-3 ml-4 text-50 w-7 h-7 text-black opacity-25
                sm:mt-3 sm:ml-4 sm:text-50 sm:w-7 sm:h-7 sm:text-black sm:opacity-25
                md:mt-3 md:ml-4 md:text-50 md:w-8 md:h-8 md:text-black md:opacity-25
                lg:mt-3 lg:ml-4 lg:text-50 lg:w-8 lg:h-8 lg:text-black lg:opacity-25
                xl:mt-2 xl:ml-4 xl:text-50 xl:w-9 xl:h-9 xl:text-black xl:opacity-25
                2xl:mt-2 2xl:ml-4 2xl:text-50 2xl:w-9 2xl:h-9 2xl:text-black 2xl:opacity-25
                "
                />
              </h1>
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="
                mt-2 ml-4 text-xl border-none  text-black w-[73%] h-[37px] text-shadow-inner
                sm:mt-1 sm:ml-4 sm:text-xl sm:border-none sm:text-black sm:w-[73%] sm:h-[37px] sm:text-shadow-inner
                md:mt-1 md:ml-8 md:text-2xl md:border-none md:text-black md:w-[73%] md:h-[37px] md:text-shadow-inner
                lg:mt-1 lg:ml-8 lg:text-2xl lg:border-none lg:text-black lg:w-[73%] lg:h-[37px] lg:text-shadow-inner
                xl:mt-1 xl:ml-16 xl:text-3xl xlborder-none xl:text-black xl:w-[73%] xl:h-[37px] xl:text-shadow-inner
                2xl:mt-1 2xl:ml-16 2xl:text-3xl 2xl:border-none 2xl:text-black 2xl:w-[73%] 2xl:h-[37px] 2xl:text-shadow-inner"
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
              mt-[17%] bg-[#5B0505] rounded-3xl text-[20px] font-bold text-white text-center inline-block w-[160px] h-[40px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]
              sm:mt-[15%] sm:bg-[#5B0505] sm:rounded-3xl sm:text-[20px] sm:font-bold sm:text-white sm:text-center sm:inline-block sm:w-[180px] sm:h-[40px] sm:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]
              md:mt-[13%] md:bg-[#5B0505] md:rounded-3xl md:text-[20px] md:font-bold md:text-white md:text-center md:inline-block md:w-[200px] md:h-[45px] md:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]
              lg:mt-[11%] lg:bg-[#5B0505] lg:rounded-3xl lg:text-[20px] lg:font-bold lg:text-white lg:text-center lg:inline-block lg:w-[220px] lg:h-[50px] lg:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]
              xl:mt-[20%] xl:bg-[#5B0505] xl:rounded-3xl xl:text-[20px] xl:font-bold xl:text-white xl:text-center xl:inline-block xl:w-[240px] xl:h-[55px] xl:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]
              2xl:mt-[7%] 2xl:bg-[#5B0505] 2xl:rounded-3xl 2xl:text-[20px] 2xl:font-bold 2xl:text-white 2xl:text-center 2xl:inline-block 2xl:w-[260px] 2xl:h-[60px] 2xl:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
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
