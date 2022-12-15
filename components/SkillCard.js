import { Icon } from "@iconify/react";

function SkillCard({ icon, skillName, text }) {
  return (
    <div className="sm:w-1/2 md:w-1/3 w-full p-4">
      <div className="bg-gray-200 rounded-lg p-6 h-48 sm:h-48">
        <div className="flex items-center mb-2 text-gray-900">
          <Icon icon={icon} className="text-5xl " />
          <h2 className="text-3xl font-medium ml-2">{skillName}</h2>
        </div>
        <p className="break-all">{text}</p>
      </div>
    </div>
  );
}

export default SkillCard;
