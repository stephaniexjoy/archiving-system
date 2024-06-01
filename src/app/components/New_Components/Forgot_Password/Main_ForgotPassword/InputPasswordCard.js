import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Form from "./Form";

const InputPasswordCard = async ({ userInfo }) => {
  const getFormData = async (formData) => {
    "use server";
  };
  return (
    <div class="flex justify-center items-center m-auto">
      <div class="py-40 px-4">
        <Card
          className=" bg-slate-200 w-[300px] h-[350px] 
        sm:w-[550px]  sm:h-[350px]
        md:w-[550px]  md:h-[350px]
        lg:w-[550px]  lg:h-[350px]
        xl:w-[550px]  xl:h-[350px]
        2xl-[550px]  2xl:h-[350px]"
        >
          <CardHeader>
            <CardTitle className="text-center">Reset Password</CardTitle>
            <CardDescription className="text-center">
              Set your new Password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form userInfo={userInfo} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InputPasswordCard;
