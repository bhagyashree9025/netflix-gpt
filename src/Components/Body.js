import React from "react";
import { useDispatch } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import GptSearch from "./GptSearch";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  dispatch(addUser());

  return (
    <div>
      <RouterProvider router={appRouter}>Body</RouterProvider>
    </div>
  );
};

export default Body;
