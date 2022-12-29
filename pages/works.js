import WorkCard from "../components/WorkCard";
import { client } from "../libs/client";
import { Icon } from "@iconify/react";
import { NextSeo } from "next-seo";
import WorkTagAccordion from "../components/WorkTagAccordion";
import { useState } from "react";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: { works: data.contents },
  };
};

function Works({ works }) {
  const [selectedTag, setSelectedTag] = useState("");
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
          <WorkTagAccordion />
          <div className="flex flex-wrap">
            {works.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Works;
