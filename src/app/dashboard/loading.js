import React from "react";
import Faculty_Dashboard_Skeleton from "../components/Skeletons/Faculty/Dashboard/Dashboard_Skeleton";
import Secretary_Dashboard_Skeleton from "../components/Skeletons/Secretary/Dashboard/Dashboard_Skeleton";
import Admin_Dashboard_Skeleton from "../components/Skeletons/Superadmin/Dashboard/Dashboard_Skeleton";

import { getServerSession } from "next-auth";
import { AuthOptions } from "../api/auth/[...nextauth]/options";

export default async function loading() {
  const session = await getServerSession(AuthOptions);

 /*  if (session.user.position === "Admin") {
    return (
      
    );
  } */
  if (session.user.position === "Secretary") {
    return (
      <Secretary_Dashboard_Skeleton/>
    );
  }

  return <Faculty_Dashboard_Skeleton />;
}
