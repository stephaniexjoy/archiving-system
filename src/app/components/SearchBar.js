"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { FaSearch } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import archiving from '../dashboard/archiving/page';


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()

    const onSearch = (event) => {
        event.preventDefault()

        if (searchQuery.trim() !== "") {
            router.push(`/dashboard/archiving/search?query=${encodeURIComponent(searchQuery)}`);
        } else {
            router.push("/dashboard/archiving");
        }

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