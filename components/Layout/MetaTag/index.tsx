import React from "react";
import Head from "next/head";

interface Props {
  title: String;
}

const MetaTag = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default MetaTag;
