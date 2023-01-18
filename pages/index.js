import React from "react";
import { useRouter } from "next/router";
import MainPage from "../components/Layout/Home";
import { useSession } from "next-auth/react";


const Home = () => {
  // const { data: session, status } = useSession();
  // if (status === "authenticated") {
    return <MainPage />;
  // }
};

export default Home;
