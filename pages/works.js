import WorkCard from "../components/WorkCard";
import { client } from "../libs/client";
import { Icon } from "@iconify/react";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: { works: data.contents },
  };
};

function works({ works }) {
  return (
    <section className="text-gray-700 border-b border-gray-200">
      <div className="mx-auto container items-center max-w-screen-lg">
        <h1 className="text-3xl text-gray-900 mt-5 flex flex-row items-center justify-center">
          <Icon icon="fa6-solid:wand-magic-sparkles" className="mr-3" />
          Works
        </h1>
        <div className="flex flex-wrap">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default works;
