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

export default function Announcement() {
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
            <ImageUploader height="443.42px" width="504px" />
            <section className="grid grid-cols-3 gap-2">
              <ImageUploader height="152px" width="133.73px" />
              <ImageUploader height="152px" width="133.73px" />
              <ImageUploader height="152px" width="133.73px" />
              <ImageUploader height="152px" width="133.73px" />
              <ImageUploader height="152px" width="133.73px" />
            </section>
          </div>
          <div className="w-1/2">
            <TabNavigator
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={["produto", "serviço"]}
            />
            <div className="w-full">
              {activeTab === "produto" ? (
                <Tab key="produto" label="produto">
                  <section className="p-2 mt-12">
                    <p className="text-[#041737] text-base font-bold mb-1 ml-1">
                      Título
                    </p>
                    <Input
                      type="text"
                      name="title"
                      placeholder="ex.: macbook pro 2020 ou vestido farm novidade"
                      required
                    />
                  </section>
                  <section className=" p-2 mt-4">
                    <p className="text-[#041737] text-base font-bold mb-1 ml-1">
                      Descrição
                    </p>
                    <TextAreaWithCounter />
                    <section className="flex gap-4 mt-2">
                      <div className="flex flex-col">
                        <p className="text-[#041737] text-base font-bold ml-1">
                          Marca
                        </p>
                        <Input
                          type="text"
                          name="title"
                          placeholder="ex.: apple"
                          width="174px"
                          required
                          disabled={withoutBrand}
                        />
                      </div>
                      <div className="mt-8">
                        <CheckboxWithLabel
                          label="produto sem marca"
                          checked={withoutBrand}
                          onChange={setWithoutBrand}
                          hasLabel={true}
                        />
                      </div>
                    </section>
                    <section className="flex gap-4 mt-6">
                      <SelectCustomArrow label="Departamento">
                        <option className="" value="" disabled selected>
                          Selecione uma opção
                        </option>
                        <option value="option1">Opção 1</option>
                        <option value="option2">Opção 2</option>
                        <option value="option3">Opção 3</option>
                      </SelectCustomArrow>
                      <SelectCustomArrow label="Categoria">
                        <option className="text-xs" value="" disabled selected>
                          Selecione uma opção
                        </option>
                        <option value="option1">Opção 1</option>
                        <option value="option2">Opção 2</option>
                        <option value="option3">Opção 3</option>
                      </SelectCustomArrow>
                    </section>
                    <section className="flex gap-8 my-10">
                      <CheckboxWithLabel
                        label="produto usado"
                        checked={usedProduct}
                        onChange={setUsedProduct}
                        hasLabel={true}
                      />
                      <CheckboxWithLabel
                        label="produto novo"
                        checked={newProduct}
                        onChange={setNewProduct}
                        hasLabel={true}
                      />
                    </section>
                    <section className="flex flex-col gap-4 mt-4">
                      <p className="text-[#041737] text-base font-bold">
                        Em que você tem interesse para troca?
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
                      <div className="mt-2">
                        <CheckboxWithLabel
                          label="estou aberto a negociação"
                          checked={openToNegociate}
                          onChange={setOpenToNegociate}
                          hasLabel={true}
                        />
                      </div>
                      <div className="mt-2">
                        <SelectCustomArrow label="Tipo de entrega">
                          <option
                            className="text-xs"
                            value=""
                            disabled
                            selected
                          >
                            Em mãos
                          </option>
                          <option value="option1">Opção 1</option>
                          <option value="option2">Opção 2</option>
                          <option value="option3">Opção 3</option>
                        </SelectCustomArrow>
                      </div>
                    </section>
                  </section>
                </Tab>
              ) : (
                <div className="md:min-w-[369px]">
                  <Tab key="servico" label="servico">
                    <section className="p-2 mt-12">
                      <p className="text-[#041737] text-base font-bold mb-1 ml-1">
                        Título
                      </p>
                      <Input
                        type="text"
                        name="title"
                        placeholder="ex.: macbook pro 2020 ou vestido farm novidade"
                        required
                      />
                    </section>
                    <section className="p-2 mt-4">
                      <p className="text-[#041737] text-base font-bold mb-1 ml-1">
                        Descrição
                      </p>
                      <TextAreaWithCounter />
                    </section>
                    <section className="p-2">
                      <p className="text-[#041737] text-base font-bold">
                        Qual a sua disponibilidade?
                      </p>
                      <div className="border-b-2 border-gray-300 my-4"></div>
                      <CalendarTag daysOfWeek={daysOfWeek}></CalendarTag>
                    </section>
                    <section className="p-2">
                      <p className="text-[#041737] text-base font-bold mt-8 mb-4">
                        Em que você tem interesse para troca?
                      </p>
                      <div className="flex gap-4 mb-2">
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
                      />
                    </section>
                    <div className="p-2 mt-4 ml-2">
                      <CheckboxWithLabel
                        label="estou aberto a negociação"
                        checked={openToNegociate}
                        onChange={setOpenToNegociate}
                        hasLabel={true}
                      />
                    </div>
                  </Tab>
                </div>
              )}
            </div>
            <Button
              className="bg-dark-blue-gradient hover:opacity-90 mt-6"
              hasLink={true}
              linkURL={"/feed"}
              textButton={"compartilhar produto"}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
