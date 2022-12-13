import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillCard({ icon, skillName, text }) {
  return (
    <div className="sm:w-1/2 md:w-1/3 w-full p-4">
      <div className="bg-gray-200 rounded-lg p-5 h-48 sm:h-48">
        <div className="flex items-center mb-2">
          <FontAwesomeIcon className="text-5xl" icon={icon} />
          <h2 className="text-gray-900 text-3xl font-medium ml-2">
            {skillName}
          </h2>
        </div>
        <p className="break-all">{text}</p>
      </div>
    </div>
  );
}

export default SkillCard;
