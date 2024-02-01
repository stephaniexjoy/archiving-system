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
            <Input placeholder="Enter Query" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
            <div className="">
                <h1>
                    <FaSearch onClick={onSearch} size="43" style={{ top: "100px", left: "10px" }} />
                </h1>
            </div>
        </>

    )
}

export default SearchBar