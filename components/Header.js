import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 text-gray-700 border-b border-gray-200 bg-white">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a className="font-medium text-gray-900 mb-4 md:mb-0">
          <span className="text-xl ml-3">isak&apos;s portfolio</span>
        </a>
        <nav className="md:ml-auto text-base">
          <Link
            href="/"
            className="mr-5 hover:text-blue-400 duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/works"
            className="mr-5 hover:text-blue-400 duration-300 cursor-pointer"
          >
            Works
          </Link>
          <Link
            href="/blog"
            className=" hover:text-blue-400 duration-300 cursor-pointer"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
