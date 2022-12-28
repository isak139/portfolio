import "../styles/globals.css";
import Layout from "../components/Layout";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        defaultTitle="isak's portfolio"
        description="isakの作品集やブログを掲載したポートフォリオサイトです"
        openGraph={{
          type: "website",
          title: "isak's portfolio",
          description: "isakの作品集やブログを掲載したポートフォリオサイトです",
          site_name: "isak's portfolio",
          url: "https://isak-portfolio.vercel.app/",
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
