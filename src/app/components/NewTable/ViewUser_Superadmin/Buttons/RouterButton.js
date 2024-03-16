import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const ViewButton = ({ userId }) => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      onClick={() => {
        router.push(`manageuser/view-user/${userId}`);
      }}
    >
      View User
    </Button>
  );
};

export default ViewButton;
