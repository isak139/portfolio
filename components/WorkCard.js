import Image from "next/image";
import WorkModal from "./WorkModal";
import { useState } from "react";

function WorkCard({ work }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div
        className="sm:w-1/2 md:w-1/3 w-full p-4 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="rounded-lg p-6 h-56 sm:h-48 relative">
          <Image
            src={work.image.url}
            alt=""
            fill
            className="object-cover rounded-lg hover:scale-105 hover:opacity-50 transition transform duration-500 ease-in-out"
          />
        </div>
        <h2 className="text-gray-900 text-2xl font-medium ml-3">
          {work.title}
        </h2>
        <p className="ml-3">{work.tags.map((tag) => `#${tag} `).join("")}</p>
      </div>
      <WorkModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        work={work}
      />
    </>
  );
}

export default WorkCard;
