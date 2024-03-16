import React from "react";
import { Button } from "@/components/ui/button";
import Archive_Dialog from "@/app/components/New_Components/Archive_Dialog";

const ArchiveButton = ({userId}) => {
  return <Archive_Dialog userId={userId} />;
};

export default ArchiveButton;
