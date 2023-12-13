import React from 'react'
import Link from 'next/link';
//import { useRouter } from 'next/router';
//import { useSession, signOut } from 'next-auth/react';
import { FaRegUser } from 'react-icons/fa';



const Sidebar = () => {
    
    return (
        <aside className="bg-[#D9D9D9] text-black w-64 h-screen">
            <nav>
                <div className="">
                    
                        <>
                            <p><FaRegUser className='' />name</p>
                            <p>email</p>
                            <p>role</p>
                        </>
                   
                </div>

                <ul className="">
                    
                        <>
                            <li className="mb-2 hover:bg-[#9D9494] ">
                                <Link href="#" onClick={() => handleItemClick('Manage Account')}>Manage Accounts</Link>
                            </li>
                        </>
                    

                    <li className="mb-2 hover:bg-[#9D9494]" onClick={() => handleItemClick('Dashboard')}>
                        <Link href="#">Home</Link>
                    </li>

                   
                        <>
                            <li className="mb-2 hover:bg-[#9D9494]" onClick={() => handleItemClick('Profile')}>
                                <Link href="#">Profile</Link>
                            </li>
                            <li className="mb-2 hover:bg-[#9D9494]" onClick={() => handleItemClick('Archiving')}>
                                <Link href="#">Archiving</Link>
                            </li>
                        </>
                   
                </ul>

                <li className="mb-2 hover:bg-[#9D9494]" onClick={() => signOut()}>
                    <Link href="#">Sign Out</Link>
                </li>
            </nav>
        </aside>
    )
}

export default Sidebar