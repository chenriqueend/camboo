import React from "react";
import ChatController from "@/components/chat/ChatController";
import { getChatUsersProfiles } from "@/components/chat/actions";
import { getAuthUser, getSupabaseUser } from "@/actions/auth";

export default async function BlankPage() {
  const userProfiles = await getChatUsersProfiles();
  const user = await getAuthUser();
  console.log(user?.id);
  // console.log(userProfiles);

  return (
    <div className="flex flex-col min-h-screen true-gray-200">
      {/* justify-center pt-16 */}

      <pre>{JSON.stringify(user, null, 2)}</pre>

      {user && user.id && (
        <ChatController userProfiles={userProfiles} currentUserId={user.id} />
      )}
    </div>
  );
}
