'use client';
import React from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

function CreateModal() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    return (
        <>
            <Button className="border-none h-12 bg-[#6A6A6A]" onClick={() => setOpenModal(true)}><span className="md:left-[1300px] text-center md:text-[20px] font-bold">CREATE</span></Button>
            <Modal show={openModal} size="md" className='m-60' onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <div>
                            <div className="-mt-8 mb-2 block">
                                <label for="name" className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Name:</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                            </div>
                            <div className="mb-2 block">
                                <label for="category" class="mb-2 text-lg font-medium text-gray-900 dark:text-white">Position:</label>
                                <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">Select category</option>
                                    <option value="TV">Associate Dean</option>
                                    <option value="PC">Secretary</option>
                                    <option value="PC">Faculty</option>
                                    <option value="GA">Unit Head</option>
                                    <option value="GA">Coordinator</option>
                                </select>
                            </div>
                            <div className="mb-2 block">
                                <label for="category" class="mb-2 text-lg font-medium text-gray-900 dark:text-white">Designation:</label>
                                <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">Select category</option>
                                    <option value="TV">Dean</option>
                                    <option value="PC">Regular</option>
                                    <option value="GA">Faculty (Regular)</option>
                                    <option value="GA">Faculty (Part Time)</option>
                                    <option value="GA">Job Order</option>
                                </select>
                            </div>
                            <div className="mb-2 block">
                                <label for="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Specialization:</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                            </div>
                            <div className="mb-2 block">
                                <label for="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Eligibility/Professional License:</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <Button className='bg-[#737373] w-36 font-bold' onClick={() => setOpenModal(false)}>
                                CREATE
                            </Button>
                            <Button className='bg-[#737373] w-36  font-bold' onClick={() => setOpenModal(false)}>
                                BACK
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CreateModal