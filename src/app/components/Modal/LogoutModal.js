import React from 'react'
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { signOut } from 'next-auth/react';

function LogoutModal() {
    const [openModal, setOpenModal] = useState(false);
    const [modalPlacement] = useState('center')
    return (
        <>
            <Button className="border-none" onClick={() => setOpenModal(true)}><span className='-m-5 text-black text-lg'>SIGN OUT</span></Button>
            <Modal show={openModal}  position={modalPlacement} size="md" className='m-96' onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center p-10">
                        <HiOutlineExclamationCircle className="mx-auto -mt-10 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-[#7A6C6C] dark:text-gray-400">
                            Are you sure you want to sign out?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button className='bg-[#5B0505] w-36 font-bold hover:bg-[#6A6A6A]' onClick={() => signOut()}>
                                Yes
                            </Button>
                            <Button className='bg-[#5B0505] w-36 font-bold hover:bg-[#6A6A6A]' onClick={() => setOpenModal(false)}>
                                No
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LogoutModal