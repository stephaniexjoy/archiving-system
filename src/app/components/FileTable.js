"use client"
import React, { useState } from 'react'

const FileTable = ({ data }) => {

    const [currentPrivacy, setCurrentPrivacy] = useState('forall');

    if (!data) {
        data = null
    }
    console.log(data)

    const togglePrivacy = () => {

        setCurrentPrivacy(currentPrivacy === 'forall' ? 'seconly' : 'forall');
    };
    return (
        <>
            <button onClick={togglePrivacy}
                className="mt-10 bg-[#5B0505] hover:bg-[#6A6A6A] focus:outline-none h-auto w-48 font-bold text-white"
            >
                Toggle Privacy: {currentPrivacy === 'forall' ? 'For All' : 'Secretary Only'}
            </button>
            <div className='flex h-screen items-center md:h-20 font-[Times New Roman]'>
                <table className="mt-8 table table-auto md:table-fixed w-full text-center">
                    <thead className='bg-[#5B0505] text-white text-xl'>
                        <tr>
                            <th className='py-2'>FILE</th>
                            <th>UPLOADED BY</th>
                            <th>PERMISSIONS</th>
                            <th>DATE AND TIME UPLOADED</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className='bg-[#D9D9D9] text-black text-lg'>

                        {data === null || !data || data.length === 0 ? (
                            <tr>
                                <td colSpan="5">No files available</td>
                            </tr>
                        ) : (
                            data
                                .filter((file) => file.fileRole === currentPrivacy)
                                .map((file) => (
                                    <tr key={file.filePath}>
                                        <td><a href={file.filePath}>{file.filename}</a></td>
                                        <td>{file.uploaderName}</td>
                                        <td>{file.fileRole === 'forall' ? 'All' : 'Secretary Only'}</td>
                                        <td>{file.uploadDate}</td>
                                        <td>
                                            <button
                                                className="bg-[#8F8F8F] hover:bg-[#6A6A6A] focus:outline-none h-10 w-48 font-bold"
                                            >
                                                Edit Privacy
                                            </button>
                                        </td>
                                    </tr>
                                ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FileTable



{/* <tr>
                    <td className='py-2'>PRINCE ANDRES</td>
                    <td>PART-TIME INSTRUCTOR</td>
                    <td>UPLOADED A FILE</td>
                    <td>December 13, 2023 (9:45)</td>
                </tr> */}

{/* <tr>
                    <td className='py-2'>AL JOHN VILLAREAL</td>
                    <td>REGULAR INSTRUCTOR</td>
                    <td>DELETED A FILE</td>
                    <td>December 10, 2023 (16:30)</td>
                </tr>
                <tr>
                    <td className='py-2'>CATHERINE CASTILLO</td>
                    <td>REGULAR INSTRUCTOR</td>
                    <td>EDITED A FILE</td>
                    <td>December 7, 2023 (7:30)</td>
                </tr> */}