import React from "react";
import { Avatar } from "@nextui-org/avatar";
import ImagesFeedSelector from "@/components/feed/Image/ImagesFeedSelector";
import { Button } from "@nextui-org/button";
import PostDropDownMenu from "./PostDropDownMenu";

import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

type ImagesFeedSelectorProps = React.ComponentProps<typeof ImagesFeedSelector>;

type Props = ImagesFeedSelectorProps & {
  userName: string;
  userProfileImgURL: string;
  publishedAt: string;
  postTitle: string;
};

const DropDownMenu = (props: { userName: string }) => {
  return (
    <PostDropDownMenu>
      <DropdownMenuGroup>
        <DropdownMenuItem className="cursor-pointer">
          Salvar para depois...
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Chat com {props.userName.split(" ")[0]}...
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Ver outros anúncios do {props.userName.split(" ")[0]}...
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </PostDropDownMenu>
  );
};

const PostHeader = (props: Props) => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <Avatar isBordered radius="lg" src={props.userProfileImgURL} />
        <div className="flex-1">
          <p className="text-[.9rem] font-semibold text-blue-gray-800">
            {props.userName}
          </p>
          <p className="text-[.8rem] text-gray-500">
            Publicado em {props.publishedAt}
          </p>
        </div>
        <div className="">
          <DropDownMenu userName={props.userName} />
        </div>
      </div>
      <div>
        <h1 className="text-[1.8rem]">{props.postTitle}</h1>
      </div>
    </>
  );
};

export default function PostCardMobile(props: Props) {
  return (
    <section className="flex flex-col gap-2">
      <PostHeader {...props} />
      <ImagesFeedSelector imgURLS={props.imgURLS} />
      {/* <Button color="primary" fullWidth={true} radius="sm">
        Click me
      </Button> */}
    </section>
  );
}
