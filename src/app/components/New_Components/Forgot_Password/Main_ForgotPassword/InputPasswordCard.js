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
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>Set your new Password</CardDescription>
        </CardHeader>
        <CardContent>
          <Form userInfo={userInfo} />
        </CardContent>
      </Card>
    </div>
  );
};

export default InputPasswordCard;
