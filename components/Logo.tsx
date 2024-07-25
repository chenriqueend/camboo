import Image from "next/image";
import React from "react";

export default function Logo(props: { width?: string; height?: string }) {
  return (
    <div>
      <Image
        src="/assets/logo.svg"
        alt="logo"
        fill={true}
        // width={+(props.width || 200)}
        // height={+(props.height || 200)}
      />
    </div>
  );
}
