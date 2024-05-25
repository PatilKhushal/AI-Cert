import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import FormAlert from "./FormAlert";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleTask } from "../../Data/fetchTasks";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUpdateTask } from "../../context/globalContext";

export default function GetTaskDetailsModal() {
  const navigate = useNavigate();
  let id = useParams().id;
  const dispatch = useDispatch();
  let currentUpdateTask = useSelector(
    (state) => state.globalContext.currentUpdateTask
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(id);
  useEffect(() => {
    if (id)
      fetchSingleTask(id)
        .then((result) => dispatch(setCurrentUpdateTask(result)))
        .catch((error) => console.log("error", error));
  }, [id]);

  console.log("Current Update Task", currentUpdateTask);
  function getDate() {
    const date = new Date();
    const monthMap = {
      0: "01",
      1: "02",
      2: "03",
      3: "04",
      4: "05",
      5: "06",
      6: "07",
      7: "08",
      8: "09",
      9: "10",
      10: "11",
      11: "12",
    };
    return `${date.getFullYear()}-${
      monthMap[date.getMonth()]
    }-${date.getDate()}`;
  }

  const handlePostTask = async (data, event) => {
    event.preventDefault();
    console.log("inside handler");
    console.log("data", data);

    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    });

    const result = await response.json();
    if (result.statusCode == 200) return navigate("/");
    return alert("Some Error Occured, Try Again...");
  };

  const handleUpdateTask = async (data, event) => {
    event.preventDefault();

    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    });

    const result = await response.json();
    if (result.statusCode == 200) dispatch(setCurrentUpdateTask(""));
    else alert("Some Error Occured, Try Again...");

    return navigate("/");
  };

  return <div className=" absolute w-full top-0 left-0 h-full z-10">
      <form
        onSubmit={id ? handleSubmit(handleUpdateTask) : handleSubmit(handlePostTask)}
        method="post"
        className="flex flex-col bg-modal-bg dark:bg-modal-bg-dark gap-6 justify-center items-center h-full p-8 relative"
      >
        <div className={`w-1/4 large-mobile:w-full`}>
          <input
            type="text"
            defaultValue={currentUpdateTask.title || ""}
            className={`w-full px-1 bg-input-bg dark:bg-input-bg-dark text-input-text dark:text-input-text-dark border outline-0`}
            placeholder="Enter your Task Title"
            {...register("title", {
              required: {
                value: true,
                message: "Title is required",
              },
              maxLength: {
                value: 30,
                message: "Title can be of 30 characters max",
              },
            })}
          />
          {errors.title ? (
            <FormAlert message={errors.title.message} />
          ) : (
            <FormAlert />
          )}
        </div>
        <div className={`w-1/4 large-mobile:w-full`}>
          <textarea
          
            type="text"
            placeholder="Enter your Task Description"
            defaultValue={currentUpdateTask.description || ""}
            className={`w-full px-1 bg-input-bg dark:bg-input-bg-dark text-input-text dark:text-input-text-dark border outline-0`}
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
          />
          {errors.description ? (
            <FormAlert message={errors.description.message} />
          ) : (
            <FormAlert />
          )}
        </div>
        <div className={`w-1/4 large-mobile:w-full`}>
          <select
            className={`w-full px-1 bg-input-bg dark:bg-input-bg-dark text-input-text dark:text-input-text-dark border outline-0`}
            {...register("status", {
              required: {
                value: true,
                message: "Status is required",
              },
            })}
          >
            <option value="in-progress" selected = {currentUpdateTask.status == "in-progress"}>In Progress</option>
            <option value="completed" selected = {currentUpdateTask.status == "completed"}>Completed</option>
            <option value="pending" selected = {currentUpdateTask.status == "pending"}>Pending</option>
          </select>
        </div>
        <div className={`w-1/4 large-mobile:w-full`}>
          <input
            type="date"
            min={getDate()}
            defaultValue={getDate()}
            className={`w-full px-1 bg-input-bg dark:bg-input-bg-dark text-input-text dark:text-input-text-dark border outline-0`}
            {...register("due", {
              required: {
                value: true,
                message: "Due Date is required",
              },
            })}
            onChange={(event) => console.log(event)}
          />
        </div>
        <div className="flex gap-4 justify-center w-full">
          <button
            type="submit"
            className=" bg-modal-button-bg p-2 text-modal-button-text px-4"
            value={"Add Task"}
          >
            Add Task
          </button>
        </div>

        <h1
          className="absolute top-1 right-2 hover:cursor-pointer font-bold"
          onClick={() => {
            navigate("/");
          }}
        >
          X
        </h1>
      </form>
    </div>
}
