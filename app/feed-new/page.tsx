import React from "react";

import PostCardMobile from "@/components/feed/PostCardMobile";
import NewTradeItemForm from "./upload2/NewTradeItemForm";

export default async function NewFeedPage() {
  const postObj = {
    userName: "Rodrigo Martins",
    userProfileImgURL: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    publishedAt: "14/01 às 21:42",
    postTitle: "Yamaha YZF R3 2018",
    imgURLS: [
      "/assets/ads/1.jpeg",
      "/assets/ads/2.jpeg",
      "/assets/ads/3.jpeg",
      "/assets/ads/4.jpeg",
      "/assets/ads/5.webp",
    ],
  };

  const postObj2 = {
    userName: "Carlos Henrique",
    userProfileImgURL: "https://avatars.githubusercontent.com/u/103892127?v=4",
    publishedAt: "14/01 às 21:42",
    postTitle: "Yamaha YZF R3 2018",
    imgURLS: [
      "/assets/ads/1.jpeg",
      "/assets/ads/2.jpeg",
      "/assets/ads/3.jpeg",
      "/assets/ads/4.jpeg",
      "/assets/ads/5.webp",
    ],
  };

  return (
    <section className="flex flex-col min-h-max gap-8 w-full px-2 my-4">
      <PostCardMobile {...postObj} />
      <PostCardMobile {...postObj2} />
      <PostCardMobile {...postObj} />
    </section>
  );
}
