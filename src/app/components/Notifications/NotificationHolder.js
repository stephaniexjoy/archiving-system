"use client";
import React, { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Notifcations from "./Notifcations";

const NotificationHolder = ({ notifications }) => {
  const [notificationsCache, setNotificationsCache] = useState([]);
  const [updateCache, setUpdateCache] = useState(true);

  useEffect(() => {
    if (updateCache) {
      localStorage.setItem(
        "notifications.new",
        JSON.stringify(notifications.new)
      );
      localStorage.setItem(
        "notifications.past",
        JSON.stringify(notifications.past)
      );
      setUpdateCache(false); // Reset the flag
    }
  }, [notifications, updateCache]);

  useEffect(() => {
    // Function to retrieve items from localStorage
    const retrieveCachedNotifications = (key) => {
      const cachedNotifications = localStorage.getItem(key);
      return cachedNotifications ? JSON.parse(cachedNotifications) : [];
    };

    // Retrieve cached notifications for "new" and "past"
    const cachedNotificationsNew =
      retrieveCachedNotifications("notifications.new");
    const cachedNotificationsPast =
      retrieveCachedNotifications("notifications.past");

    // Update state with cached notifications
    setNotificationsCache({
      new: cachedNotificationsNew,
      past: cachedNotificationsPast,
    });
  }, []);

  return (
    <Tabs defaultValue="new" className="w-full">
      <TabsList>
        <TabsTrigger value="new">New</TabsTrigger>
        <TabsTrigger value="past">Past</TabsTrigger>
      </TabsList>
      <TabsContent value="new">
        <Card>
          <CardContent className="mt-2 space-y-2">
            <Notifcations notifications={notifications.new} content={"new"} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="past">
        <Card>
          <CardContent className="mt-2 space-y-2">
            <Notifcations notifications={notifications.past} content={"past"} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default NotificationHolder;
