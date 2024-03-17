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

const Notifcations = ({ notifications }) => {
  const dismissNotification = (id) => {
    if (typeof window !== "undefined") {
      const updatedNotifications = notifications.filter(
        (notification) => notification.id === id
      );
      console.log(updatedNotifications);
      setNotificationsCache(updatedNotifications);
      setUpdateCache(true);
    }
  };

  console.log(notifications);
  return (
    <>
      {notifications.map((notification, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{notification.type}</CardTitle>
            <CardDescription>
              {notification.createdAt.toLocaleString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Uploaded By: {notification.name}</p>
            <button onClick={() => dismissNotification(notification.id)}>
              Dismiss
            </button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Notifcations;
