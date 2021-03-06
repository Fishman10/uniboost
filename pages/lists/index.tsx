import Head from "next/head";
import { useEffect } from "react";
import Router from "next/router";

import { MainLayout } from "../../components/MainLayout";

const Home: React.FC = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/lists") {
      Router.push("/lists/products");
    }
  }, []);

  return (
    <MainLayout title="Списки">
      <Head>
        <title>UniBoost</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
    </MainLayout>
  );
}

export default Home
