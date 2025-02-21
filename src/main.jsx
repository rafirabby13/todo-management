import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router";
import App from "./App.jsx";
import { Route } from "react-router";
import AddTask from "./Page/AddTask/AddTask.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Login from "./Page/Login/Login.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UpdateTask from "./Page/Home/UpdateTask.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/task/:id" element={<UpdateTask />} />
            <Route path="/add" element={<AddTask />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
