'use client';
import React from 'react'
import axios from 'axios';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

export default function CreateModal() {
    const [openModal, setOpenModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [position, setPosition] = useState("");
    const [designation, setDesignation] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [license, setLicense] = useState("");

    function onCloseModal() {
        setOpenModal(false);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform form validation and submit the data
        try {
            console.log(
                name,
                email,
                password,
                position,
                designation,
                specialization,
                license
            );
            const response = await axios.post("/api/users/create-user", {
                name,
                email,
                password,
                position,
                designation,
                specialization,
                license,
            });
            // Assuming your API returns a success message
            console.log(response.data.message);
            if (response) {
                setName('');
                setEmail('');
                setPassword('');
                setPosition('');
                setDesignation('');
                setSpecialization('');
                setLicense('');
            }
            // Perform any additional actions or show a success message to the user
        } catch (error) {
            // Handle error responses from the API
            console.error(error);
            // Show an error message to the user
        }


    };


    return (
        <>
            <Button className="border-none h-12 bg-[#5B0505]" onClick={() => setOpenModal(true)}><span className="md:left-[1300px] text-center text-2xl font-bold">CREATE ACCOUNTS</span></Button>
            <Modal show={openModal} size="md" className='ml-96' onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6 p-5">
                            <div>
                                <div className="mb-2 block">
                                    <label htmlFor="name" className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Name:</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }} />
                                </div>
                                <div className="mb-2 block">
                                    <label htmlFor="category" className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Role:</label>
                                    <select id="categoryPosition" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => {
                                            setPosition(e.target.value);
                                        }}>
                                        <option value="">Select category</option>
                                        <option value="Associate Dean">Associate Dean</option>
                                        <option value="Secretary">Secretary</option>
                                        <option value="Faculty">Faculty</option>
                                        <option value="Unit Head">Unit Head</option>
                                        <option value="Coordinator">Coordinator</option>
                                    </select>
                                </div>
                                <div className="mb-2 block">
                                    <label htmlFor="category" className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Category:</label>
                                    <select id="categoryDesignation" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => {
                                            setDesignation(e.target.value);
                                        }}>
                                        <option value="">Select category</option>
                                        <option value="Dean">Dean</option>
                                        <option value="Regular">Regular</option>
                                        <option value="Faculty">Faculty (Regular)</option>
                                        <option value="Faculty">Faculty (Part Time)</option>
                                        <option value="Job Order">Job Order</option>
                                    </select>
                                </div>
                                <div className="mb-2 block">
                                    <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Specialization:</label>
                                    <input type="text" name="specialization" id="specialization" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => {
                                            setSpecialization(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-2 block">
                                    <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Eligibility/Professional License:</label>
                                    <input type="text" name="license" id="license" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => {
                                            setLicense(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-2 block">
                                    <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email:</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-2 block">
                                    <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Password:</label>
                                    <input type="password" name="pass" id="pass" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center gap-4">
                                <Button type='submit' className='bg-[#737373] w-36 font-bold' >
                                    CREATE
                                </Button>
                                <Button className='bg-[#737373] w-36  font-bold' onClick={() => setOpenModal(false)}>
                                    BACK
                                </Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

