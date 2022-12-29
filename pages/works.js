import WorkCard from "../components/WorkCard";
import { client } from "../libs/client";
import { Icon } from "@iconify/react";
import { NextSeo } from "next-seo";
import { useState } from "react";
import TagMenuButton from "../components/TagMenuButton";
import tags from "../libs/tags.json";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: { works: data.contents },
  };
};

function Works({ works }) {
  const [selectedTag, setSelectedTag] = useState("All");
  const [isOpenTagMenu, setIsOpenTagMenu] = useState(false);
  const displayWorks =
    selectedTag === "All"
      ? works
      : works.filter((work) => work.tags.includes(selectedTag));
  return (
    <>
      <NextSeo
        title="Works | isak's portfolio"
        description="isakの作品集です"
        openGraph={{
          url: "https://isak-portfolio.vercel.app/works",
          title: "Works | isak's portfolio",
          description: "isakの作品集です",
        }}
      />
      <section className="text-gray-700">
        <div className="mx-auto max-w-screen-lg">
          <h1 className="text-3xl text-gray-900 mt-5 flex flex-row items-center justify-center">
            <Icon icon="fa6-solid:wand-magic-sparkles" className="mr-3" />
            Works
          </h1>
          {/* tagsドロップダウンメニュー */}
          <div className="flex flex-col relative z-10">
            <button
              onClick={() => setIsOpenTagMenu(!isOpenTagMenu)}
              className="bg-gray-100 outline outline-1 outline-gray-200 px-4 py-1 ml-auto mr-6 rounded-md hover:bg-gray-200 duration-300 flex items-center"
            >
              tags <Icon icon="fa6-solid:caret-down" className="ml-2" />
            </button>
            {isOpenTagMenu && (
              <div className="p-3 w-fit right-6 top-12 bg-white rounded-lg outline outline-1 outline-gray-200 absolute">
                <ul className="w-32 text-center">
                  {tags.map((tag) => (
                    <TagMenuButton
                      key={tag}
                      tag={tag}
                      selectedTag={selectedTag}
                      setSelectedTag={setSelectedTag}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-wrap z-0">
            {displayWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Works;
