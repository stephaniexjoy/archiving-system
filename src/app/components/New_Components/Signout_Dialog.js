import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { signOut } from "next-auth/react";
import { FaBook, FaHome, FaSignOutAlt } from "react-icons/fa";

import React from "react";

export default function Signout_Dialog({ isMinimized }) {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger
          className={`flex items-center mb-2 ml-3 h-10 px-2 ${
            isMinimized ? "mt-4" : "mt-4"
          }`}
        >
          <FaSignOutAlt className="text-white text-2xl  " />
          <span className={`ml-4 ${isMinimized ? "hidden" : ""}`}>
  SIGN OUT
</span>



          
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to sign out?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action will sign you out from this device.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-[#5B0505]"
              onClick={() => signOut()}
            >
              Sign Out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
