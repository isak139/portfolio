import Image from "next/image";
function WorkModal({ isModalOpen, setIsModalOpen, work }) {
  return isModalOpen ? (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center z-10"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="p-5 rounded-lg md:w-11/12 w-5/6 bg-white max-w-screen-lg h-1/2 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-lg p-5 w-5/6 h-2/3 mx-auto relative">
          <Image
            src={work.image.url}
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h2 className="text-2xl ml-6 mt-3">{work.title}</h2>
        <p className="ml-6">{work.tags.map((tag) => `#${tag} `).join("")}</p>
        <p className="mb-3 mx-7">{work.description}</p>
        <h3 className="text-2xl ml-6 mb-3">Links</h3>
        <div className="ml-6 mt-auto flex justify-center sm:justify-start">
          {work.links.blog ? (
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
              onClick={() => window.open(work.links.blog)}
            >
              Blog
            </button>
          ) : null}
          {work.links.github ? (
            <button
              class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-3"
              onClick={() => window.open(work.links.github)}
            >
              Github
            </button>
          ) : null}
          {work.links.youtube ? (
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-3"
              onClick={() => window.open(work.links.youtube)}
            >
              Youtube
            </button>
          ) : null}
        </div>
      </div>
    </div>
  ) : null;
}

export default WorkModal;
