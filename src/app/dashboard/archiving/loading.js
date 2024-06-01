import React from 'react'
import Faculty_Archiving_Skeleton from '@/app/components/Skeletons/Faculty/Dashboard/Archiving/Archiving_Skeleton'
import Secretary_Archiving_Skeleton from '@/app/components/Skeletons/Secretary/Dashboard/Archiving/Archiving_Skeleton'

import { getServerSession } from "next-auth";
import { AuthOptions } from '@/app/api/auth/[...nextauth]/options';

export default async function loading() {
  const session = await getServerSession(AuthOptions);

  if (session.user.position === "Secretary") {
    return <Secretary_Archiving_Skeleton />;
  }

  return <Faculty_Archiving_Skeleton />;
}
