'use client'
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

type loggedUserType = {
  id: string,
  email: string,
  userName?: string,
  avatarUrl?: string
}


export default function useLoggeduser() {
  const supabase = createClient()
  const [user, setUser] = useState<loggedUserType | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const { data: { subscription: authListener } } = supabase.auth.onAuthStateChange((event, session) => {

      if (session && session.user && session.user.email && session.user.user_metadata) {
        if (session.user.role === 'authenticated') {
          setUser(_prev => {
            return {
              id: session.user.id,
              email: session.user.email || "",
              userName: session.user.user_metadata.full_name as string,
              avatarUrl: session.user.user_metadata.avatar_url as string
            }
          })
        }
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => {
      authListener?.unsubscribe()
    }
  }, [])


  return [user, loading] as const;
}