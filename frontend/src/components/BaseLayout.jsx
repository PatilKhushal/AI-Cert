import React, { useEffect } from "react";
import Nav from "./Nav";
import Heading from "./Header";
import TodoContainer from "./todoComponent/todoContainer";

export default function BaseLayout() {

  return (
    <div className="flex flex-col h-dvh justify-between bg-main-bg dark:bg-main-bg-dark text-black dark:text-white ">
      <div className="flex flex-col h-5/6">
        <Heading />
        <TodoContainer/>
      </div>

      <div className="w-full flex justify-center p-4">
        <Nav />
      </div>
    </div>
  );
}
