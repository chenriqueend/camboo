import { cn } from "@/lib/utils"
import React from 'react'

export default function ProfileBadge(props: { imgUrl?: string, className?: string }) {
  let { imgUrl } = props
  imgUrl = imgUrl || '/assets/profilePic.jpeg'
  return (
    <div>
      <div className={cn(`
      flex
      items-center
      justify-center
      w-10
      p-1
      rounded-full
      cursor-pointer
      bg-blue-gray-100`, props.className)}>
        <img className="rounded-full" src={imgUrl} />
      </div>
    </div>
  )
}
