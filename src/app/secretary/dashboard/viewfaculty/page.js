import ViewFaculty_Secretary from "@/app/components/NewTable/ViewFaculty_Table_Secretary/ViewFaculty_Secretary";
import { getAllUsers } from "@/app/lib/actions/actions";
import { revalidatePath } from "next/cache";

async function page() {
  async function getEmptyData() {
    return Promise.resolve([]);
  }

  async function getUsers() {
    "use server";
    const res = await fetch("http://localhost:3000/api/users/fetch-users");
    if (!res.ok) {
      return getEmptyData();
    }
    revalidatePath("/secretary/dashboard/viewfaculty/");
    return res.json();
  }
  const users = await getAllUsers();
  console.log(users);
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto">
      <div className="
      bg-[#AD5606] w-[100%] h-[7%] flex items-center justify-center
      2xl:bg-[#AD5606] 2xl:w-full 2xl:h-auto 2xl:flex 2xl:items-center 2xl:justify-center
      ">
        <img
          className="
          w-[60%] h-auto object-cover flex items-center justify-center
          sm:w-[45%] sm:h-auto sm:object-cover sm:flex sm:items-center sm:justify-center
          md:w-[40%] md:h-auto md:object-cover md:flex md:items-center md:justify-center
          lg:w-[30%] lg:h-auto lg:object-cover lg:flex lg:items-center lg:justify-center
          xl:w-[25%] xl:h-auto xl:object-cover xl:flex xl:items-center xl:justify-center
          2xl:w-[30%] 2xl:h-auto 2xl:object-cover 2xl:flex 2xl:items-center 2xl:justify-center
          "
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div className="
      text-[30px] mt-5 mb-3 font-semibold text-[#5B0505] text-center
      sm:text-[33px] sm:mt-5 sm:mb-3 sm:font-semibold sm:text-[#5B0505] sm:text-center
      md:text-[36px] md:mt-5 md:mb-3 md:font-semibold md:text-[#5B0505] md:text-center
      lg:text-[39px] lg:mt-5 lg:mb-3 lg:font-semibold lg:text-[#5B0505] lg:text-center
      xl:text-[42px] xl:mt-5 xl:mb-3 xl:font-semibold xl:text-[#5B0505] xl:text-center
      2xl:text-[50px] 2xl:mt-5 2xl:mb-5 2xl:font-semibold 2xl:text-[#5B0505] 2xl:text-center
      ">
        VIEW FACULTY
      </div>
      {/*  <div>
        <div className="container flex justify-center mx-auto drop-shadow-2xl">
          <div className="flex flex-col">
            <div className="w-full">
              <Table
                className="w-[1300px] divide-y divide-gray-300"
                style={{ borderCollapse: "separate", borderSpacing: "0 30px" }}
              >
                <Table className="bg-[#837979] divide-y divide-gray-300">
                  {users.map((user) => (
                    <TableRow key={user.id} className="whitespace-nowrap">
                      <TableCell className="px-3 py-4">
                        <div className="mr-[700px] text-xl font-semibold text-white">
                          {user.name}
                        </div>
                      </TableCell>

                      <TableCell className="px-1 py-4">
                        <Link
                          href={`/secretary/dashboard/viewfaculty/view-user/${user.id}/`}
                          className="px-4 py-1 text-base font-semibold text-white bg-[#675454] rounded-md"
                        >
                          VIEW
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </Table>
              </Table>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <ViewFaculty_Secretary data={users} />
      </div>
    </div>
  );
}

export default page;
