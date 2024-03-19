import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";


export default function Archive_Dialog() {
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
            <Button className="bg-[#5B0505] w-36 font-bold">YES</Button>
            <Button className="bg-[#5B0505] w-36 font-bold">NO</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
