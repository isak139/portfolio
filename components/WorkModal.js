import { Icon } from "@iconify/react";
import Image from "next/image";
function WorkModal({ isModalOpen, setIsModalOpen, work }) {
  return isModalOpen ? (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center z-10"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="p-3 rounded-lg md:w-11/12 w-5/6 bg-white max-w-screen-lg flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-lg w-5/6 h-56 sm:h-72 md:h-96 mx-auto relative">
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
        <div className="mt-auto">
          <h3 className="text-2xl ml-6 mb-3 text-center sm:text-left">Links</h3>
          <div className="ml-6 mt-auto flex justify-center sm:justify-start">
            {work.links.site ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3 flex items-center"
                onClick={() => window.open(work.links.site)}
              >
                <Icon icon="fa6-solid:link" className="mr-1" />
                Site
              </button>
            ) : null}
            {work.links.github ? (
              <button
                className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-3 flex items-center"
                onClick={() => window.open(work.links.github)}
              >
                <Icon icon="fa6-brands:github" className="mr-1" />
                Github
              </button>
            ) : null}
            {work.links.youtube ? (
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-3 flex items-center"
                onClick={() => window.open(work.links.youtube)}
              >
                <Icon icon="fa6-brands:youtube" className="mr-1" />
                Youtube
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default WorkModal;
