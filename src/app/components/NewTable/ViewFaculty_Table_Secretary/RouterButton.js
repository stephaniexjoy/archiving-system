import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const RouterButton = ({ userId }) => {
  const router = useRouter();
  return (
    <Button
      variant="secondary"
      onClick={() => {
        router.push(`viewfaculty/view-user/${userId}`);
      }}
    >
      View User
    </Button>
  );
};

export default RouterButton;
