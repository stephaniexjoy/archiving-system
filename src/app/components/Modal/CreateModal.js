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
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
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

export default CreateModal