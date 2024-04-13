import { ScrollArea } from "@/components/ui/scroll-area";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Form from "./Form";

async function EditProfileFaculty_Dialog({ user }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="
          bg-[#5B0505] text-[15px] text-white text-center w-[100px] h-[30px]
          sm:bg-[#5B0505] sm:text-[17px] sm:text-white sm:text-center sm:w-[130px] sm:h-[32px]
          md:bg-[#5B0505] md:text-[19px] md:text-white md:text-center md:w-[130px] md:h-[34px]
          lg:bg-[#5B0505] lg:text-[21px] lg:text-white lg:text-centerlg: lg:w-[180px] lg:h-[36px]
          xl:bg-[#5B0505] xl:text-[23px] xl:text-white xl:text-center xl:w-[220px] xl:h-[38px]
          2xl:bg-[#5B0505] 2xl:text-[25px] 2xl:text-white 2xl:text-center 2xl:w-[250px] 2xl:h-[40px]
          "
        >
          EDIT
        </button>
      </DialogTrigger>
      <DialogContent className="p-12 sm:p-12 md:p-8 lg:p-12 max-w-[450px] sm:max-w-[900px] md:max-w-[850px] lg:max-w-[1600px] h-[800px] bg-slate-50">
        <ScrollArea className="h-[700px] w-[350px] sm:w-[700px] md:w-[800px] lg:w-[1500px] rounded-md border p-4 bg-slate-50 shadow-xl">
          <Form user={user} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default EditProfileFaculty_Dialog;
