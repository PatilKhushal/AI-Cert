import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDark } from "../context/globalContext";

const Heading = () => {
  const isDark = useSelector((state) => state.globalContext.isDark);
  const dispatch = useDispatch();
  useEffect(() => {
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);

  
  return (
    <div className="flex p-2 justify-center bg-header-bg dark:bg-header-bg-dark text-header-text dark:text-header-text-dark">
      <h1 className="flex  justify-center items-center text-9xl w-full small-desktop:text-7xl large-mobile:text-5xl">
        TODO APP
      </h1>
      <div className="flex flex-col  justify-center p-2 gap-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            onChange={() => dispatch(setIsDark(!isDark))}
            checked={isDark}
            name="darkModeToggle"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 outline-none ring-4 ring-blue-300 dark:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
          DarkMode
        </span>
      </div>
    </div>
  );
};

export default Heading;
