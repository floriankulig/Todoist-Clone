import React from "react";
import { Sidebar } from "./Sidebar";
import { Tasks } from "../Tasks";
import { useAuthValue } from "../../context";
import { NoUserPage } from "../NoUserPage";

export const Content = () => {
  const currentUser = useAuthValue();

  return (
    <section className="content">
      <Sidebar />
      {currentUser.uid
        ? <Tasks />
        : <NoUserPage />
      }
    </section>
  )
}
