import AuthButton from "@/components/auth/AuthButton"
import LoginOrRegisterCmp from "@/components/auth/LoginOrRegisterCmp"

import React from 'react'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string, mode?: string }
}) {

  return (
    <div className="flex flex-col items-center ">
      {
        !searchParams.mode &&
        <LoginOrRegisterCmp searchParams={searchParams} formType="login" />
      }

      {
        searchParams.mode && searchParams.mode === 'pwd' &&
        <LoginOrRegisterCmp searchParams={searchParams} formType="onlyUserAndPassword" />
      }
      {/* <AuthButton /> */}

    </div>
  )
}
