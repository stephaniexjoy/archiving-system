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
        <Card className="w-96 bg-slate-200 h-auto py-4">
        <CardHeader>
          <CardTitle className= "text-center">Reset Password</CardTitle>
          <CardDescription className = "text-center">Set your new Password</CardDescription>
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
