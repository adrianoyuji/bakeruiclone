import { useRouter } from "next/router";
import { useEffect } from "react";

//this page only exists in order to redirect the user

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, []);

  return <div></div>;
};

export default IndexPage;
