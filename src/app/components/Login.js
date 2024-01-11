import React from 'react'
import { useCallback } from "react";
import { FaLock } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {


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
            style={{ marginLeft: "-550px", opacity: '70%' }}/>

            <div className="flex flex-auto flex-col columns-1 bg-[#AD5606] w-screen h-[600px] place-items-center">
                <div className="ml-96 mb-20 mt-20 bg-white w-[600px] h-[77px] md:md:h-20">
                    <div className='flex justify-center'>
                        <h1 ><FaUserAlt className="mt-3 -ml-20" size='50' color='#000000' opacity='26%'/></h1>
                        <input type="text" name='email' placeholder="USERNAME" className="mt-5 text-3xl 
                    text-[#A89F9F] inline-block w-[400px] h-[37px] text-shadow-inner" />
                    </div>
                </div>

                <div className="ml-96 bg-white w-[600px] h-[77px] md:h-20">
                    <div className='mt-4 flex justify-center'>
                        <h1 ><FaLock className="mt-0 -ml-5" size='50' color='#000000' opacity='26%' style={{ top: '675px', left: '870px' }} /></h1>
                        <input type="password" name='password' placeholder="PASSWORD" className="mt-2 ml-8 text-3xl 
                    text-[#A89F9F] inline-block w-[400px] h-[37px] text-shadow-inner" />
                        <h1 ><IoMdEyeOff className="ml-1" size='50' color='black' /></h1>
                    </div>
                </div>

                <b
                    className="ml-96 mt-5 text-[21px] [text-decoration:underline] inline-block text-[#FF7E7E] text-center w-[304px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer"
                >
                    Forgot Password?
                </b>
                <div className='flex justify-center'>
                    <button type='submit' className="ml-96 mt-4 bg-[#D9D9D9] text-[20px] font-bold text-black text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">LOGIN</button>
                </div>

            </div>

            
            <div
                className=" top-[797px] left-[921px] bg-gainsboro w-[247px] h-12 cursor-pointer"

            />





        </div>

    )
}

export default Login