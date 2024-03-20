import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const RouterButton = ({ task }) => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      onClick={() => {
        router.push(`/dashboard/archiving/task?taskId=${task}`);
      }}
    >
      Go To Task
    </Button>
  );
};

export default RouterButton;
