import React from 'react'
import { useCallback } from "react";
import { FaLock } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {


    return (
        <div className='container mx-auto'>
            <div className="absolute top-[415px] left-[1px] bg-[#AD5606] [backdrop-filter:blur(4px)] w-[1200px] h-[532px]">

            </div>
            <div className="absolute top-[512px] left-[788px] bg-white w-[514px] h-[77px]" />
            <div className="absolute top-[661px] left-[788px] bg-white w-[514px] h-[77px]" />
            <div className="absolute top-[0px] left-[-550px] rounded-[50%] bg-[#DABB9C] shadow-[30px_0px_30px_rgba(0,_0,_0,_0.35)] w-[1130px] h-[1135px] [transform:_rotate(-0.3deg)] [transform-origin:0_0]" />
            <div
                className="absolute top-[797px] left-[921px] bg-gainsboro w-[247px] h-12 cursor-pointer"

            />

            <b className="absolute top-[860px] left-[903px] inline-block text-white w-[304px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                Doesn’t have an account?
            </b>
            <b
                className="absolute top-[860px] left-[1115px] [text-decoration:underline] inline-block text-royalblue text-right w-[71px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer"

            >
                Sign Up
            </b>
            <b
                className="absolute top-[742px] left-[893px] text-[21px] [text-decoration:underline] inline-block text-[#FF7E7E] text-center w-[304px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer"

            >
                Forgot Password?
            </b>

            <div className='flex justify-center'>
                <h1 ><FaUserAlt size='50' color='#000000' opacity='26%' style={{ position: 'absolute', top: '525px', left: '800px' }} /></h1>
                <input type="text" name='email' placeholder="USERNAME" className="absolute top-[531px] left-[865px] text-3xl text-[#A89F9F] inline-block w-[300px] h-[37px] text-shadow-inner" />
            </div>
            <div className=''>
                <h1 ><FaLock size='50' color='#000000' opacity='26%' style={{ position: 'absolute', top: '675px', left: '800px' }} /></h1>
                <input type="password" name='password' placeholder="PASSWORD" className="absolute top-[680px] left-[865px] text-3xl text-[#A89F9F] inline-block w-[300px] h-[37px] text-shadow-inner" />
                <h1 ><IoMdEyeOff size='50' color='black' style={{ position: 'absolute', top: '675px', right: '500px' }} /></h1>

            </div>
            <div className='flex justify-center'>
                <button type='submit' className="absolute top-[807px] left-[921px] bg-[#D9D9D9] text-[20px] text-black text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">LOGIN</button>
            </div>

            <img
                className="absolute top-[5px] left-[0px] w-[1120px] h-[1120px] object-cover"
                alt=""
                src="../photos/ccs.png"
                style={{ marginLeft: "-550px", opacity: '20%' }}
            />
            <img
                className="absolute top-[110px] left-[35%] w-[918px] h-[215px] object-cover"
                alt=""
                src="../photos/E-Archiving System.png"
            />
        </div>

    )
}

export default Login