'use client';
import { useOpenedChats } from "@/store";
import React from 'react'

type ChatPaneItemProps = {
  profileId: string,
  profilePictureURL: string,
  displayName: string
}
export default function ChatPaneItem(props: ChatPaneItemProps) {
  const [_, openedChatsSet] = useOpenedChats();
  return (
    <div onClick={() => {
      // console.log("profileId", props.profileId)
      openedChatsSet({ target: props.profileId })
    }}>
      {/* {props.children} */}
      <div className="flex items-center cursor-pointer select-none">
        <img className="rounded-full w-[50px]" src={props.profilePictureURL} alt="" />
        <div className="flex flex-col border-b-[1px] pl-2">
          <h2 className="font-semibold">
            {props.displayName}
          </h2>
          <div className="w-full">
            <p className="h-[40px] text-[0.8rem] line-clamp-2 font-light  text-blue-gray-300">
              Elisa: nao tem problema, pode me mandar uma mensagem. Talvez na quinta feira seja melhor para nos falarmos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis magni eius iste maxime ut minima. Aspernatur veniam amet unde, earum aliquam sed magnam a repellat doloremque iure ullam dignissimos autem molestiae ex similique, voluptates modi accusamus tempore possimus quisquam. Facere!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
