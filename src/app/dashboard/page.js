"use client"
import Sidebar from "../components/Sidebar"

export default function dashboard() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sidebar/>
     <div>
            <div className="absolute z-0 top-[415px] left-[1px] bg-[#AD5606] w-[1800px] h-[480px]" />
            <img
                className="absolute top-[55px] left-[20%] w-[918px] h-[215px] object-cover"
                alt=""
                src="../photos/E-Archiving System.png"
            />
            <h1 className="absolute top-[250px] left-[675px] inline-block text-[30px]">
                WELCOME 
            </h1>
            {/* <b className="absolute top-[450px] left-[695px] inline-block text-[30px]">
                ABOUT
            </b> */}
            {/* <div>
            <p className="relative top-[425px] text-[25px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br> do eiusmod tempor incididunt ut labore et dolore magna <br>
            </br>aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br></br> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis<br></br> aute irure dolor in reprehenderit in voluptate velit esse cillum <br></br>dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br></br>cupidatat non proident, sunt in culpa qui officia deserunt<br></br> mollit anim id est laborum.
            </p>
            </div> */}
         
      </div>
      
    </main>
    
  )  
}
