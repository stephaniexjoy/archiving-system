'use client';
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useEdgeStore } from "@/app/lib/edgestore";
import { useSession } from "next-auth/react";
import axios from "axios";

function UploadSecModal() {


  const { data: session, status } = useSession()
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");

  const [file, setFile] = useState(null);
  const [privacy, setPrivacy] = useState('')


  const [progress, setProgress] = useState(0);
  const [urls, setUrls] = useState();
  const { edgestore } = useEdgeStore();

  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <>
      <FaUpload className="border-none h-12 cursor-pointer" size='40' onClick={() => setOpenModal(true)}><span className="md:left-[1300px] text-center md:text-[20px] font-bold">CREATE</span></FaUpload>
      <Modal show={openModal} size="md" className='m-60' onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 p-5">
            <div>
              <div className="mb-2 block">
                <label for="category" class="mb-2 text-lg font-medium text-gray-900 dark:text-white">Material:</label>
                <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option selected="LM">Learning Materials</option>
                  <option value="TS">Training and Seminar</option>
                  <option value="RC">Research Conducted</option>
                  <option value="EC">Extension Conducted</option>
                  <option value="EQ">Educational Qualification</option>
                  <option value="FP">Faculty Profile</option>
                </select>
              </div>
              <div className="mb-2 block">
                <label for="category" class="mb-2 text-lg font-medium text-gray-900 dark:text-white">Type:</label>
                <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option selected="pdf">PDF</option>
                  <option value="ppt">PPT</option>
                  <option value="docx">DOCX</option>
                </select>
              </div>
              <div className="mb-2 block">
                <label for="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Program:</label>
                <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option selected="ml">Machine Learning</option>
                  <option value="prog">Programming Languages</option>
                  <option value="platformtech">Platform Technologies</option>
                </select>
              </div>
              <div className="mb-2 block">
                <label for="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Privacy:</label>
                <select onChange={(e) => { setPrivacy(e.target.value) }} id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option selected="seconly" value="seconly">Secretary Only</option>
                  <option value="forall">For All</option>
                </select>
              </div>


              <div>
                <form className="flex items-center space-x-6 ml-12 mt-55">
                  <label className="block">
                    <span className="sr-only">Choose file</span>
                    <input type="file" className="block w-full text-lg text-slate-500 file:mr-4 file:py-2 file:px-4 
                      file:border-0 file:text-sm file:font-semibold file:bg-[#6A6A6A] file:text-white hover:file:bg-slate-400"
                      onChange={(e) => {
                        setFile(e.target.files?.[0] ?? null);
                      }} />
                  </label>
                </form>
              </div>

                // Upload button function
              <button className="ml-44 mt-10 bg-[#8F8F8F] hover:bg-[#6A6A6A]focus:outline-none h-10 w-48 font-bold"
                onClick={async () => {
                  if (file) {
                    console.log("edgestore: ", edgestore);
                    console.log("2edgestore: ", edgestore.publicFiles1);
                    console.log("file: ", file)
                    const fileExtension = file.name.split('.').pop();
                    console.log('File Extension:', fileExtension);



                    const res = await edgestore.publicFiles1.upload({
                      file,

                      options: {
                        manualFileName: file.name,


                      },

                      onProgressChange: (progress) => {
                        setProgress(progress);
                      },
                    }

                    )


                    console.log(res.url);

                    // save your data here
                    const response = await axios.post('/api/save-path-todb', {
                      fileName: file.name,
                      fileType: fileExtension,
                      filePath: res.url,
                      userId: session.user.id,
                      uploaderName: session.user.name,
                      fileRole: privacy
                    });
                    if (response) {
                      window.location.reload()
                    }
                  }
                }}>
                UPLOAD
              </button>

            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default UploadSecModal
