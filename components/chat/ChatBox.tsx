"use client";
import React from "react";
import { ChatMessage } from "./types";
import { Button } from "@/components/ui/button";
import { Friend } from "./types";

interface ChatProps {
  friend: Friend;
  onClose: () => void;
}

export const ChatBox: React.FC<ChatProps> = ({ friend, onClose }) => {
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = React.useState<string>("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: messages.length + 1, text: inputMessage },
      ]);
      setInputMessage("");
    }
  };

  return (
    <div className="w-[328px]  shadow-lg  ml-4">
      {/* Header */}
      <div className="bg-dark-blue-gradient text-white px-4 py-2 flex justify-between items-center">
        <h2 className="text-lg font-semibold whitespace-nowrap">{`${friend.firstName} ${friend.lastName}`}</h2>
        <Button
          onClick={onClose}
          className="text-white bg-transparent font-semibold"
          size={"sm"}
          textButton={"X"}
        />
      </div>
      {/* Messages */}
      <div className="p-4 h-64 overflow-y-auto bg-gray-100">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg.id} className="bg-blue-100 p-2 my-2 rounded-md">
              {msg.text}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No messages yet.</p>
        )}
      </div>

      {/* Input and Send Button */}
      <div className="p-4 bg-white flex items-center border-t">
        <input
          type="text"
          className="flex-grow border rounded-md px-3 py-2 mr-2 text-gray-800 focus:outline-none"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <Button
          className="bg-dark-blue-gradient hover:opacity-90 rounded-md bold"
          onClick={handleSendMessage}
          textButton={"Enviar"}
        />
      </div>
    </div>
  );
};
