"use client"
import Sidebar from "../components/Sidebar"

export default function dashboard() {
  return (
    <>
      <div className="flex flex-col w-auto h-screen">

        <img
          className=" w-[870px] h-[200px] object-cover"
          alt=""
          src="../photos/E-Archiving System.png"
        />

        <h1 className=" text-[25px]">
          WELCOME
        </h1>
        <h1 className=" text-[40px]">
          USER'S NAME!
        </h1>

        <div className="bg-[#AD5606] w-[1600px] h-[590px]">
          <div>


            <h1 className="mt-10 mb-10 text-[35px]">
              ABOUT
            </h1>
            <div>
              <p className=" text-[29px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br> do eiusmod tempor incididunt ut labore et dolore magna <br>
              </br>aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br></br> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis<br></br> aute irure dolor in reprehenderit in voluptate velit esse cillum <br></br>dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br></br>cupidatat non proident, sunt in culpa qui officia deserunt<br></br> mollit anim id est laborum.
              </p>
            </div>

          </div>
        </div>

      </div>









    </>
  )
}
