import { Button } from "@/components/ui/button";
import { useState } from "react";
import Course_ComboBox from "../New_Components/Archiving/Tabs_Content/ComboBox/Course_ComboBox";
import Material_ComboBox from "../New_Components/Archiving/Tabs_Content/ComboBox/Material_ComboBox";
import Permission_ComboBox from "../New_Components/Archiving/Tabs_Content/ComboBox/Permission_ComboBox";
import { updateFile } from "@/app/lib/actions/actions";
import { useToast } from "@/components/ui/use-toast";

export default function Edit_FileForm({ filePath }) {
  const { toast } = useToast();

  const [material, setMaterial] = useState();
  const [program, setProgram] = useState();
  const [permission, setPermission] = useState();

  return (
    <>
      <div className="flex flex-row gap-x-16 w-full px-10">
        <Material_ComboBox setMaterial={setMaterial} />
        <Course_ComboBox setProgram={setProgram} />
        <Permission_ComboBox setPermission={setPermission} />
      </div>
      <Button
        onClick={async () => {
          console.log("Update:", filePath, material, program, permission);

          if (!filePath || !material || !program || !permission) {
            toast({
              description: "Please fill the categories.",
              variant: "default",
            });
          } else {
            const isUpdated = await updateFile(
              filePath,
              material,
              program,
              permission
            );

            if (isUpdated) {
              toast({
                description: "You have successfully updated a file.",
                variant: "default",
              });
            }
          }
        }}
        className="bg-[#8F8F8F] text-white text-[20px] w-[300px]"
      >
        UPDATE
      </Button>
    </>
  );
}
