import * as React from "react";
import Head from "next/head";
import { Wrapper } from "@codeponder/ui";
import { NavBar } from "./NavBar";

type Props = {
  title: string;
};

export const Layout: React.SFC<Props> = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Rubik:400,500"
        rel="stylesheet"
      />
    </Head>
    <Wrapper>
      <NavBar />
      {children}
    </Wrapper>
  </div>
);
