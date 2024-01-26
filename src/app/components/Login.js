"use client"
import { signIn } from 'next-auth/react';
import React, { useState } from 'react'
import { useCallback } from "react";
import { FaLock } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import ForgotPassword from './Modal/ForgotPassword';

const Login = () => {

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email,password)
        const result = await signIn('credentials', {
            email: email,
            password: password,


            callbackUrl: '/dashboard'
        })
    }

    return (
        <div className='flex flex-auto flex-col columns-1 place-items-center mx-0'>
            <img
                className="absolute top-[0] left-[0] w-[30%] h-[100%] object-cover" alt="CCS Logo Half" src="../photos/ccsLogoHalf.png" style={{ opacity: '100%' }}
            />
            <div className="flex flex-col items-center justify-center bg-white w-screen h-[74vh] mt-[7%]">
                <div className="bg-white items-center p-0 rounded-3xl w-[50%] h-[120%] ml-[26%] shadow-[0_0_15px_15px_rgba(0,_0,_0,_0.65)]">
                    <h1 className="ml-[38%] mt-[8%] text-black text-4xl">WELCOME TO</h1>
                    <img
                        className="mt-0 ml-[10%] mb-[5%] w-[85%] h-[20%] object-cover" alt="E-Archiving System Maroon" src="../photos/E-Archiving System Maroon.png"
                    />
                    <img
                        className="w-[100%] h-[8%] object-cover" alt="Login Logo Orange" src="../photos/loginLogoOrange.jpg"
                    />
                    <div className="ml-[18%] mb-[5%] mt-[7%] bg-white w-[65%] h-[77px] md:md:h-20 border border-black">
                        <div className='flex'>
                            <h1 ><FaUserAlt className="mt-3 ml-5" size='50' color='#000000' opacity='26%' /></h1>
                            <input type="text" name='email' placeholder="USERNAME" className="mt-5 ml-8 text-3xl border-none
                        text-black inline-block w-[80%] h-[37px] text-shadow-inner"
                        onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                    </div>

                    <div className="ml-[18%] bg-white w-[65%] h-[77px] md:h-20 border border-black">
                        <div className='mt-4 flex'>
                            <h1 ><FaLock className="mt-0 ml-5" size='50' color='#000000' opacity='26%' style={{ top: '675px', left: '870px' }} /></h1>
                            <input type="password" name='password' placeholder="PASSWORD" className="mt-2 ml-8 text-3xl border-none text-black inline-block w-[80%] h-[37px] text-shadow-inner"
                        onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <b className="mr-[15%] text-[#5B0505]">
                            <ForgotPassword />
                        </b>
                    </div>

                    <div className='flex justify-center'>
                        <button type='submit' className="mt-[5%] mb-10 bg-[#5B0505] rounded-3xl text-[20px] font-bold text-white text-center inline-block w-[247px] h-[43px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
                            onClick={handleSubmit}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
