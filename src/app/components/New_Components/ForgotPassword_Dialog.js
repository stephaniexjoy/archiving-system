import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import ForgotPassword_Form from "./Forgot_Password/ForgotPassword_Form";

export default function ForgotPassword_Dialog() {
  0;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <b
          className="
                border-none ml-40 mt-6 text-[9px] w-auto [text-decoration:underline] inline-block text-[#FF7E7E] cursor-pointer
                sm:border-none sm:ml-72 sm:mt-6 sm:text-sm sm:w-auto sm:[text-decoration:underline] sm:inline-block sm:text-[#FF7E7E] sm:cursor-pointer
                md:border-none md:ml-[75%] md:mt-6 md:text-md md:w-auto md:[text-decoration:underline] md:inline-block md:text-[#FF7E7E] md:cursor-pointer
                lg:border-none lg:ml-[76%] lg:mt-6 lg:text-lg lg:w-auto lg:[text-decoration:underline] lg:inline-block lg:text-[#FF7E7E] lg:cursor-pointer
                xl:border-none xl:ml-[68%] xl:mt-6 xl:text-xl xl:w-auto xl:[text-decoration:underline] xl:inline-block xl:text-[#FF7E7E] xl:cursor-pointer
                2xl:border-none 2xl:ml-[72%] 2xl:mt-10 2xl:text-2xl 2xl:w-auto 2xl:[text-decoration:underline] 2xl:inline-block 2xl:text-[#FF7E7E] 2xl:cursor-pointer
                "
        >
          Forgot Password?
        </b>
      </DialogTrigger>
      <DialogContent className="w-full p-8">
        <DialogHeader className="space-y-6">
          <DialogTitle className="text-2xl text-[#444242] dark:text-white text-center">
            PASSWORD REQUEST
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-center w-full max-w-md items-center space-x-2 p-6">
          <ForgotPassword_Form />
        </div>
      </DialogContent>
    </Dialog>
  );
}
