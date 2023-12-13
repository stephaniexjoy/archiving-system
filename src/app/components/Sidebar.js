import React from 'react'
import Link from 'next/link';
//import { useRouter } from 'next/router';
//import { useSession, signOut } from 'next-auth/react';
import { FaRegUser } from 'react-icons/fa';



const Sidebar = () => {

    return (
        <aside className="absolute bg-[#D9D9D9] text-black w-64 h-[925px] top-0 left-0 z-40">
            <nav>
                <div className="h-10 text-center mt-4 py-2 text-base">
                    <>
                        <img class="h-20 w-20 rounded-full ml-24 mb-3" src="../photos/ccs.png" />
                        {/* src="{person.imageUrl}" --> ito yung code dapat sa photo ginamit ko lang muna yung logo ng ccs */}
                        <p>USER'S NAME</p>
                    </>
                </div>
                <ul>
                    <li className="mb-2 hover:bg-[#9D9494] h-10 text-center mt-24 py-2" onClick={() => handleItemClick('Dashboard')}>
                        <Link href="#">HOME</Link>
                    </li>
                    <li className="mb-2 hover:bg-[#9D9494] h-10 text-center mt-4 py-2" onClick={() => handleItemClick('Profile')}>
                        <Link href="#">PROFILE</Link>
                    </li>
                    <li className="mb-2 hover:bg-[#9D9494] h-10 text-center mt-4 py-2" onClick={() => handleItemClick('Archiving')}>
                        <Link href="#">ARCHIVING</Link>
                    </li>
                    <li className="mb-2 hover:bg-[#9D9494] h-10 text-center mt-4 py-2" onClick={() => signOut()}>
                        <Link href="#">SIGN OUT</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar