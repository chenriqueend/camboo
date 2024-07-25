'use client'
import React, { ButtonHTMLAttributes, ReactNode, useState } from 'react'
import { Button } from "../ui/button"
import MySpinner from "../shared/Spinner"
import { is } from "date-fns/locale"
import { cn } from "@/lib/utils"

export default function LoginEnterButton(props: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  const [isLoading, isLoadingSet] = useState(false)

  return (
    <div>
      <Button
        className={cn(`flex w-full gap-1 `)}
        disabled={isLoading}
        onClick={() => {
          setTimeout(() => {
            isLoadingSet(true)
          }, 50);
        }}
        {...props}
      >
        {isLoading && <MySpinner />}
        {props.children}
      </Button>
    </div>
  )
}
