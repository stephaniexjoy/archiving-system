'use client'
import React from 'react'
import axios from 'axios';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

function DeleteModal({ userId }) {
    const [openModal, setOpenModal] = useState(false);
    const [modalPlacement] = useState('center')
    const { data: session, status } = useSession()
    console.log("user to delete", userId)

    const handleSubmit = async () => {
        try {
            const response = await axios.post("/api/users/delete-user", {
                userId,
                sessionUserId: session.user.id,
                sessionUserName: session.user.name,
                sessionUserPosition: session.user.position,

            })
            console.log(response)
            setOpenModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Button className="border-none bg-[#675454] rounded-md h-7" onClick={() => setOpenModal(true)}><span className='text-white text-[17px] font-semibold'>DELETE</span></Button>
            <Modal show={openModal} position={modalPlacement} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-[#7A6C6C] dark:text-gray-400">
                            Are you sure you want to delete?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button className='bg-[#5B0505] w-36 font-bold' onClick={handleSubmit}>
                                Yes
                            </Button>
                            <Button className='bg-[#5B0505] w-36  font-bold' onClick={() => setOpenModal(false)}>
                                No
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default DeleteModal