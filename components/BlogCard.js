import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog }) {
  const date = new Date(blog.publishedAt);
  return (
    <Link
      href={`blog/${blog.id}`}
      className="sm:w-1/2 md:w-1/3 w-full p-4 cursor-pointer"
    >
      <div className="rounded-lg p-6 h-56 sm:h-48 relative overflow-hidden">
        <p className="absolute px-3 py-1 top-3 left-0 z-10 text-white bg-gray-700 rounded-r-md">
          {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
        </p>
        <Image
          src={blog.eyecatch.url}
          alt=""
          fill
          className="object-cover rounded-lg hover:scale-110 hover:opacity-50 hover:rotate-3 transition transform duration-500 ease-in-out z-0"
        />
      </div>
      <h2 className="text-gray-900 text-xl font-medium ml-3">{blog.title}</h2>
      <p className="ml-3">{blog.tags.map((tag) => `#${tag} `).join("")}</p>
    </Link>
  );
}

export default BlogCard;
