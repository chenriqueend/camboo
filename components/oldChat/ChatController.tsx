"use client";
import React, { useCallback, useEffect } from 'react'
import ChatBox from "./ChatBox"
import ChatPane from "./ChatPane"
import { useChatAllMessagesAtom, useChatProfilesList, useOpenedChats } from "@/store";
import { UserProfileType } from "@/types/userProfile";
import { createClient } from "@/utils/supabase/client";
import { type } from "os";
import { useCronLikeEffect } from "@/hooks/useCronLikeEffect";
import useLoggeduser from "@/hooks/useLoggedUser";

export default function ChatController(props: { userProfiles: UserProfileType[], currentUserId: string }) {
  const [openedChats, openedChatsSet] = useOpenedChats();
  const [chatProfiles, chatProfilesSet] = useChatProfilesList();
  const [chatAllMessages, chatAllMessagesSet] = useChatAllMessagesAtom();
  const [user, loading] = useLoggeduser()

  useCronLikeEffect(() => {
    // Your periodic task here (e.g., fetching data)
    console.log('This will run every 6 seconds', new Date());
  }, 60 * 1000); // milliseconds

  useEffect(() => {
    chatProfilesSet(props.userProfiles.map(profile => ({
      profileId: profile.profileId,
      displayName: profile.fullName,
      profilePictureURL: profile.avatarUrl
    })))
  }, [props])

  useEffect(() => {
    const supabase = createClient()
    const channels = supabase.channel('custom-insert-channel')
      .on('postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'chatMessages' },
        (payload) => {
          const { new: data } = payload
          type newDataType = {
            created_at: string,
            from_user_id: string,
            id: number,
            message: string,
            to_user_id: string
          }
          const newData: newDataType = data as any
          console.log('Change received!', newData.from_user_id, newData.message)
          chatAllMessagesSet(prev => [...prev, {
            id: "" + newData.id,
            from_user_id: newData.from_user_id,
            to_user_id: newData.to_user_id,
            msg: newData.message,
            time: new Date(newData.created_at),
            user: 'undefined'
          }]);
        }
      )
      .subscribe()

    return () => {
      channels.unsubscribe()
    }
  }, [])


  const getProfileProfile = useCallback(
    (profileId: string) => {
      const profiles = chatProfiles;
      const profile = profiles.find(profile => profile.profileId === profileId)
      if (profile) return profile.profilePictureURL
      return ""
    },
    [chatProfiles]
  )

  const getProfileFullName = useCallback(
    (profileId: string) => {
      const profiles = chatProfiles;
      const profile = profiles.find(profile => profile.profileId === profileId)
      if (profile) return profile.displayName
      return ""
    },
    [chatProfiles],
  )

  return (
    <>
      <div className="relative">
        {user && user.id}
        <pre>
          {JSON.stringify(openedChats)}
        </pre>
        <pre>
          {JSON.stringify(chatAllMessages, null, 2)}
        </pre>
      </div>

      <div className="fixed bottom-0 right-0 z-50 flex">
        <div className="flex items-end gap-2">
          {openedChats && openedChats.map((chat, i) => {
            return (
              <ChatBox
                key={chat.target}
                targetId={chat.target}
                profilePictureURL={getProfileProfile(chat.target)}
                profileFullName={getProfileFullName(chat.target)}
                currentUserId={props.currentUserId}
              />
            )
          })}

          <ChatPane chatUsers={props.userProfiles.map((profile => ({
            displayName: profile.fullName,
            profileId: profile.profileId,
            profilePictureURL: profile.avatarUrl
          })))} />
        </div>
      </div>
    </>
  )
}
