import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Login2 from "./pages/SignUp";
import Forgot from "./pages/Forgot";
import Home from "./pages/Home";
import cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "./pages/Redirect";
import { Provider } from "../src/context/context.jsx";
import Head from "./pages/Head";
export default function App() {
  // axios.interceptors.request.use(
  //   (config) => {
  //     const token = Cookies.get("token");
  //     config.headers.set("token", token);
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Login2 />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/" element={<Home />} />
          <Route path="/:redirect" element={<Redirect />} />
          <Route path="/works" element={<Head />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
