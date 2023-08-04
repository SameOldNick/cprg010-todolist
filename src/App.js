import React from "react";

import "./assets/App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { ThemeProvider } from "./components/ThemeContext";

import FunFactPage from "./pages/FunFactPage";
import TodoListPage from "./pages/TodoListPage";
import NotFoundPage from "./pages/NotFoundPage";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  //document.body.classList.add('dark-mode');

  return (
    <>
      <Helmet>
        <title>My To Do List</title>
        <body className="dark-mode" />
      </Helmet>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="fun-fact" element={<FunFactPage />} />
            <Route path="todo-list" element={<TodoListPage />} />
            <Route index element={<Navigate to="/todo-list" />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
