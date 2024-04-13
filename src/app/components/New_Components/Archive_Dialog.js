import { deleteUser } from "@/app/lib/actions/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

export default function Archive_Dialog({ userId }) {
  console.log(userId);
  const { toast } = useToast();
  const handleDeleteButton = async () => {
    const archiveUser = await deleteUser(userId);
    return archiveUser;
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="border-none bg-[#5B0505] rounded-md h-auto text-white text-[17px] font-semibold cursor-pointer px-4">
            ARCHIVE
          </Button>
        </DialogTrigger>
        <DialogContent>
          <div className="text-center">
            <div className="mb-5 font-semibold text-xl text-[#7A6C6C] dark:text-gray-400">
              Are you sure you want to delete?
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <DialogClose asChild>
              <Button className="bg-[#5B0505] w-36 font-bold">NO</Button>
            </DialogClose>
            <Button
              onClick={() => {
                const test = handleDeleteButton();
                console.log(test);
                if (test) {
                  toast({
                    description: "Successfully Deleted a User.",
                    variant: "destructive",
                  });
                }
              }}
              className="bg-[#5B0505] w-36 font-bold"
            >
              YES
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
