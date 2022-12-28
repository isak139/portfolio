import Image from "next/image";
import SkillCard from "/components/SkillCard";
import { Icon } from "@iconify/react";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Home | isak's portfolio"
        description="isakのポートフォリオサイトのホームです"
        openGraph={{
          url: "https://isak-portfolio.vercel.app/",
          title: "Home | isak's portfolio",
          description: "isakのポートフォリオサイトのホームです",
        }}
      />
      <section className="text-gray-700 border-b border-gray-200">
        <div className="mx-auto container items-center max-w-screen-lg">
          <h1 className="text-3xl text-gray-900 mt-5 flex flex-row items-center justify-center">
            <Icon icon="fa6-solid:circle-info" className="mr-3" />
            About
          </h1>
          <div className="flex container mx-auto py-10 px-5 flex-col md:flex-row items-center ">
            <div className="md:w-1/2 flex-grow mb-6">
              <Image
                className="p-1 ring-2 rounded-full"
                src="/icon.jpg"
                alt=""
                width={300}
                height={300}
              />
            </div>
            <div className="mx-auto md:w-1/2 lg:max-w-lg w-5/6 text-center md:text-left">
              <h2 className="text-2xl mb-3 text-gray-900 font-medium">
                isak&#040;イサク&#041;
              </h2>
              <p className="mb-8 leading-relaxed">
                所属 : 東京工業大学 工学院 情報通信系
                <br />
                サークル : デジタル創作同好会traP
                <br />
                VRに関連した研究をしています
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-b border-gray-200">
        <div className="mx-auto container max-w-screen-lg">
          <h1 className="text-3xl text-gray-900 mt-5 flex flex-row items-center justify-center">
            <Icon icon="fa6-solid:pen-nib" className="mr-3" />
            Skills
          </h1>
          <div className="flex flex-wrap">
            <SkillCard
              icon="mdi:blender-software"
              skillName="blender"
              text="複数体のフルスクラッチ人体モデルの作成を行いました. テクスチャリング，リギングも出来ます．機械的な物体のモデリングも得意です． →works"
            />
            <SkillCard
              icon="fa6-brands:unity"
              skillName="Unity"
              text="サークルでUnityを用いたチーム開発を行いました. Photonを用いたオンラインゲームも作りました. →works"
            />
            <SkillCard
              icon="fa6-brands:react"
              skillName="React"
              text="Reactを使ってtwitterクローンアプリを作りました. また, このサイトはNext.jsで作成しています."
            />
            <SkillCard
              icon="fa6-brands:square-js"
              skillName="javascript"
              text="外部から取得したデータを表示できるdiscord BOTを作りました. (Node.js)"
            />
            <SkillCard
              icon="fa6-brands:python"
              skillName="Python"
              text="基本的な機械学習を行いました．機械学習帳を一通り終わらせました．"
            />
            <SkillCard
              icon="mdi:language-cpp"
              skillName="C++"
              text="大学の授業および競技プログラミングで使用．"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-b border-gray-200">
        <div className="mx-auto container max-w-screen-lg">
          <h1 className="text-3xl text-gray-900 mt-5 flex flex-row items-center justify-center">
            <Icon icon="fa6-solid:address-card" className="mr-3" />
            Contact
          </h1>
          <div className="flex flex-col items-center">
            <div className="text-2xl flex items-center mb-3">
              <Icon icon="fa6-solid:envelope" />
              <p className="ml-2">hogehoge[at]fuga.com</p>
            </div>
            <a
              href="https://twitter.com/isak???"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center mb-5"
            >
              <Icon icon="fa6-brands:twitter" />
              <p className="ml-2">@あとで書く</p>
            </a>
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-b border-gray-200">
        <div className="mx-auto container max-w-screen-lg">
          <h1 className="text-3xl text-gray-900 mt-5 mb-5 flex flex-row items-center justify-center">
            <Icon icon="fa6-solid:link" className="mr-3" />
            Links
          </h1>
          <div className="flex flex-row justify-center mb-5">
            <a
              href="https://github.com/isak139"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="fa6-brands:github"
                className="text-5xl mx-3 hover:scale-110 duration-300"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/あとで書く"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="fa6-brands:youtube"
                className="text-5xl mx-3 hover:scale-110 duration-300"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
