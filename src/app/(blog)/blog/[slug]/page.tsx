import React from "react";
import Post from "./post";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: PageProps) => {
  console.log(params);

  const response = await fetch(
    `http://localhost:3000/api/user/post/${params.slug}`
  );

  const data = await response.json(); //

  return (
    <div>
      <Post mdxContent={data.data} />
    </div>
  );
};

export default Page;
