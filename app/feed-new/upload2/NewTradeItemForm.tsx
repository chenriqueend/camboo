"use client";
import { useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "../../../components/ui/Input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createClient } from "@/utils/supabase/client";

import useLoggeduser from "@/hooks/useLoggedUser";
import MultiImageExample from "./MultiImageExample";

const schema = z.object({
  title: z.string().min(5),
  description: z.string().min(10),
});

type FormFields = z.infer<typeof schema>;

export default function NewTradeItemForm() {
  const [user, loading] = useLoggeduser();
  const [uploadedImagesURLS, setuploadedImagesURLS] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormFields) => {
    const supabase = createClient();
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const { data: newTradeItem, error } = await supabase
      .from("tradeItems")
      .insert({
        name: data.title,
        description: data.description,
        categories: ["test"],
        metadata: { test: "test" },
        profile_id: user?.id,
        imagesURLS: uploadedImagesURLS,
      });
    console.log(newTradeItem, error);
  };

  return (
    <div className="flex flex-col overflow-y-scroll px-4 mb-2">
      <form
        action=""
        className="flex flex-col gap-4 flex-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="">
          <h1 className="font-semibold text-xl my-4">Criar novo anúncio</h1>
          <Label htmlFor="title">Titulo</Label>
          <Input
            {...register("title")}
            type="text"
            id="title"
            placeholder="Titulo do anúncio"
          />
          {errors.title && (
            <div className="text-red-500">{errors.title.message}</div>
          )}
        </div>
        <div className="">
          <Label htmlFor="message">Descrição</Label>
          <Textarea
            {...register("description")}
            placeholder="Descrição do seu anúncio"
            id="message"
          />
          {errors.description && (
            <div className="text-red-500">{errors.description.message}</div>
          )}
        </div>
        <MultiImageExample
          onUploadedImages={(urls) => {
            setuploadedImagesURLS(urls);
          }}
        />
        <div className="w-full">
          <Button className="w-full" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Enviando..." : "Criar novo anúncio"}
          </Button>
        </div>
      </form>
    </div>
  );
}
