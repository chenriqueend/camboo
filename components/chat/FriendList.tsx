"use client";
import React from "react";
import { Friend } from "./types";

interface FriendsListProps {
  friends: Friend[];
  onFriendClick: (friend: Friend) => void;
}

export const FriendsList: React.FC<FriendsListProps> = ({
  friends,
  onFriendClick,
}) => {
  return (
    <div className="w-[340px] h-[470px] bg-white shadow-lg overflow-hidden">
      {/* Lista de amigos */}
      <div className="p-4 h-full overflow-y-auto">
        {friends.length > 0 ? (
          friends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between p-2 border-b cursor-pointer hover:bg-gray-100"
              onClick={() => onFriendClick(friend)}
            >
              <div className="flex items-center mr-4">
                <img
                  src={friend.imageUrl}
                  alt={`${friend.firstName} ${friend.lastName}`}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold whitespace-nowrap">{`${friend.firstName} ${friend.lastName}`}</p>
                  <p className="text-gray-500 text-sm">{friend.lastMessage}</p>
                </div>
              </div>
              <div className="flex items-center">
                {friend?.notificationsCount > 0 ? (
                  <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {friend.notificationsCount}
                  </span>
                ) : null}
                <span className="text-gray-400 text-xs ml-2">
                  {friend.lastMessageDate}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No friends available.</p>
        )}
      </div>
    </div>
  );
};
