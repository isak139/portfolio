import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faReact,
  faSquareJs,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SkillCard from "../components/SkillCard";

export default function Home() {
  return (
    <>
      <section className="text-gray-700 border-b border-gray-200">
        <div className="mx-auto container items-center max-w-screen-lg">
          <h1 className="text-center text-3xl text-gray-900 mt-5">About</h1>
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
                isak（イサク）
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
          <h1 className="text-center text-3xl text-gray-900 mt-5 mb-5">
            Skills
          </h1>
          <div className="flex flex-wrap">
            <SkillCard
              icon={faUnity}
              skillName="Unity"
              text="サークルでUnityを用いたチーム開発を行いました."
            />
            <SkillCard
              icon={faReact}
              skillName="React"
              text="Reactを使ってtwitterクローンアプリを作りました. また, このサイトはNext.jsで作成しています."
            />
            <SkillCard icon={faSquareJs} skillName="javascript" text="aaaa" />
            <SkillCard icon={faUnity} skillName="blender" text="aaaa" />
            <SkillCard icon={faUnity} skillName="a" text="aaaa" />
            <SkillCard icon={faUnity} skillName="a" text="aaaa" />
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-b border-gray-200">
        <div className="mx-auto container max-w-screen-lg">
          <h1 className="text-center text-3xl text-gray-900 mt-5 mb-5">
            Contact
          </h1>
          <div className="flex flex-col items-center">
            <div className="text-2xl flex items-center mb-3">
              <FontAwesomeIcon icon={faEnvelope} />
              <p className="ml-2">hogehoge[at]fuga.com</p>
            </div>
            <a
              href="https://twitter.com/isak???"
              className="text-2xl flex items-center mb-5"
            >
              <FontAwesomeIcon icon={faTwitter} />
              <p className="ml-2">@あとで書く</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
