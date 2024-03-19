import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";

import Form from "./Form";

function CreateAccount_Dialog({ sessionUser }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <b
          className="
          bg-transparent hover-transparent mt-2 text-xl font-bold cursor-pointer
          sm:bg-transparent sm:hover-transparent sm:mt-2 sm:text-xl sm:font-bold sm:cursor-pointer
          md:bg-transparent md:hover-transparent md:mt-2 md:text-2xl md:font-bold md:cursor-pointer
          lg:bg-transparent lg:hover-transparent lg:mt-2 lg:text-2xl lg:font-bold lg:cursor-pointer
          xl:bg-transparent xl:hover-transparent xl:mt-2 xl:text-2xl xl:font-bold xl:cursor-pointer
          2xl:bg-transparent 2xl:hover-transparent 2xl:mt-2 2xl:text-3xl 2xl:font-bold 2xl:cursor-pointer
          "
        >
          CREATE ACCOUNT
        </b>
      </DialogTrigger>
      <DialogContent
        className="
        grid flex-row items-center justify-center p-6 max-w-[80%] max-h-[60%] text-center overflow-x-auto rounded-lg
        sm:grid sm:flex-row sm:items-center sm:justify-center sm:p-6 sm:max-w-[53%] sm:max-h-[60%] sm:text-start sm:overflow-x-auto sm:rounded-lg
        md:grid md:flex-row md:items-center md:justify-center md:p-10 md:max-w-[53%] md:max-h-[60%] md:text-start md:overflow-y-auto md:rounded-lg
        lg:grid lg:flex-col lg:items-center lg:justify-center lg:p-10 lg:max-w-[60%] lg:max-h-[72%] lg:text-start lg:overflow-y-auto lg:rounded-lg
        xl:grid xl:flex-col xl:items-center xl:justify-center xl:p-10 xl:max-w-[60%] xl:max-h-[75%] xl:text-start xl:overflow-y-auto xl:rounded-lg
        2xl:p-10 2xl:max-w-[50%] 2xl:max-h-[78%] 2xl:text-start 2xl:overflow-y-auto 2xl:rounded-lg
      "
      >
        <Form sessionUser={sessionUser} />
      </DialogContent>
    </Dialog>
  );
}

export default CreateAccount_Dialog;
