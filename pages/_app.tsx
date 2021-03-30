import React from "react";
import AppProvider from "hooks";
import { AppProps } from "next/app";
import "styles/global.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
