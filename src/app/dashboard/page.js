"use client"
import Sidebar from "../components/Sidebar"

export default function dashboard() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sidebar/>
     <div>
            <div className="absolute z-0 top-[333px] left-[1px] bg-[#AD5606] w-[1800px] h-[590px]" />
            <img
                className="absolute top-[20px] left-[16%] w-[870px] h-[200px] object-cover"
                alt=""
                src="../photos/E-Archiving System.png"
            />
            <h1 className="absolute top-[220px] left-[590px] inline-block text-[25px]">
                WELCOME 
            </h1>
            <h1 className="absolute top-[250px] left-[520px] inline-block text-[40px]">
                USER'S NAME!
            </h1>
             <h1 className="absolute top-[375px] left-[590px] inline-block text-[35px]">
                ABOUT
            </h1> 
            <div>
            <p className="absolute top-[440px] left-[215px] text-[29px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br> do eiusmod tempor incididunt ut labore et dolore magna <br>
            </br>aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br></br> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis<br></br> aute irure dolor in reprehenderit in voluptate velit esse cillum <br></br>dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br></br>cupidatat non proident, sunt in culpa qui officia deserunt<br></br> mollit anim id est laborum.
            </p>
            </div> 
         
      </div>
      
    </main>
    
  )  
}
