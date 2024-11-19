"use client";
import React from "react";
import Editor from "@/components/editor/editor";
import { MultiSelect } from "@/components/custom/multiSelect";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { JSONContent } from "novel";
import { defaultValue } from "./default-value";
import { Button } from "@/components/ui/button";
const Editor2 = () => {
  const form = useForm();
  const [value, setValue] = React.useState<string>("");
  const defaultValue = {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [],
      },
    ],
  };
  const jenisTes = [
    { value: "mbti", label: "MBTI" },
    { value: "disc", label: "DISC" },
    { value: "tkd", label: "TKD" },
    { value: "ketelitian", label: "Ketelitian" },
  ];
  return (
    <div className="grid grid-cols-12">
      <div className="mt-20 px-8 col-span-12 lg:col-span-8">
        <div className="h-16">
          <h1>Title</h1>
          <Editor initialValue={defaultValue} onChange={setValue} />
        </div>
        {/* <div className="rounded-md col-span-12 lg:col-span-4 h-full">
          <h1>Slug</h1>
          <Input className="h-full" />
        </div> */}

        {/* <div className="grid grid-cols-12 gap-4 mt-8">
        <div className="col-span-6 ">
          <h1 className="text-md font-semibold my-2">Description</h1>
          <Editor initialValue={defaultValue} onChange={setValue} />
        </div>
        <div className="col-span-6 h-full">
          <MultiSelect
            form={form}
            items={jenisTes}
            fieldName="JenisTes"
            placeholder="Categories"
          />
        </div>
      </div> */}
        <h1 className="text-lg font-semibold mt-12 mb-4">Blog Content</h1>
        <div className="grid grid-cols-12 gap-4 min-h-96">
          <div className="col-span-12">
            <Editor initialValue={defaultValue} onChange={setValue} />
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 mt-24">
        <div className=" h-full border rounded-md p-2">
          <h1>Options Post</h1>
          <div className="rounded-md col-span-12 lg:col-span-4 h-full">
            <h1>Slug</h1>
            <Input className="" />

            <div className="">
              <h1 className="text-md font-semibold my-2">Description</h1>
              <Editor initialValue={defaultValue} onChange={setValue} />
            </div>
            <div className="">
              <MultiSelect
                form={form}
                items={jenisTes}
                fieldName="JenisTes"
                placeholder="Categories"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-2 m-2">
          <Button className="w-full">Draft</Button>
          <Button className="w-full bg">Upload</Button>
        </div>
      </div>
    </div>
  );
};

export default Editor2;
