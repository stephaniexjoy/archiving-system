
import React, { cache } from 'react'


async function getData() {
    const res = await fetch('http://localhost:3000/api/get-file-path')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


const FileTable = async () => {
    let data = await getData()
    if (!data) {
        data = null
    }
    console.log(data)

    return (
        <div className='flex flex-col w-auto h-screen items-center md:h-20 font-[Times New Roman]'>
            <table className="mt-10 table table-auto md:table-fixed w-[1150px] text-center">
                <thead className='bg-[#bd8551] text-xl'>
                    <tr>
                        <th className='py-2'>FILE</th>
                        <th>UPLOADED BY</th>
                        <th>PERMISSIONS</th>
                        <th>DATE AND TIME UPLOADED</th>
                    </tr>
                </thead>
                <tbody className='bg-[#D9D9D9] text-black text-lg'>
                    {/* <tr>
                        <td className='py-2'>PRINCE ANDRES</td>
                        <td>PART-TIME INSTRUCTOR</td>
                        <td>UPLOADED A FILE</td>
                        <td>December 13, 2023 (9:45)</td>
                    </tr> */}
                    {data === null || !data ? (
                        <tr>
                            <td colSpan="4">No files available</td>
                        </tr>
                    ) : (
                        data.map((file) => (
                            <tr key={file.filePath}>
                                <td>{file.filename}</td>
                                <td>{file.uploaderName}</td>
                                <td>{file.fileRole}</td>
                                <td>{file.uploadDate}</td>
                            </tr>
                        ))
                    )}



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
                </tbody>
            </table>
        </div>
    );
}

export default FileTable


