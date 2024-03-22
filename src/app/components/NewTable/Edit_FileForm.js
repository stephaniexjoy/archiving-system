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
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const handleRefresh = () => {
    setRefreshTrigger((prevTrigger) => !prevTrigger); // Toggle refreshTrigger state
    console.log(refreshTrigger);
  };

  return (
    <>
      <div className="flex flex-row gap-x-[13%] w-full px-10">
        <Material_ComboBox setMaterial={setMaterial} refreshTrigger={refreshTrigger}/>
        <Course_ComboBox setProgram={setProgram} refreshTrigger={refreshTrigger}/>
        <Permission_ComboBox setPermission={setPermission} />
      </div>
      <div className="flex items-center w-full justify-center mt-10">
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
          className="flex bg-[#8F8F8F] text-white text-[20px] px-10 py-4 w-auto justify-center items-center my-8"
        >
          Update
        </Button>

        <Button
          onClick={handleRefresh}
          className="flex bg-[#8F8F8F] text-white text-[20px] px-10 py-4 w-auto justify-center items-center my-8"
        >
          Refresh
        </Button>
      </div>
    </>
  );
}
