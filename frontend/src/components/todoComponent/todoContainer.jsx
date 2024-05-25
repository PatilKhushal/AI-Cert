import React, { useEffect, useRef } from "react";
import TodoComponent from "./todoComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../Data/fetchTasks";
import { setCurrentUpdateTask, setTaskArr } from "../../context/globalContext";

const TodoContainer = () => {
  const containerRef = useRef(null);
  const tasks = useSelector((state) => state.globalContext.taskArr);
  let totalTask = useRef(tasks.length);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTasks()
    .then((result) => dispatch(setTaskArr(result)))
    .catch((error) => console.log("Error", error));
  
  dispatch(setCurrentUpdateTask(""));
    if(totalTask.current < tasks.length)
      containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    
    totalTask.current = tasks.length;
  },[])


  return (
    <div ref={containerRef} className="p-8 grid grid-cols-4 gap-8 mid-desktop:grid-cols-3 tablet:grid-cols-2 large-mobile:grid-cols-1 overflow-auto">
      {tasks?.tasks ? tasks.tasks.map((element) => (
        <TodoComponent
          title={element.title}
          description={element.description}
          status={element.status.toUpperCase()}
          key={element._id}
          id={element._id}
          due={element.due}
        /> 
      )): ""}
    </div>
  );
};

export default TodoContainer;
