'use server'

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { UserProfileType } from "@/types/userProfile";


export async function getChatUsersProfiles(): Promise<UserProfileType[]> {

  const userPhoto = [
    'https://randomuser.me/api/portraits/men/36.jpg',
    'https://randomuser.me/api/portraits/women/61.jpg',
    'https://randomuser.me/api/portraits/men/0.jpg',
    'https://randomuser.me/api/portraits/men/83.jpg',
    'https://randomuser.me/api/portraits/women/51.jpg'
  ];

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const ret = await supabase.from('profiles').select('*')
  const profilesArr = ret?.data ?? []
  const { data: { user } } = await supabase.auth.getUser();

  if (profilesArr.length === 0 || user === null) { return [] }

  return profilesArr.map((profile, idx) => {
    return {
      profileId: profile.id,
      userName: profile?.username ?? "",
      fullName: profile.full_name ?? "",
      avatarUrl: profile.avatar_url == null ? userPhoto[idx] : profile.avatar_url
    }
  }).filter((profile) => profile.profileId !== user.id)
}