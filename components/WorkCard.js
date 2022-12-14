import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import WorkModal from "./WorkModal";
import { useState } from "react";

function WorkCard({ title, image, tags }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div
        className="sm:w-1/2 md:w-1/3 w-full p-4 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`bg-cover bg-center rounded-lg p-6 h-56 sm:h-48`}
        ></div>
        <h2 className="text-gray-900 text-2xl font-medium ml-3">{title}</h2>
        <p className="ml-3">{tags}</p>
      </div>
      <WorkModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title={title}
        image={image}
        tags={tags}
      />
    </>
  );
}

export default WorkCard;
