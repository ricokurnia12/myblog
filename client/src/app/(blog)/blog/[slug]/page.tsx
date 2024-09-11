import React, { Suspense } from "react";
import Post from "./post";
import { serialize } from "next-mdx-remote/serialize";
interface PageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: PageProps) => {
  console.log(params);

  const response = await fetch(
    `${process.env.API}/api/user/post/${params.slug}`,
    { cache: "no-store" }
  );

  const data = await response.json(); //
  console.log(data);
  const mdxContent = data.data; // Assuming 'data.data' contains the MDX content

  // Serialize the MDX content
  // const mdxSource = await serialize(mdxContent);
  // console.log("mdxsource", mdxSource);

  return (
    <Suspense fallback={<>Loading...</>}>
      <div>
        <Post content={mdxContent} />
      </div>
    </Suspense>
  );
};

export default Page;
