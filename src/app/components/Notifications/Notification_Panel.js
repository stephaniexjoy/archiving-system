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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Notifcations from "./Notifcations";
import { getActivities } from "@/app/lib/actions/actions";
import NotificationHolder from "./NotificationHolder";

function filterByDate(activities) {
  const filteredActivities = {
    new: [],
    past: [],
  };

  const today = new Date();
  const oneDayAgo = new Date(today);
  oneDayAgo.setDate(today.getDate() - 1);

  console.log(today);

  activities.forEach((activity) => {
    const createdAtDate = new Date(activity.createdAt);
    if (createdAtDate >= oneDayAgo && createdAtDate <= today) {
      filteredActivities.new.push(activity);
    } else {
      filteredActivities.past.push(activity);
    }
  });

  return filteredActivities;
}

const Notification_Panel = async () => {
  const activities = await getActivities();
  const notifications = filterByDate(activities);

  console.log(notifications);
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
        <NotificationHolder notifications={notifications} />

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Notification_Panel;
