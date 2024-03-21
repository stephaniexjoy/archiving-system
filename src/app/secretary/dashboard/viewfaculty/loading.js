import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import ViewFaculty_Secretary from '@/app/components/NewTable/ViewFaculty_Table_Secretary/ViewFaculty_Secretary'
import ViewFaculty_Skeleton from '@/app/components/Skeletons/Secretary/Dashboard/View Faculty/ViewFaculty_Skeleton'

export default function loading() {
  return (
    <div><ViewFaculty_Skeleton /></div>
  )
}
