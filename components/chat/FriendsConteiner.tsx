"use client";
import React from "react";
import { Friend } from "./types"; // Importa a tipagem Friend
import { ChatBox } from "./ChatBox"; // Importa o componente Chat
import { FriendsList } from "./FriendList"; // Importa o componente FriendsList

interface FriendsContainerProps {
  friends: Friend[];
}

export const FriendsContainer: React.FC<FriendsContainerProps> = ({
  friends,
}) => {
  const [selectedFriend, setSelectedFriend] = React.useState<Friend | null>(
    null
  );

  const handleFriendClick = (friend: Friend) => {
    setSelectedFriend(friend);
  };

  const closeChat = () => {
    setSelectedFriend(null);
  };

  return (
    <div className="flex gap-4">
      {selectedFriend && (
        <div className="mt-auto">
          <ChatBox friend={selectedFriend} onClose={closeChat} />
        </div>
      )}
      <FriendsList friends={friends} onFriendClick={handleFriendClick} />
    </div>
  );
};
