import React from "react";

type User = {
  id: number;
  name: string;
};

type ChatUserListProps = {
  users: User[];
  onSelectUser: (user: User) => void;
};

const ChatUserList: React.FC<ChatUserListProps> = ({ users, onSelectUser }) => {
  return (
    <div className="bg-gray-200 p-4 h-full overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Usuários</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="p-2 cursor-pointer hover:bg-gray-300"
            onClick={() => onSelectUser(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatUserList;
