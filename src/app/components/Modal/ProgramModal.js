'use client'
import React from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

function ProgramModal() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
      setOpenModal(false);
      setEmail('');
  }
  return (
    <>
            <Button className="border-none" onClick={() => setOpenModal(true)}> <span className=" text-center bg-[#675454] text-orange-200 outline-color rounded shadow-lg w-[130px]">ADD CATEGORY</span></Button>
          
            <Modal show={openModal} size="md" className='m-96' onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6 p-5">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="category" value="Add Category:" />
                            </div>
                            <TextInput id="category" type="category" required />
                        </div>
                        
                        <div className="flex justify-center w-full">
                            <Button className='bg-[#8F8F8F] px-5 font-bold'>ADD CATEGORY</Button>
                        </div>
                       
                    </div>
                </Modal.Body>
            </Modal>
        </>
  );
};

export default ProgramModal;
