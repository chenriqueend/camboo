'use client';
import { profile } from "console";
import React from 'react'

interface propsType {
  id: string,
  username: string,
  full_name?: string
}
export default function ProfileItem(profile: propsType) {
  return (
    <li>
      {
        `${profile.username} ${profile.full_name}`
      }
      <button onClick={() => console.log('foi')} className="flex items-center gap-4 p-2">OK</button>
    </li>
  )
}
