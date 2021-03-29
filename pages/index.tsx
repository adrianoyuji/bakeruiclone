import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, []);

  return <Layout title="Redirecting | Baker">You are beign redirected</Layout>;
};

export default IndexPage;
