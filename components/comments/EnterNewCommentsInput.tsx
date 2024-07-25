import React from "react";
import { Input } from "../ui/Input";
import ProfileBadge from "../user/ProfileBadge";

export default function EnterNewCommentsInput() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <ProfileBadge />
        <Input placeholder="Escreva um comentário" />
      </div>
    </div>
  );
}
