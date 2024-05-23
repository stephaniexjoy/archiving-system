import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import Profile_Skeleton from "@/app/components/Skeletons/Faculty/Dashboard/Profile/Profile_Skeleton";
import Secretary_Profile_Skeleton from "@/app/components/Skeletons/Secretary/Dashboard/Profile/Profile_Skeleton";
import { getServerSession } from "next-auth";
import React from "react";

export default async function loading() {
  const session = await getServerSession(AuthOptions);

  if (session.user.position === "Secretary") {
    return <Secretary_Dashboard_Skeleton />;
  }
  return (
    <div>
      <Profile_Skeleton />
    </div>
  );
}
