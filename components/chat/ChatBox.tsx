"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "../ui/Input";
import ProfileBadge from "../user/ProfileBadge";
import { createClient } from "@/utils/supabase/client";

import { IoMdClose } from "react-icons/io";
import { HiOutlineChevronDown } from "react-icons/hi";
import {
  useChatAllMessagesAtom,
  useFilteredMessagesAtom,
  useOpenedChats,
} from "@/store";
import { cn } from "@/lib/utils";
import { IMsgDataTypes } from "@/types/chat";
import { compact, sortBy, take, takeRight } from "lodash";
import { format } from "date-fns";
import { APP_CONFIG } from "@/config";

const MessageWrapper = (props: {
  children: React.ReactNode;
  opposite?: boolean | null;
}) => {
  return (
    <div
      className={`flex flex-col gap-3 ${
        props.opposite === true && "items-end text-right"
      }`}
    >
      {props.children}
    </div>
  );
};

type PropsType = {
  targetId: string;
  profilePictureURL: string;
  profileFullName: string;
  currentUserId: string;
};
export default function ChatBox(props: PropsType) {
  const [chatMessages, chatMessagesSet] = useState<IMsgDataTypes[]>([]);
  const [isChatBoxOpen, isChatBoxOpenSet] = useState(true);
  const messageInput = useRef<HTMLInputElement>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const [_, openedChatsSet] = useOpenedChats();
  const [chatAllMessages, chatAllMessagesSet] = useChatAllMessagesAtom();
  const [filteredMessagesAtom] = useFilteredMessagesAtom({
    from_user_id: props.targetId,
    to_user_id: props.currentUserId,
  });

  type messageInputType = typeof messageInput;

  const sendNewMessage = useCallback(
    async (messageInput: messageInputType) => {
      const newMessage = messageInput.current?.value || "";
      if (newMessage === "") return;
      const supabase = createClient();

      // chatMessagesSet(prev => [...prev, {
      //   id: `id_${Date.now()}`, msg: newMessage, time: Date.now(), user: 'me'
      // }])
      if (messageInput.current) messageInput.current.value = "";

      const ret = await supabase.from("chatMessages").insert([
        {
          // from_user_id: loggedUser?.id,
          from_user_id: props.currentUserId,
          to_user_id: props.targetId,
          message: newMessage,
        },
      ]);
      if (ret.error) console.log({ error: ret.error });
    },
    [props.targetId, props.currentUserId]
  );

  const closeChat = useCallback(() => {
    isChatBoxOpenSet((prev) => !prev);
  }, []);

  useEffect(() => {
    const chatBox = chatBoxRef.current;

    if (!chatBox) return;

    const scrollToEnd = () => {
      chatBox.scroll({ top: chatBox.scrollHeight, behavior: "smooth" });
    };

    // Using MutationObserver for performance and modern standards
    const observer = new MutationObserver(scrollToEnd);
    observer.observe(chatBox, { childList: true });

    // Cleanup function
    return () => observer.disconnect();
  }, [chatBoxRef]); // include chatBoxRef in dependency array if it's expected to change

  const pushMessagesToChatBox = useCallback(
    (data: any[]) => {
      chatMessagesSet(() => {
        return data.map((msg: any) => {
          // console.log("msg", msg);
          return {
            id: "" + msg.id,
            msg: msg.message,
            time: msg.created_at,
            user: msg.from_user_id === props.currentUserId ? "me" : "other",
            from_user_id: msg.from_user_id,
            to_user_id: msg.to_user_id,
          };
        });
      });
    },
    [chatMessages]
  );

  useEffect(() => {
    const fetchMessages = async (targetId: string, currentUserId: string) => {
      if (targetId === currentUserId) return; // dont fetch messages if user is talking to himself
      const supabase = createClient();
      const { data, error } = await supabase
        .from("chatMessages")
        .select("*")
        .or(
          `from_user_id.eq.${props.currentUserId},to_user_id.eq.${props.currentUserId}`
        )
        .or(`from_user_id.eq.${props.targetId},to_user_id.eq.${props.targetId}`)
        .order("created_at", { ascending: false })
        .limit(APP_CONFIG.chat.initialMessagesToLoad);

      if (error) console.log({ error });

      if (data) {
        let msgsReOrdered: any = data.map((msg) => {
          return { ...msg, created_at_dt: new Date(msg.created_at) };
        });

        msgsReOrdered = sortBy(msgsReOrdered, "created_at_dt");

        let _msgsReOrdered = [...msgsReOrdered];

        if (
          _msgsReOrdered.length > APP_CONFIG.chat.initialMessagesCountonScreen
        ) {
          _msgsReOrdered = takeRight(
            _msgsReOrdered,
            APP_CONFIG.chat.initialMessagesCountonScreen
          );
        }

        pushMessagesToChatBox(_msgsReOrdered);

        setTimeout(() => {
          pushMessagesToChatBox(msgsReOrdered);
        }, APP_CONFIG.chat.timeoutUntilLoadMoreMessages);
      }
    };

    fetchMessages(props.targetId, props.currentUserId);
  }, [props.targetId, props.currentUserId]);

  useEffect(() => {
    console.log("chatAllMessages useEffect", filteredMessagesAtom);

    // console.log({ filteredMessagesAtomIdsSetArrayFilteredSortedMapped });

    chatMessages.length > 0 &&
      chatMessagesSet((prev) => {
        // get from filteredMessagesAtom on messages not yet on chatMessages
        const filteredMessagesAtomIds = filteredMessagesAtom.map(
          (msg) => msg.id
        );
        const filteredMessagesAtomIdsSetArray = Array.from(
          new Set(filteredMessagesAtomIds)
        );
        const filteredMessagesAtomIdsSetArrayFiltered =
          filteredMessagesAtomIdsSetArray.filter((id) => {
            const alreadyExists = prev.find((msg) => msg.id === id);
            return !alreadyExists;
          });

        const filteredMessagesAtomIdsSetArrayFilteredSortedMapped =
          filteredMessagesAtomIdsSetArrayFiltered.map((id) => {
            return filteredMessagesAtom.find((msg) => msg.id === id);
          });

        const newChatMessages =
          filteredMessagesAtomIdsSetArrayFilteredSortedMapped.map((msg) => {
            if (
              msg &&
              ((msg.from_user_id === props.currentUserId &&
                msg.to_user_id === props.targetId) ||
                (msg.from_user_id === props.targetId &&
                  msg.to_user_id === props.currentUserId))
            ) {
              // safe guard, same logics is placed at the Atom filteredMessagesAtomFamily
              // TODO: remove this safe guard
              return {
                id: msg.id,
                msg: msg.msg,
                time: new Date(msg.time),
                user: msg.from_user_id === props.currentUserId ? "me" : "other",
                from_user_id: msg.from_user_id,
                to_user_id: msg.to_user_id,
              } as IMsgDataTypes;
            }
          });
        return sortBy([...prev, ...compact(newChatMessages)], "time");
      });
  }, [filteredMessagesAtom.length]);

  const getMessageData = useCallback((dateTime: Date) => {
    try {
      const formattedDate = format(new Date(dateTime), "dd/MM/yyyy HH:mm:ss");
      return formattedDate;
    } catch (error) {
      return "";
    }
  }, []);

  return (
    <div className="text-sm">
      {/* fixed bottom-0 */}
      <section
        id="chatBox"
        className="
            bg-white
            flex flex-col
            divide-y-2
            divide-gray-200
            rounded-t-lg
            w-[300px]
            shadow-xl
            ring-1
            ring-gray-900/5
            "
      >
        <header className="flex items-center gap-4 px-2 py-1">
          {/* <ProfileBadge imgUrl='/assets/raquel_profile.jpeg' /> */}
          <ProfileBadge imgUrl={props.profilePictureURL} />
          <section className="flex justify-between w-full">
            <h1 className="text-sm font-semibold">
              {props.profileFullName}
              {/* - {chatAllMessages.length} */}
            </h1>
            <div className="flex gap-2 text-muted-foreground">
              <IoMdClose
                size={18}
                className="cursor-pointer"
                onClick={() => {
                  openedChatsSet({ target: props.targetId }, "remove");
                }}
              />
              <div
                className={cn({
                  "rotate-180": !isChatBoxOpen,
                })}
              >
                <HiOutlineChevronDown
                  onClick={() => closeChat()}
                  size={20}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </section>
        </header>
        <section
          className={cn(
            `flex flex-col flex-grow divide-y-2 divide-gray-200 h-[350px]`,
            {
              hidden: !isChatBoxOpen,
            }
          )}
        >
          <div
            ref={chatBoxRef}
            className="flex flex-col  text-[.8em] flex-1 w-full gap-3 p-3 overflow-y-scroll"
          >
            {chatMessages &&
              chatMessages.length > 0 &&
              chatMessages.map((chat) => {
                return (
                  <MessageWrapper key={chat.id} opposite={chat.user === "me"}>
                    <div className="">
                      <p className="inline-block p-1 pl-2 pr-4 break-words break-all rounded-sm bg-blue-gray-100">
                        {chat.msg}
                      </p>
                      <div className="text-blue-gray-200">
                        {getMessageData(chat.time)}
                      </div>
                    </div>
                  </MessageWrapper>
                );
              })}
          </div>
          <footer className="flex gap-3 p-3">
            <Input
              ref={messageInput}
              className="flex-1"
              type="text"
              placeholder="Digite sua mensagem"
            />
            <button onClick={() => sendNewMessage(messageInput)}>Enviar</button>
          </footer>
        </section>
      </section>
      {/* <pre>
        {JSON.stringify({ id: loggedUser?.id }, null, 2)}
        {JSON.stringify({ openedChats }, null, 2)}
      </pre> */}
    </div>
  );
}
