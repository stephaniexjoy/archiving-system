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
import Image from "next/image";

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
        <button >
          <Image
            className="
            lg:h-[50px] lg:w-[450px] lg:mt-[.8%] lg:ml-[1%] 
            h-[50px] w-[450px] mt-[.8%] ml-[1%] 
            sm:h-auto sm:w-[60px] sm:mt-[.8%] sm:ml-[1.3%] 
            md:h-auto md:w-[75px] md:mt-[.8%] md:ml-[1.6%] 
            xl:h-auto xl:w-[450px] xl:mt-[.8%] xl:ml-[1.8%] 
            2xl:h-auto 2xl:w-[90px] 2xl:mt-[.8%] 2xl:ml-[2%]"
            alt="Notification Logo"
            src="/photos/Notificationlogo.png"
            width={121}
            height={108}
          />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[500px] max-h-[800px] sm:max-w-[600px] sm:max-h-[700px] md:max-w-[600px] md:max-h-[700px] lg:max-w-[800px] lg:max-h-[900px] xl:max-w-[800px] xl:max-h-[900px] 2xl:max-w-[800px] 2xl:max-h-[900px] ">
        <DialogHeader>
          <DialogTitle className="font-bold">Notification Panel</DialogTitle>
          <DialogDescription className="font-bold">
            View Notifications here.
          </DialogDescription>
        </DialogHeader>
        <NotificationHolder notifications={notifications} />

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Notification_Panel;
