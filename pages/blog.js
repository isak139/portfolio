import { faRss, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { client } from "../libs/client";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: { blog: data.contents },
  };
};

function blog({ blog }) {
  return (
    <section className="text-gray-700">
      <div className="mx-auto container items-center max-w-screen-lg">
        <h1 className="text-center text-3xl text-gray-900 mt-5">
          <FontAwesomeIcon className="mx-3" icon={faRss} />
          Blog
        </h1>
        <div className="flex flex-col mx-10 mt-5">
          {blog.map((blog) => (
            <Link
              key={blog.id}
              href={`blog/${blog.id}`}
              className="flex flex-col  items-center md:items-start md:flex-row m-3 p-4 hover:bg-gray-100 hover:rounded-lg transition duration-5"
            >
              <div className="w-64 h-48 md:w-48 md:h-32 relative ">
                <Image
                  src={blog.eyecatch.url}
                  alt=""
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="text-xl p-2 flex flex-col">
                <h2>{blog.title}</h2>
                <div className="md:mt-10 md:ml-5 flex flex-row items-center justify-center md:justify-start">
                  <FontAwesomeIcon icon={faArrowRight} className="mr-3" />
                  <p className="text-lg">記事を読む</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default blog;
