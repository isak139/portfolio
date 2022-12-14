function WorkModal({ isModalOpen, setIsModalOpen, title, image, tags }) {
  return isModalOpen ? (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="p-5 rounded-lg z-10 md:w-11/12 w-5/6 bg-white max-w-screen-lg h-1/2 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`bg-cover bg-center rounded-lg p-5 w-5/6 h-2/3 mx-auto`}
        ></div>
        <h2 className="text-2xl ml-6 mt-3">{title}</h2>
        <p className="ml-6">{tags}</p>
        <p className="mb-3 mx-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est officiis
          odio nam ea ex quisquam iusto alias iste neque corrupti.
        </p>
        <h3 className="text-2xl ml-6 mb-3">Links</h3>
        <div className="ml-6 mt-auto flex justify-center sm:justify-start">
          <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-3">
            Blog
          </button>
          <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-3">
            Blog
          </button>
          <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-3">
            Blog
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default WorkModal;
