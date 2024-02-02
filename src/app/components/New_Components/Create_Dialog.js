import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Create_Dialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className=" bg-[#5B0505] text-white w-[700px] h-[80px] p-1 mx-4 rounded-lg -scroll-mt-1.5 text-2xl font-bold hover">
            CREATE ACCOUNT
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[750px] bg-gray-300">
          <DialogHeader>
            <DialogTitle className=" font-extrabold text-3xl">
              Create Account
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-2 ">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-left text-lg ">
                Name:
              </Label>
              <Input id="name" value="" className="col-span-3 bg-gray-100" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-left text-lg ">
                Role:
              </Label>
              <select className="col-span-3 h-9 rounded-md cursor-pointer text-center bg-gray-100">
                <option value="">Select Role</option>
                <option value="Faculty">Faculty</option>
                <option value="Secretary">Secretary</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-left text-lg ">
                Category:
              </Label>
              <select className="col-span-3 h-9 rounded-md cursor-pointer text-center bg-gray-100">
                <option value="">Select category</option>
                <option value="Associate Dean">Associate Dean</option>
                <option value="Secretary">Secretary</option>
                <option value="Faculty">Faculty</option>
                <option value="Unit Head">Unit Head</option>
                <option value="Coordinator">Coordinator</option>
              </select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="specialization" className="text-left text-md ">
                Specialization:
              </Label>
              <Input
                id="specialization"
                value=""
                className="col-span-3 bg-gray-100"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="eligibility" className="text-left text-md ">
                Eligibility/ Professional License:
              </Label>
              <Input
                id="eligibility"
                value=""
                className="col-span-3 bg-gray-100"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-left text-lg ">
                Email:
              </Label>
              <Input id="email" value="" className="col-span-3 bg-gray-100" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-left text-lg ">
                Password:
              </Label>
              <Input
                id="password"
                value=""
                className="col-span-3 bg-gray-100"
              />
            </div>
          </div>
          <DialogFooter>
            <div className="grid grid-cols-1 items-center gap-2">
              <Button type="create" className="w-24">
                CREATE
              </Button>
            </div>
            <div className="grid grid-cols-1 items-center gap-1">
              <Button type="back" className="w-24">
                BACK
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Create_Dialog;
