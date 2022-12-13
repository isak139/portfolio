import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className="text-gray-700 border-b border-gray-200">
        <div className="flex flex-col mx-auto container items-center max-w-screen-lg">
          <h1 className="text-3xl mx-5 mt-5 md:mr-auto">About</h1>
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
                所属 : 東京工業大学 工学院 情報通信系 B4
                <br />
                サークル : デジタル創作同好会traP
                <br />
                VRに関連した研究をしています
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
