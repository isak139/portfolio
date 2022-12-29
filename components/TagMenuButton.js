import { Icon } from "@iconify/react";

function TagMenuButton({ tag, selectedTag, setSelectedTag }) {
  return (
    <li
      className="border-b hover:bg-gray-100 cursor-pointer flex items-center"
      onClick={() => setSelectedTag(tag)}
    >
      {selectedTag === tag ? (
        <Icon icon="fa6-solid:check" />
      ) : (
        <Icon icon="grommet-icons:status-placeholder" />
      )}
      <p className="ml-2">{tag}</p>
    </li>
  );
}

export default TagMenuButton;
