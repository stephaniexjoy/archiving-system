import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function Tasks_Skeleton() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="
        w-[95%] h-[90%] px-5 
        sm:w-[95%] sm:h-[90%] sm:px-5 
        md:w-[95%] md:h-[90%] md:px-5 
        lg:w-[95%] lg:h-[90%] lg:px-5 
        xl:w-[95%] xl:h-[90%] xl:px-5
        2xl:w-[95%] 2xl:h-[90%] 2xl:px-5
        ">
          
        

        {/* calendar */}
        <div className="bg-gray-300 w-[1800px] h-[1000px] py-6 rounded-lg">
          <Skeleton className="h-24 w-[30%] ml-3 mt-4 bg-gray-400" />
          <Skeleton className="h-5 w-[20%] ml-3 mt-3 bg-gray-400" />
          <Skeleton className="h-5 w-[30%] ml-3 mt-52 bg-gray-400" />
          <Skeleton className="h-5 w-[15%] ml-3 mt-52 bg-gray-400" />
        </div>
       

        
        <div className="bg-gray-400 w-[500px] h-[400px] ml-[1200px] -mt-[53%] py-6 rounded-lg flex-justify-end">
          <Skeleton className="h-24 w-[30%] ml-3 mt-4 bg-gray-300" />
          <Skeleton className="h-5 w-[20%] ml-3 mt-3 bg-gray-300" />
          <Skeleton className="h-5 w-[30%] ml-3 mt-52 bg-gray-300" />
          <Skeleton className="h-5 w-[15%] ml-3 mt-52 bg-gray-300" />
        </div>
        

      </div>
       








    </div>
  )
}
