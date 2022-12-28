import { client } from "../../libs/client";
import blogStyles from "../../styles/Blog.module.css";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { NextSeo } from "next-seo";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export default function blogId({ blog }) {
  const date = new Date(blog.publishedAt);
  return (
    <>
      <NextSeo
        title={blog.title}
        description={blog.description}
        openGraph={{
          url: `https://isak-portfolio.vercel.app/blog/${blog.id}`,
          title: blog.title,
          description: blog.description,
          images: [
            {
              url: blog.eyecatch.url,
            },
          ],
        }}
      />
      <main className="w-2/3 mx-auto text-gray-700">
        <div className="relative h-56 sm:h-72 md:h-96 m-3">
          <Image
            src={blog.eyecatch.url}
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h1 className="text-3xl text-center my-5">{blog.title}</h1>
        <div className="mb-5">
          投稿：{date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
          className={blogStyles.post}
        />
      </main>
      <div className="border-t border-gray-200 p-5">
        <Link
          href="/blog"
          className="flex flex-row items-center mx-auto text-xl w-fit hover:text-blue-400 duration-300 cursor-pointer"
        >
          <Icon icon="fa6-solid:arrow-right-to-bracket" className="mr-2" />
          <span>Blog</span>
        </Link>
      </div>
    </>
  );
}
