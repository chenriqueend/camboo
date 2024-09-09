import PostCard from "@/components/feed/PostCard";
import RightSidePanel from "@/components/feed/RightSidePanel";
import { SideMenu } from "@/components/feed/SideMenu";
import LayoutComponents from "@/components/shared/LayoutComponents";
import { interests } from "@/mocks/Interests";
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
          <div>
            <p className="ml-4 font-bold text-lg whitespace-nowrap">
              Navegue por categoria:
            </p>
            <div className="ml-4 flex flex-wrap gap-2 w-full items-center">
              {interests.map((interest) => (
                <div
                  key={interest.id}
                  className="flex items-center h-3 p-4 text-sm bg-white rounded-xl border-[#5001A8] border-2"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded-full cursor-pointer"
                  />
                  <span className="ml-2">{interest.name}</span>
                </div>
              ))}
            </div>
          </div>
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
