import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SideMenu } from "../components/SideMenu";
import { BreadcrumbsComponent } from "./BreadcrumbsComponent";

export const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | Uniboost</title>
        <meta name="description" content="Система учета товаров" />
      </Head>
      <Header />
      <SideMenu />
      <BreadcrumbsComponent />
      {children}
      <Footer />
    </>
  );
};
