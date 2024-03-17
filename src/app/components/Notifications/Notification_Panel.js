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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Notification_Panel = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <img
            className="h-[70%] w-[45px] mt-[.8%] ml-[1%]
          sm:h-[70%] sm:w-[60px] sm:mt-[.8%] sm:ml-[1.3%]
          md:h-[70%] md:w-[75px] md:mt-[.8%] md:ml-[1.6%]
          lg:h-[70%] lg:w-[83px] lg:mt-[.8%] lg:ml-[1.8%]
          xl:h-[70%] xl:w-[84px] xl:mt-[.8%] xl:ml-[1.8%]
          2xl:h-[70%] 2xl:w-[85px] 2xl:mt-[.8%] 2xl:ml-[2%]"
            alt="Notification Logo"
            src="../photos/Notificationlogo.png"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1225px] sm:max-h-[750px]">
        <DialogHeader>
          <DialogTitle>Notification Panel</DialogTitle>
          <DialogDescription>View Notifications here.</DialogDescription>
        </DialogHeader>

        <Card>
          <CardContent className="mt-2 space-y-2">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Notification_Panel;
