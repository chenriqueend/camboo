import Carousel from "@/components/feed/Carousel/Carousel";
import PostCard from "@/components/feed/PostCard";
import RightSidePanel from "@/components/feed/RightSidePanel";
import { SideMenu } from "@/components/feed/SideMenu";
import LayoutComponents from "@/components/shared/LayoutComponents";
import { interests } from "@/mocks/Interests";
import React from "react";

export default function FeedPage() {
  return (
    <div className="flex col gap-5">
      <section className="md:max-w-[20%] hidden md:pl-16 md:inline">
        <LayoutComponents.stickyPlaceholder>
          <div className="p-4">
            <SideMenu />
          </div>
        </LayoutComponents.stickyPlaceholder>
      </section>
      <div className=" md:w-1/3 w-full flex gap-5">
        <section className="flex flex-col gap-5 ">
          <div className="hidden sm:flex sm:flex-col">
            <p className="font-bold text-lg whitespace-nowrap font-newOrder mb-2">
              Navegue por categoria
            </p>
            <Carousel interests={interests} />
          </div>

          <PostCard />
          <PostCard />
          <PostCard />
        </section>
        <section className="hidden md:w-1/3 md:inline">
          <RightSidePanel />
        </section>
      </div>
    </div>
  );
}
