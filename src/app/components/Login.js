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
                className="-mt-7 ml-96 mb-10 w-[918px] h-[250px] object-cover"
                alt=""
                src="../photos/E-Archiving System.png"
            />
            <img
                className="absolute top-[0] left-[-10px] w-[1100px] h-[1100px] object-cover"
                alt=""
                src="../photos/ccs.png"
                style={{ marginLeft: "-550px", opacity: '80%' }}
            />
            <div className="absolute -top-2 left-[-10px] w-[1110px] h-[1110px] rounded-[50%] bg-[#DABB9C] shadow-[30px_0px_30px_rgba(0,_0,_0,_0.35)]"
                style={{ marginLeft: "-550px", opacity: '70%' }} />

            <div className="flex flex-auto flex-col columns-1 bg-[#AD5606] w-screen h-[600px] place-items-center">
                <div className="ml-96 mb-20 mt-20 bg-white w-[600px] h-[77px] md:md:h-20">
                    <div className='flex'>
                        <h1 ><FaUserAlt className="mt-3 ml-5" size='50' color='#000000' opacity='26%' /></h1>
                        <input type="text" name='email' placeholder="USERNAME" className="mt-5 ml-8 text-3xl border-none
                    text-[#A89F9F] inline-block w-[450px] h-[37px] text-shadow-inner"
                    onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                </div>

                <div className="ml-96 bg-white w-[600px] h-[77px] md:h-20">
                    <div className='mt-4 flex'>
                        <h1 ><FaLock className="mt-0 ml-5" size='50' color='#000000' opacity='26%' style={{ top: '675px', left: '870px' }} /></h1>
                        <input type="password" name='password' placeholder="PASSWORD" className="mt-2 ml-8 text-3xl border-none text-[#A89F9F] inline-block w-[450px] h-[37px] text-shadow-inner"
                    onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                </div>

                <b>
                    <ForgotPassword />
                </b>
                <div className='flex justify-center'>
                    <button type='submit' className="ml-96 mt-4 bg-[#D9D9D9] text-[20px] font-bold text-black text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
                        onClick={handleSubmit}>LOGIN</button>
                </div>

            </div>


            <div
                className=" top-[797px] left-[921px] bg-gainsboro w-[247px] h-12 cursor-pointer"

            />





        </div>

    )
}

export default Login