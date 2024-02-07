"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { FaSearch } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import archiving from '../dashboard/archiving/page';
import { useSession } from 'next-auth/react';


const SearchBar = () => {
    const { data: session, status } = useSession()
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()
    console.log("Session search bar", session)


    const onSearch = (event) => {
        event.preventDefault()

     let searchRoute = "/dashboard/archiving"; // Default route for Faculty

    if (session.user.position === "Secretary") {
        searchRoute = "/secretary/dashboard/archiving"; // Route for Secretary
    }

    if (searchQuery.trim() !== "") {
        searchRoute += `/search?query=${encodeURIComponent(searchQuery)}`;
    }

    router.push(searchRoute);




    }
    return (
        <>
            <Input className="text-md md:text-xl text-[#242323] bg-[#D9D9D9] w-[1560px] h-[60px] md:text-shadow-inner" placeholder="Enter Query" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
            <div className="relative bg-[#6A6A6A] p-2 h-[60px] w-auto ml-[1%] cursor-pointer">
                <h1>
                    <FaSearch onClick={onSearch} size="50" />
                </h1>
            </div>
        </>

    )
}

export default SearchBar