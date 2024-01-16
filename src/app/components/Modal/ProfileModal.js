'use client'
import React from 'react'
import { Button, Label, Modal, TextInput, FileInput } from 'flowbite-react';
import { useState } from 'react';

function ProfileModal() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    return (
        <>
            <Button className="border-none h-12" onClick={() => setOpenModal(true)}><span className="md:left-[1300px] text-center md:text-[20px] bg-[#D9D9D9] text-[#6A6A6A] text-xl font-bold h-10 w-52 hover:bg-[#6A6A6A] hover:text-white py-2">EDIT PROFILE</span></Button>
            <Modal show={openModal} size="md" className='m-20' onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <div>
                            <div id="fileUpload" className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="file" className="text-lg" value="Upload file" />
                                </div>
                                <FileInput className='mb-2' id="file" />
                            </div>
                            <div className="mb-2 block">
                                <label for="name" className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Name:</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                            </div>
                            <div className="mb-2 block">
                                <label for="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Age:</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                            </div>
                            <div className="mb-2 block">
                                <label for="sex" class="mb-2 text-lg font-medium text-gray-900 dark:text-white">Sex:</label>
                                <select id="sex" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">Select category</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="mb-2 block">
                                <label for="employee no" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Employee No:</label>
                                <input type="text" name="employee no" id="employee no" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                            </div>
                            <div className="mb-2 block">
                                <label for="department" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Department:</label>
                                <input type="text" name="department" id="department" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                            </div>
                            <div className="mb-2 block">
                                <label for="designation" class="mb-2 text-lg font-medium text-gray-900 dark:text-white">Designation:</label>
                                <select id="designation" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">Select category</option>
                                    <option value="TV">Dean</option>
                                    <option value="PC">Regular</option>
                                    <option value="GA">Faculty (Regular)</option>
                                    <option value="GA">Faculty (Part Time)</option>
                                    <option value="GA">Job Order</option>
                                </select>
                            </div>
                            <div className="mb-2 block">
                                <div className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                                    <Label htmlFor="email" className="text-lg" value="Institutional Email:" />
                                </div>
                                <TextInput
                                    id="email"
                                    placeholder="name@company.com"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-center w-full">
                            <Button className='bg-[#D9D9D9] text-[#8F8F8F] px-5 font-bold hover:bg-[#8F8F8F] hover:text-white'><span className='text-lg '>SAVE</span></Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProfileModal