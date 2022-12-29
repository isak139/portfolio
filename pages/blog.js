import Image from "next/image";
import Link from "next/link";
import { client } from "../libs/client";
import { Icon } from "@iconify/react";
import BlogCard from "../components/BlogCard";
import { NextSeo } from "next-seo";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: { blog: data.contents },
  };
};

function Blog({ blog }) {
  return (
    <>
      <NextSeo
        title="Blog | isak's portfolio"
        description="isakのブログです"
        openGraph={{
          url: "https://isak-portfolio.vercel.app/blog",
          title: "Blog | isak's portfolio",
          description: "isakのブログです",
        }}
      />
      <section className="text-gray-700">
        <div className="mx-auto max-w-screen-lg">
          <h1 className="text-3xl text-gray-900 mt-5 flex flex-row items-center justify-center">
            <Icon icon="fa6-solid:rss" className="mr-3" />
            Blog
          </h1>
          <div className="flex flex-wrap">
            {blog.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          {/* <div className="flex flex-col mx-10 mt-5">
          {blog.map((blog) => (
            <Link
              key={blog.id}
              href={`blog/${blog.id}`}
              className="flex flex-col  items-center sm:items-start sm:flex-row m-3 p-4 hover:bg-gray-100 hover:rounded-lg transition duration-5"
            >
              <div className="w-11/12 h-48 sm:w-48 sm:h-32 relative ">
                <Image
                  src={blog.eyecatch.url}
                  alt=""
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:m-3 text-xl p-2 flex flex-col">
                <h2>{blog.title}</h2>
                <div className="sm:mt-10 sm:ml-5 flex flex-row items-center justify-center sm:justify-start">
                  <Icon icon="fa6-solid:arrow-right" className="mr-3" />
                  <p className="text-lg">記事を読む</p>
                </div>
              </div>
            </Link>
          ))}
        </div> */}
        </div>
      </section>
    </>
  );
}

export default Blog;
