import { db } from "@/app/lib/prisma_db";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Edit_User_Card from "@/app/components/New_Components/Card/Superadmin/Edit_User_Card";

const page = async ({ params }) => {
  const user = await db.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  console.log(user);

  const updateUser = async (formData) => {
    "use server";
  };

  return (
    <>
      <div className="flex flex-col w-screen h-screen px-12 items-center">
        <Edit_User_Card user={user} />
      </div>
    </>
  );
};

export default page;
