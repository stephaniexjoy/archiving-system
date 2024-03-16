import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const EditButton = ({ userId }) => {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      onClick={() => {
        router.push(`manageuser/edit-user/${userId}`);
      }}
    >
      Edit User
    </Button>
  );
};

export default EditButton;
