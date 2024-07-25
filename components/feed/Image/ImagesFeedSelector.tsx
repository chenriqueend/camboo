"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageDisplay = ({
  src,
  objectFit,
}: {
  src: string;
  objectFit: "contain" | "cover" | "fill" | "none" | "scale-down";
}) => {
  return (
    <div className="absolute w-full h-full overflow-hidden">
      <div
        id="bgImage"
        style={{
          backgroundImage: `url("${src}")`,
          backgroundRepeat: "no-repeat",
          width: "120%",
          height: "120%",
          backgroundSize: "cover",
          backgroundPosition: "50% center",
          filter: "blur(32px)",
        }}
      ></div>
      <Image src={src} fill style={{ objectFit: objectFit }} alt="" />
    </div>
  );
};

type Props = {
  imgURLS: string[];
};
export default function ImagesFeedSelector(props: Props) {
  const [selectedImageIdx, setselectedImageIdx] = useState(0);
  return (
    <div className="flex gap-2">
      <div className="flex-1">
        <div className="relative w-full h-[335px] rounded-md overflow-hidden">
          <ImageDisplay
            objectFit="contain"
            src={props.imgURLS[selectedImageIdx]}
          />
        </div>
      </div>
      <div className="w-[70px] flex flex-col gap-2">
        {props.imgURLS.map((url, idx) => (
          <div
            key={url}
            className="relative w-full h-[60px] rounded-md overflow-hidden cursor-pointer"
            onClick={() => setselectedImageIdx(idx)}
            style={{
              opacity: selectedImageIdx === idx ? 1 : 0.45,
            }}
          >
            <ImageDisplay objectFit="cover" src={url} />
          </div>
        ))}
      </div>
    </div>
  );
}
