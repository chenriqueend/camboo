"use client";
import React, { useState } from "react";
import ChatUserList from "./chatUserList";
import ChatWindow from "./chatWindow";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const Chat: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<{
    id: number;
    name: string;
  } | null>(null);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-64 bg-gray-100 border-t flex">
      <div className="w-1/4 border-r">
        <ChatUserList users={users} onSelectUser={setSelectedUser} />
      </div>
      <ChatWindow user={selectedUser} />
    </div>
  );
};

export default Chat;
