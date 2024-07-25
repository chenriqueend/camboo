import PostCard from "@/components/feed/PostCard";
import RightSidePanel from "@/components/feed/RightSidePanel";
import { SideMenu } from "@/components/feed/SideMenu";
import LayoutComponents from "@/components/shared/LayoutComponents";
import React from "react";

export default function FeedPage() {
  return (
    <div className="flex col gap-5">
      <section className="max-w-[20%] pl-16">
        <LayoutComponents.stickyPlaceholder>
          <div className="p-4 l">
            <SideMenu />
          </div>
        </LayoutComponents.stickyPlaceholder>
      </section>
      <div className="w-2/3 flex gap-5">
        <section className="flex flex-col w-2/3 gap-5">
          <PostCard />
          <PostCard />
          <PostCard />
        </section>
        <section className="w-1/3">
          <RightSidePanel />
        </section>
      </div>
    </div>
  );
}
