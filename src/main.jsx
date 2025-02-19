import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router";
import App from "./App.jsx";
import { Route } from "react-router";
import AddTask from "./Page/AddTask/AddTask.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Login from "./Page/Login/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/add" element={<AddTask />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
