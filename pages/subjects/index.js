import React from "react";
import { useRouter } from "next/router";
import Subjects from "../../components/Layout/Subjects/SubjectsLayout";
import { useSession } from "next-auth/react";


const SubjectsPage = () => {
  // const { data: session, status } = useSession();
  // if (status === "authenticated") {
    return <Subjects />;
  // }
};

export default SubjectsPage;
