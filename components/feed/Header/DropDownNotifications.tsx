"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NotificationType,
  notifications,
} from "@/components/shared/Notifications";

export type PropsType = {
  email?: string;
  children: React.ReactNode;
};

export default function DropDownNotifications(props: PropsType) {
  const NotificationItem = ({
    notification,
  }: {
    notification: NotificationType;
  }) => (
    <div className="flex items-start p-2 ">
      <img
        src={notification.image}
        alt="avatar"
        className="w-10 h-10 rounded-full mr-4"
      />
      <div className="flex-1">
        <p className="font-bold text-sm">{notification.clientName}</p>
        <p className="text-gray-600 text-xs font-extralight">
          {notification.secondaryComment}
        </p>
        {notification.type === "friend_request" && (
          <div className="mt-2 flex space-x-2">
            <button className="bg-[#d1e1fb] text-[#071166] py-2 px-6 rounded hover:bg-[#95BEFE] text-xs font-semibold">
              aceitar
            </button>
            <button className="bg-[#FF7E7566] text-[#071166] py-2 px-6 rounded hover:bg-[#bd4646] text-xs font-semibold">
              recusar
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const visibleNotifications = notifications.slice(0, 4);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 max-h-[560px] overflow-hidden">
        <DropdownMenuLabel className="text-lg font-bold">
          Notificações
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {visibleNotifications.map((notification) => (
          <DropdownMenuItem className="cursor-pointer">
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        {notifications.length > 4 && (
          <Link href="/user/notification">
            <div className="flex justify-center p-3">
              <Button className="text-[#071166] w-[328px]" variant="secondary">
                Ver mais
              </Button>
            </div>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
