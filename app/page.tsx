import { NextPage } from "next";
import { use } from "react";
import { getPostNames } from "../lib/posts";

async function getBlogPosts() {
  const fileNames = getPostNames();
  return fileNames;
}

const Page: NextPage = () => {
  const names = use(getBlogPosts());

  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Page;
