import React from "react";

type ChatWindowProps = {
  user: { id: number; name: string } | null;
};

const ChatWindow: React.FC<ChatWindowProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="flex-1 p-4">
        Selecione um usuário para começar o chat.
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col p-4">
      <h2 className="text-lg font-bold mb-4">Chat com {user.name}</h2>
      <div className="flex-1 bg-white p-4 border rounded overflow-y-auto">
        {/* Mensagens do chat */}
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default ChatWindow;
