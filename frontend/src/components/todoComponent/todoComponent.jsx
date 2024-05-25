import React, { useEffect, useRef, useState } from "react";
import TodoTitle from "../generic/AddTitle";
import TodoAddButton from "../generic/AddButton";
import DeleteButton from "../generic/DeleteButton";
import EditButton from "../generic/EditButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTaskArr } from "../../context/globalContext";

const TodoComponent = ({ id, title, description, status, due }) => {
  // creating array of tasks from task string
  const componentRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <div ref={componentRef} className=" bg-todo-bg dark:bg-todo-bg-dark text-todo-text dark:text-todo-text-dark border dark:border-0 p-8 flex flex-col gap-6 rounded-xl relative overflow-hidden h-max min-h-full leftToRight">
       <TodoTitle title={title} />
      <div className="flex flex-col justify-between items-center gap-4 w-full ">
      <div className="flex gap-2 items-center  p-2 w-full border dark:border-gray-500 rounded-md">
        <h1 className={`line-clamp-2 w-full dark:text-orange-600`}>{description}</h1>
      </div>
      <div className="flex gap-2 items-center  p-2 w-full border dark:border-gray-500 rounded-md">
        <h1 className="w-full dark:text-green-500">{"Due Date"}</h1>
        <h1 className={`w-full dark:text-green-500`}>{due.split('T')[0]}</h1>
      </div>
    </div>
    <TodoAddButton name={status} />
    <div className="absolute right-1 top-0 p-1 flex gap-2">
    <DeleteButton className="p-2 rounded-full bg-sidebar-button-bg dark:bg-black dark:border-0 hover:cursor-pointer" onClick={async () => {
          const response = await fetch(`http://localhost:3000/tasks/${id}`, {
            method : "DELETE"
          })
          const result = await response.json();
          dispatch(setTaskArr(result))
          componentRef.current.classList.remove("leftToRight");
          componentRef.current.classList.add("topToBottom");
        }}/>
      <EditButton className="p-2 rounded-full bg-sidebar-button-bg dark:bg-black dark:border-0 hover:cursor-pointer"  onClick={() => navigate(`/update-task/${id}`)} />
    </div>
    </div>
  );
};

export default TodoComponent;
