"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
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
<div className="overflow-y-scroll overflow-x-hidden h-[400px]">
  {notifications.map((notification, index) => (
    <Card key={index} className="bg-[#F5EEE6] w-auto md:w-3/4 lg:w-3/3 xl:w-3/4 2xl:w-4/5 md:mx-24 my-6 rounded-t-lg rounded-b-lg shadow-2xl ">
      <div className="text-center relative">
        <button
          onClick={() => dismissNotification(notification.id)}                
          className="absolute top-0 right-0 -mt-1 mr-2"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <CardTitle className="mt-4">{notification.type}</CardTitle>
        <CardDescription>
          {notification.createdAt.toLocaleString()}
        </CardDescription>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="relative flex justify-center items-center">
          <p>Uploaded By: {notification.name}</p>
        </CardFooter>
      </div>
    </Card>
  ))}
</div>



    </>
  );
};

export default Notifcations;
