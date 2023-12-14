"use client"
import React from 'react'
import Link from 'next/link';
//import { useRouter } from 'next/router';
//import { useSession, signOut } from 'next-auth/react';
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";



const Sidebar = () => {

    return (
        <aside className="absolute bg-[#D9D9D9] text-black w-64 h-[925px] top-0 left-0 z-40">
            <nav>
                <div className="h-10 text-center mt-4 py-2 text-base">
                    <>
                        <img className="h-20 w-20 rounded-full ml-24 mb-3" src="../photos/ccs.png" />
                        {/* src="{person.imageUrl}" --> ito yung code dapat sa photo ginamit ko lang muna yung logo ng ccs */}
                        <p>USER'S NAME</p>
                    </>
                </div>
                <ul>
                    <li className="relative flex items-center mb-2 hover:bg-[#9D9494] h-10 mt-24 py-2" onClick={() => handleItemClick('Dashboard')}>
                        <span className='absolute left-0'>
                            <FaHome className='text-black text-2xl ml-5' />
                        </span>
                        <Link href="#" className="ml-14 mt-1 font-medium">HOME</Link>
                    </li>

                    <li className="mb-2 hover:bg-[#9D9494] h-10 mt-4 py-2" onClick={() => handleItemClick('Profile')}>
                        <span className='absolute left-0'>
                            <IoMdPerson className='text-black text-2xl ml-5' />
                        </span>
                        <Link href="#" className="ml-14 mt-1 font-medium">PROFILE</Link>
                    </li>

                    <li className="mb-2 hover:bg-[#9D9494] h-10 mt-4 py-2" onClick={() => handleItemClick('Archiving')}>
                        <span className='absolute left-0'>
                            <FaBook className='text-black text-2xl ml-5' />
                        </span>
                        <Link href="#" className="ml-14 mt-1 font-medium">ARCHIVING</Link>
                    </li>
                    
                    <li className="mb-2 hover:bg-[#9D9494] h-10 mt-4 py-2" onClick={() => signOut()}>
                        <span className='absolute left-0'>
                            <FaSignOutAlt className='text-black text-2xl ml-5' />
                        </span>
                        <Link href="#" className="ml-14 mt-1 font-medium">SIGN OUT</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar