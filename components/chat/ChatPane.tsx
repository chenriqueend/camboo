'use client';

import ProfileBadge from "../user/ProfileBadge";
import ProfileItem from "./ProfileItem";
import { getChatUsersProfiles } from './actions'
import { TbDots } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import ChatPaneItem from "./ChatPaneItem";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChatUsersType } from "@/types/userProfile";

type ChatPaneProps = {
  chatUsers: ChatUsersType[]
}

export default function ChatPane(props: ChatPaneProps) {
  const [isChatPaneOpen, isChatPaneOpenSet] = useState(true)

  return (
    <div className="">
      {/* fixed bottom-0 right-0 */}
      <div
        //  mt-[74px]
        className={
          cn(`flex
              flex-col
              bg-white
              mr-2
              rounded-t-lg
              ring-1
              ring-blue-gray-100
              w-[300px]
              text-sm`,
            {
              'h-[calc(100vh-74px)]': isChatPaneOpen
            })}>
        <header className="flex justify-between py-1 px-2 border-b-[1px] ">
          <div className="flex items-center gap-2">
            <ProfileBadge imgUrl="/assets/profilePic2.jpeg" />
            <h1 className="font-semibold">Messaging</h1>
          </div>
          <div className="flex items-center gap-4 mr-2">
            <TbDots className="cursor-pointer" />
            <FaRegEdit className="cursor-pointer" />
            {isChatPaneOpen && <HiOutlineChevronDown onClick={() => isChatPaneOpenSet(prev => !prev)} className="cursor-pointer" />}
            {!isChatPaneOpen && <HiOutlineChevronUp onClick={() => isChatPaneOpenSet(prev => !prev)} className="cursor-pointer" />}
          </div>
        </header>
        <section className={cn(!isChatPaneOpen ? 'hidden' : '')}>
          <div className="flex justify-center w-full">
            <div className="w-[95%] my-2 flex items-center p-2 h-9 rounded-lg bg-blue-gray-50">
              <FaSearch />
              <input className="flex-1 p-2 text-sm bg-transparent border-none focus:border-none focus:ring-0 placeholder-blue-gray-500" type="text" placeholder="Search messages" />
              <LuSettings2 className="cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2">
            {props.chatUsers && props.chatUsers.map((profile, i) => {
              return (
                <ChatPaneItem key={i}
                  profileId={profile.profileId}
                  profilePictureURL={profile.profilePictureURL}
                  displayName={profile.displayName} />
              )
            })}
          </div>
        </section>

      </div>
    </div>
  )
}
