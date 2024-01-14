
import axios from 'axios';
import React, { useState, useEffect } from 'react'


const Program_Select = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await axios.get('/api/forModals/add/add-new-program');
                const data = response.data; // Use response.data directly
                console.log(data);
                setPrograms(data);
            } catch (error) {
                console.error('Error fetching Materials:', error);
            }
        };

        fetchPrograms();
    }, []);  // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

    return (
        <div className="">
           
            <select
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-black"
            >
                {programs.map((program) => (
                    <option key={program.id} value={program.id}>
                        {program.labels}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Program_Select