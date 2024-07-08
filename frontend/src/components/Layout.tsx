import Head from "next/head";
import Header from "./Header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Checkpoint 3</title>
        <meta name="description" content="countries website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/WCS.jpg" />
      </Head>
      <Header />
      <main className="main-content">{children}</main>
    </>
  );
}
