import React from "react";
import ReactDOM from "react-dom/client";
import BaseLayout from "./components/BaseLayout";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useParams } from "react-router-dom";
import GetTaskDetailsModal from "./components/todoComponent/getTaskDetailsModal";
import { fetchSingleTask } from "./Data/fetchTasks";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" exact element={<BaseLayout/>}  />
      <Route path="/add-task" element={<GetTaskDetailsModal />}/>
      <Route path="/update-task/:id" element={<GetTaskDetailsModal />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
