"use client";
import useLoggeduser from "@/hooks/useLoggedUser";
import { Avatar } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function UserAvatar() {
  const [avatarUrl, setavatarUrl] = useState("");
  const [user, loading] = useLoggeduser();

  useEffect(() => {
    if (user) {
      setavatarUrl(
        user.avatarUrl || "https://i.pravatar.cc/150?u=a042581f4e29026024d"
      );
    }
  }, [user]);
  return (
    <div>
      {!loading && (
        <Avatar
          className="cursor-pointer"
          isBordered
          radius="lg"
          src={avatarUrl}
        />
      )}
    </div>
  );
}
