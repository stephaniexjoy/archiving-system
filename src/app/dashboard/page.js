import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"
import { db } from "@/app/lib/prisma_db";
import { redirect } from "next/navigation";

export default async function dashboard() {

  const session = await getServerSession(AuthOptions)

  console.log(session.user.position)

  if (session.user.position === "Superadmin") {
    redirect('/superadmin/dashboard/')
  }
  if (session.user.position === "Secretary") {
    console.log("push")
    redirect('/secretary/dashboard/')
  }

  return (
    <>
      <div className="flex flex-col w-auto h-screen max-w-screen-xl ">
        <div className='flex flex-col w-full h-screen items-center '>
          <img
            className="w-full max-w-screen-xl h-[200px] object-cover"
            alt=""
            src="../photos/E-Archiving System.png"
          />

          <h1 className=" text-[25px]">
            WELCOME
          </h1>
          <h1 className=" text-[40px]">
            USER&apos;S NAME
          </h1>

          <div className="border bg-[#AD5606] w-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-auto mt-10 p-16 rounded-lg shadow-lg">
            <div>
              <h1 className="text-center mb-10 text-[35px] mt-4">
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
      </div>








    </>
  )
}
