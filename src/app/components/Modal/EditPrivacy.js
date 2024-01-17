'use client'
import React from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { FaUserLock } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import axios from 'axios';

function PrivacyModal() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { data: session, status } = useSession()

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post("/api/users/update-user", {
                email,
                currentPassword,
                newPassword,
                confirmPassword,
                userId: session.user.id
            });
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <FaUserLock className="border-none h-12 cursor-pointer -mt-16 ml-96" size="55" style={{ color: "white", top: "40px", left: "1660px" }} onClick={() => setOpenModal(true)}><span className="md:left-[1300px] text-center md:text-[20px] bg-[#D9D9D9] text-[#6A6A6A] text-xl font-bold h-10 w-52 hover:bg-[#6A6A6A] hover:text-white py-2">EDIT PRIVACY</span></FaUserLock>
            <Modal show={openModal} size="md" className='m-56' onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-3 p-5">
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
                            <TextInput id="password" type="password" required onChange={(event) => setCurrentPassword(event.target.value)}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" className="text-lg" value="New Password:" />
                            </div>
                            <TextInput id="password" type="password" required onChange={(event) => setNewPassword(event.target.value)}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" className="text-lg" value="Confirm Password:" />
                            </div>
                            <TextInput id="password" type="password" required onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>
                        <div className="flex justify-center w-full">
                            <Button onClick={handleSubmit} className='bg-[#D9D9D9] text-[#8F8F8F] px-5 font-bold hover:bg-[#8F8F8F] hover:text-white'><span className='text-lg '>SAVE</span></Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PrivacyModal