import AddCategory_Dialog from "@/app/components/New_Components/AddCategory_Dialog/AddCategory_Dialog";
import Edit_FileForm from "../Edit_FileForm";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Edit_button = ({ filePath, fileOwner }) => {
  const { data: session, status } = useSession();
  const { toast } = useToast();

  return (
    <>
      {session.user.id === fileOwner ? (
        <div className="">
          <Dialog>
            <DialogTrigger className="focus:outline-none h-10 font-bold">
              <Button>Edit</Button>
            </DialogTrigger>
            <DialogContent className="bg-white max-w-[1000px] max-h-[800px] h-auto py-6 px-6 mx-auto overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Edit</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-row ml-12 gap-x-40">
                    <AddCategory_Dialog category={"Material"} />
                    <AddCategory_Dialog category={"Course"} />
                  </div>
                  <div className="flex flex-row font-semibold text-[#5B0505] w-full gap-x-0 py-5 px-10 ml-0">
                    <div className="ml-20 inline-block text-[20px] md:text-[23px]">
                      MATERIAL
                    </div>
                    <div className="ml-56 inline-block text-[20px] md:text-[23px]">
                      PROGRAM
                    </div>
                    <div className="ml-48 inline-block text-[20px] md:text-[23px]">
                      PERMISSION
                    </div>
                  </div>
                  <div className="">
                    <Edit_FileForm filePath={filePath} />
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col w-full"></div>
              <div className="flex flex-col bottom-0 items-center justify-center w-full h-auto"></div>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Cannot Edit File ",
              variant: "destructive",
              description: "You do not own this file.",
            });
          }}
        >
          Edit
        </Button>
      )}
    </>
  );
};

export default Edit_button;
