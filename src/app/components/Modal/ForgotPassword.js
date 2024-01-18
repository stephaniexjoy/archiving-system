'use client';
import React from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

function ForgotPassword() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    return (
        <>
            <Button className="border-none ml-96" onClick={() => setOpenModal(true)}> <span className="mt-2 text-2xl w-auto [text-decoration:underline] inline-block text-[#FF7E7E] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">Forgot Password?</span></Button>
            <Modal show={openModal} size="md" className='ml-80' onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="-mt-5 text-2xl font-medium text-gray-900 dark:text-white text-center">PASSWORD REQUEST</h3>
                        <div>
                            <div className="mb-2 block text-center">
                                <Label className="text-lg" htmlFor="email" value="Enter Email:" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className="flex justify-center gap-4">
                            <Button className='bg-[#737373] w-36 font-bold' onClick={() => setOpenModal(false)}>
                                REQUEST
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

export default ForgotPassword