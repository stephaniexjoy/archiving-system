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
    <div className="flex flex-col w-screen h-screen">
      <div className="bg-[#AD5606] w-full h-auto flex items-center justify-center">
        <img
          className="w-auto h-[100%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div className=" text-[50px] mt-5 mb-5 font-semibold text-[#5B0505] text-center ">
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
