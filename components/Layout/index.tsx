import React, { ReactNode } from "react";
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import MetaTag from "components/Layout/MetaTag";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Welcome | Baker" }: Props) => (
  <main>
    <MetaTag title={title} />
    <Header />
    {children}
    <Footer />
  </main>
);

export default Layout;
