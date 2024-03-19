import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";


import Form from "./Form";

export default function AddCategory_Dialog({ category }) {
  console.log(category);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border-none mt-1 ml-16 text-center bg-[#675454] text-orange-200 outline-color rounded shadow-lg w-[130px]">
          Add Category
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New {category}</DialogTitle>
        </DialogHeader>
        <Form category={category} />
      </DialogContent>
    </Dialog>
  );
}
