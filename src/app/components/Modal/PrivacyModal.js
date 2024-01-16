'use client'
import React from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

function PrivacyModal() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    return (
        <>
            <Button className="border-none h-12" onClick={() => setOpenModal(true)}><span className="md:left-[1300px] text-center md:text-[20px] bg-[#D9D9D9] text-[#6A6A6A] text-xl font-bold h-10 w-52 hover:bg-[#6A6A6A] hover:text-white py-2">EDIT PRIVACY</span></Button>
            <Modal show={openModal} size="md" className='m-56' onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <div>
                            <div className="-mt-5 mb-2 block">
                                <Label htmlFor="email" className="text-lg" value="Email:" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" className="text-lg" value="Current Password:" />
                            </div>
                            <TextInput id="password" type="password" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" className="text-lg" value="New Password:" />
                            </div>
                            <TextInput id="password" type="password" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" className="text-lg" value="Confirm Password:" />
                            </div>
                            <TextInput id="password" type="password" required />
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

export default PrivacyModal