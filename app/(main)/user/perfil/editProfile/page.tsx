"use client";
import EnterNewCommentsInput from "@/components/comments/EnterNewCommentsInput";
import ProfileBadge from "@/components/user/ProfileBadge";
import NavBreadcrumbs from "@/components/navigation/NavBreadcrumbs";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import BackBtn from "@/components/shared/BackBtn";
import "@/app/globals.css";
import TabNavigator from "@/components/shared/TabNavigator";
import Tab from "@/components/shared/Tab";
import { Input } from "@/components/ui/Input";
import TextAreaWithCounter from "@/components/ui/TextAreaWithCounter";
import ImageUploader from "@/components/ui/ImageUploader";
import CheckboxWithLabel from "@/components/ui/CheckboxWithLabel";
import { SelectCustomArrow } from "@/components/ui/SelectCustomArrow";
import Tag from "@/components/ui/Tag";
import { Button } from "@/components/ui/button";
import CalendarTag from "@/components/ui/CalendarTags";

export default function editProfile() {
  const daysOfWeek = ["SEG", "TER", "QUA", "QUI", "SEX", "SÁB", "DOM"];
  const [activeTab, setActiveTab] = useState("produto");
  const [withoutBrand, setWithoutBrand] = useState(false);
  const [usedProduct, setUsedProduct] = useState(false);
  const [newProduct, setNewProduct] = useState(false);
  const [openToNegociate, setOpenToNegociate] = useState(false);

  return (
    <div className="w-full rounded-md">
      <BackBtn path="/feed" />
      <section className="flex flex-col gap-4  py-4 pt-0 mt-4">
        <section className="flex gap-4">
          <div className="flex flex-col w-1/2 gap-2">
            <ImageUploader
              height="443.42px"
              width="504px"
              placeholderImage="https://avatars.githubusercontent.com/u/103892127?v=4"
            />
          </div>
          <div className="w-1/2">
            <div className="w-full">
              <section className="p-2 ">
                <p className="text-[#041737] text-base font-bold mb-1 ml-1">
                  Seu nome
                </p>
                <Input
                  type="text"
                  name="title"
                  placeholder="carlos henrique"
                  required
                />
              </section>
              <section className="p-2 ">
                <p className="text-[#041737] text-base font-bold mb-1 ml-1">
                  email
                </p>
                <Input
                  type="text"
                  name="title"
                  placeholder="exemplo@gmail.com"
                  required
                />
              </section>
              <section className="p-2 ">
                <p className="text-[#041737] text-base font-bold mb-1 ml-1">
                  telefone
                </p>
                <Input
                  type="text"
                  name="title"
                  placeholder="(xx) 0 0000.0000"
                  required
                />
              </section>
              <section className="pl-4 flex gap-8 mt-4">
                <CheckboxWithLabel
                  label="perfil pessoal"
                  checked={usedProduct}
                  onChange={setUsedProduct}
                  hasLabel={true}
                />
                <CheckboxWithLabel
                  label="perfil empresa"
                  checked={newProduct}
                  onChange={setNewProduct}
                  hasLabel={true}
                />
              </section>
              <section className="p-2 mt-2">
                <p className="text-[#041737] text-base font-bold mb-1 ml-1">
                  sobre você
                </p>
                <TextAreaWithCounter />
              </section>
              <section className="flex flex-col gap-4 pl-3">
                <p className="text-[#041737] text-base font-bold">
                  Em que você tem interesse?
                </p>
                <div className="flex gap-4">
                  <Tag
                    key={""}
                    text={"computador"}
                    isActive={false}
                    onClick={() => {}}
                  />
                  <Tag
                    key={"index"}
                    text={"eletrodoméstico"}
                    isActive={false}
                    onClick={() => {}}
                  />
                </div>
                <Input
                  type="text"
                  name="title"
                  placeholder="computadores"
                  required
                  disabled={withoutBrand}
                />
                <section className=" mt-2">
                  <p className="text-[#041737] text-base font-bold mb-1 ">
                    Experiência profissional
                  </p>
                  <TextAreaWithCounter />
                </section>
              </section>
              <Button
                className="bg-dark-blue-gradient hover:opacity-90 mt-6 w-[328px] ml-2"
                hasLink={true}
                linkURL={"/user/perfil"}
                textButton={"salvar"}
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
