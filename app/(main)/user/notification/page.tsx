"use client";
import React, { useState } from "react";
import "@/app/globals.css";
import TabNavigator from "@/components/shared/TabNavigator";
import {
  NotificationType,
  notifications,
} from "@/components/shared/Notifications";
import {
  NegociationType,
  negociations,
} from "@/components/shared/Negotiations";
import TextAreaWithCounter from "@/components/ui/TextAreaWithCounter";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("notificações");

  return (
    <div className="w-[853px] mt-32">
      <TabNavigator
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={["notificações", "negociações"]}
      />
      {activeTab === "notificações" ? (
        <div>
          {notifications.map((notification: NotificationType) => (
            <div
              key={notification.id}
              className="flex items-start p-2 border-b border-gray-200 justify-center"
            >
              <img
                src={notification.image}
                alt="avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="flex gap-1">
                  <p className="font-bold text-sm">{notification.clientName}</p>
                  <p className="text-gray-600 text-xs font-normal mt-[1px]">
                    {notification.secondaryComment}
                  </p>
                  {notification.post ? (
                    <p className="text-[#127FFE] text-xs mt-[1px] cursor-pointer">
                      {notification.post}
                    </p>
                  ) : null}
                </div>
                <p className="font-sora text-xs font-thin leading-relaxed">
                  {notification.date}
                </p>
                {notification.type === "question" && (
                  <div className="mt-2 flex flex-col space-x-2 text-left">
                    <p className="text-[#041737] text-normal text-sm ml-2 mb-1 ">
                      {notification.question}
                    </p>
                    <TextAreaWithCounter
                      placeholder="responder"
                      width="w-[592px]"
                      maxChars={100}
                    />
                  </div>
                )}
              </div>
              {notification.type === "friend_request" && (
                <div className="flex justify-end align-middle space-x-2 mt-1">
                  <button className="bg-[#d1e1fb] text-[#071166] py-2 px-6 rounded hover:bg-[#95BEFE] text-xs font-semibold">
                    aceitar
                  </button>
                  <button className="bg-[#FF7E7566] text-[#071166] py-2 px-6 rounded hover:bg-[#bd4646] text-xs font-semibold">
                    recusar
                  </button>
                </div>
              )}
              {notification.type !== "friend_request" &&
                notification.hasPost === true && (
                  <div className="flex justify-end align-middle space-x-2 mt-1">
                    <button className="bg-[#d1e1fb] text-[#071166] py-2 px-6 rounded hover:bg-[#95BEFE] text-xs font-semibold">
                      ver
                    </button>
                  </div>
                )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {negociations.map((negociation: NegociationType) => (
            <div
              key={negociation.id}
              className="flex items-start p-2 border-b border-gray-200 justify-center"
            >
              <img
                src={negociation.image}
                alt="avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="flex gap-1">
                  <p className="font-bold text-sm">{negociation.clientName}</p>
                  <p className="text-gray-600 text-xs font-normal mt-[1px]">
                    {negociation.secondaryComment}
                  </p>
                  {negociation.post ? (
                    <p className="text-[#127FFE] text-xs mt-[1px] cursor-pointer">
                      {negociation.post}
                    </p>
                  ) : null}
                </div>
                <p className="font-sora text-xs font-thin leading-relaxed">
                  {negociation.date}
                </p>
              </div>
              {negociation.sendMessage === true && (
                <div className="flex justify-end align-middle space-x-2 mt-1">
                  <button className="bg-[#d1e1fb] text-[#071166] py-2 px-6 rounded hover:bg-[#95BEFE] text-xs font-semibold min-w-[180px] ">
                    enviar mensagem
                  </button>
                </div>
              )}
              {negociation.sendMessage === false && (
                <div className="flex justify-end align-middle space-x-2 mt-1">
                  <button className="bg-[#d1e1fb] text-[#071166] py-2 px-6 rounded hover:bg-[#95BEFE] text-xs font-semibold min-w-[180px] flex-nowrap">
                    conversar com {negociation.firstName}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
