"use client";
import { Spinner } from "@material-tailwind/react";
import React from "react";

export default function MySpinner() {
  return (
    <div>
      <Spinner
        className="w-4 h-4 text-white"
        color="light-blue"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    </div>
  );
}
