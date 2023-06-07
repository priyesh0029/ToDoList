import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import ToDoList from "./components/TodoList/ToDoList";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const AppLayout = () => {
    return (
      <>
       <ToDoList />
      </>
    );
  };
  
  const appRouter = createBrowserRouter([
  
    {
      path :"/",
      element : <AppLayout/>
    },
    
  ])
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router = {appRouter} />);
  


