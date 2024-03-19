import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog";
import Form from "./Form";

export default async function UploadMaterial_Dialog({ sessionUser }) {
  console.log(sessionUser);

  const uploadMaterial = async (formData) => {
    "use server";
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="bg-transparent text-white text-xl mt-2 w-full font-bold cursor-pointer
                2xl:left-[1300px] 2xl:text-center 2xl:bg-transparent 2xl:text-white 2xl:text-2xl 2xl:font-bold 2xl:h-10 2xl:w-64 2xl:p-2 2xl:m-2 2xl:cursor-pointer"
        >
          UPLOAD MATERIAL
        </button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[1000px]">
        <Form sessionUser={sessionUser} />
      </DialogContent>
    </Dialog>
  );
}
