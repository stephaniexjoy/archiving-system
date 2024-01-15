
import React from 'react'



const FileTable = () => {
    return (
        <div className='flex flex-col w-auto h-screen items-center md:h-20 font-[Times New Roman]'>
            <table className="mt-10 table table-auto md:table-fixed w-[1150px] text-center">
                <thead className='bg-[#bd8551] text-xl'>
                    <tr>
                        <th className='py-2'>NAME</th>
                        <th>POSITION</th>
                        <th>LAST ACTIVITY</th>
                        <th>DATE AND TIME</th>
                    </tr>
                </thead>
                <tbody className='bg-[#D9D9D9] text-black text-lg'>
                    <tr>
                        <td className='py-2'>PRINCE ANDRES</td>
                        <td>PART-TIME INSTRUCTOR</td>
                        <td>UPLOADED A FILE</td>
                        <td>December 13, 2023 (9:45)</td>
                    </tr>
                    <tr>
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
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FileTable


