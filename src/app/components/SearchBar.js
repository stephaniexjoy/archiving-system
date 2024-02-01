"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { FaSearch } from "react-icons/fa";
import { useRouter } from 'next/navigation';


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()

    const onSearch = (event) => {
        event.preventDefault()

        const encodedSearchQuery = encodeURI(searchQuery)
        router.push(`/dashboard/archiving?query=${encodedSearchQuery}`)

        console.log("Current Query", encodedSearchQuery)

        const decodedSearchQuery = decodeURI(encodedSearchQuery)
        console.log("Current Query", decodedSearchQuery)
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