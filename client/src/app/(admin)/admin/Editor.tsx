"use client";
import React from "react";
import Editor from "@/components/editor/editor";
import { JSONContent } from "novel";
import { defaultValue } from "./default-value";
const Editor2 = () => {
  const [value, setValue] = React.useState<string>("");
  console.log(value);

  const defaultValue = {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [],
      },
    ],
  };
  return (
    <div className="mt-20">
      <Editor initialValue={defaultValue} onChange={setValue} />
    </div>
  );
};

export default Editor2;
