'use client'
import React from 'react'
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

function DeleteModal() {
    const [openModal, setOpenModal] = useState(false);
    const [modalPlacement] = useState('center')

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
                            <Button className='bg-[#5B0505] w-36 font-bold' onClick={() => signOut()}>
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