"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function PlayGroundPage() {
  const [nomeCompleto, setnomeCompleto] = useState("Raquel");
  return (
    <div>
      <h2
        style={{
          color: "purple",
        }}
      >
        {nomeCompleto}
      </h2>
      <Button
        variant="destructive"
        onClick={() => {
          setnomeCompleto(nomeCompleto + " Brito");
        }}
      >
        teste
      </Button>
    </div>
  );
}

{
  /* <div className="border-medium border-red-400 ">
      <div> PlayGroundPage </div> */
}

{
  /* <div className="w-[50%] m-auto">
        <Input
          placeholder="Escreva um comentário"
          type="text"
          className="focus-visible:ring-transparent"
        />
      </div> */
}
// </div>
