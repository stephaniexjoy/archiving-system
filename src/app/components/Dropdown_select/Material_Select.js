
import axios from 'axios';
import React, { useState, useEffect } from 'react'


const Material_Select = () => {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                const response = await axios.get('/api/forModals/add/add-new-material');
                const data = response.data; // Use response.data directly
                console.log(data);
                setMaterials(data);
            } catch (error) {
                console.error('Error fetching Materials:', error);
            }
        };

        fetchMaterials();
    }, []);  // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

    return (
        <div className="">

            <select
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-black"
            >
                {materials.map((material) => (
                    <option key={material.id} value={material.id}>
                        {material.labels}
                    </option>
                ))}
            </select>

        </div>
    )
}

export default Material_Select