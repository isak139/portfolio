import { client } from "../../libs/client";
import blogStyles from "../../styles/Blog.module.css";
import Image from "next/image";

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
  return (
    <main className="w-2/3 mx-auto text-gray-700">
      <div className="relative h-48 sm:h-80 m-3">
        <Image src={blog.eyecatch.url} alt="" fill className="object-cover" />
      </div>
      <h1 className="text-3xl text-center my-5">{blog.title}</h1>
      <div className="mb-5">投稿：{blog.publishedAt}</div>
      <div
        dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
        className={blogStyles.post}
      />
    </main>
  );
}
